import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardForm: FormGroup
  returnDate: Date;

  rentalDateForm: FormGroup;


  carId: number;
  userId: number;
  rentDate: Date;
  user: User;


  activeForm: boolean = false;
  isCardExist: boolean = false;



  constructor(private toastrService: ToastrService,
    private paymentService: PaymentService, private formBuilder: FormBuilder, private router: Router,
    private rentalService: RentalService, private activatedRoute: ActivatedRoute,
    private authService: AuthService, private cardService: CardService) { }

  ngOnInit(): void {
    this.createDateForm();

    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.carId = params["carId"]
        if (params["returnDate"] && params["rentDate"]) {
          this.returnDate = params["returnDate"]
          this.rentDate = params["rentDate"]
        }


      }
    })
    this.createCardForm();


  }
  createDateForm() {
    this.rentalDateForm = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: ["", Validators.required],

    })


  }



  checkRentDate() {
    if (this.rentalDateForm.valid) {
     


      this.rentalService.checkRentDate(this.carId, this.rentalDateForm.controls["rentDate"].value, this.rentalDateForm.controls["returnDate"].value).subscribe(response => {
        console.log(response)

        if (!response.success) {
          this.toastrService.error(response.message)
          this.activeForm = false;


        } else {
          this.toastrService.success("Tarihler mük")
          this.user = this.authService.getUserInfoByToken();
           
    
           this.getCardByUserId(this.user.userId)
          this.activeForm = true;

        }

      }, error => {
        this.toastrService.error(error.error.message)
        this.activeForm = false;



      })
    } else {
      this.toastrService.error("İLGİLİ ALANLARI DOLDURUNUZ.")
      this.activeForm = false;
    }



  }

  getCardByUserId(userId: number) {
    this.cardService.getCardByUserId(userId).subscribe(response => {
      if (response.data != null) {
        this.cardForm.controls["nameOnCard"].setValue(response.data.nameOnCard);
        this.cardForm.controls["cardNumber"].setValue(response.data.cardNumber);
        this.cardForm.controls["cvv"].setValue(response.data.cvv);
        this.cardForm.controls["validDate"].setValue(response.data.validDate)
        this.isCardExist = true;
      }

    })


  }





  createCardForm() {
    this.cardForm = this.formBuilder.group({
      nameOnCard: ["", Validators.required],
      cardNumber: ["", Validators.required],
      cvv: ["", Validators.required],
      validDate: ["", Validators.required]


    })


  }






  Pay() {
    if (this.cardForm.valid) {

      let cardModel = Object.assign({}, this.cardForm.value)
      this.user = this.authService.getUserInfoByToken();
      cardModel.userId = this.user.userId

      console.log(this.user)
      this.paymentService.pay(cardModel).subscribe(response => {
        this.toastrService.success(response.message)
        this.addRental();
        if (!this.isCardExist) {
          if (confirm('Kart bilgileriniz kayıt edilsin mi ?')) {
            // Save it!
            this.cardService.addCard(cardModel).subscribe(response => {
              console.log(response)

            })
          } else {
            // Do nothing!


            console.log('reddediyruk');
          }
        }


        this.router.navigate(["/"])

      }, responseError => {
        console.log(responseError)
        if (responseError.error.Errors) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {

            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Hata!");
          }

        }
        else {
          // console.log(responseError.error.Errors)
          this.toastrService.error(responseError)
          //burası business hatası. Validator message dşönmez çünkü
        }


      })

    }

    else {
      this.toastrService.error('Formu Doldurunuz.')
    }


  }






  addRental() {

    this.user = this.authService.getUserInfoByToken();

    let rentalModel = {
      carId: this.carId,
      userId: this.user.userId,
      rentDate: this.rentalDateForm.controls["rentDate"].value,
      returnDate: this.rentalDateForm.controls["returnDate"].value,
      id: 0

    }
    this.rentalService.addRental(rentalModel).subscribe(response => {

      console.log(response)
      console.log(rentalModel)

    })


  }

}
