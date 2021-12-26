
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { Component, OnInit, Inject,LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = []
  rental: Rental;
  currentDate: string;
  returnDate: string;
  paymentredirection: string = "deactive-link";
  rentalDateForm: FormGroup;
  carId: number;
 
  constructor(private rentalService: RentalService,
    private toastrService: ToastrService, private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    @Inject(LOCALE_ID) private locale: string) { 

    }

  ngOnInit(): void {


    this.createDateForm();

    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.carId = params["carId"]



      }
    })
  }


  // this.getRentals();

  // this.activatedRoute.params.subscribe(params => {
  //   if (params["rental"]) {
  //     this.CheckRental(params["rental"])
  //   } else {
  //     this.toastrService.error("İşlem başarısız!");
  //   }
  // })
  // this.createRentalAddForm();



  // getRentals(){
  //   this.rentalService.getRentals().subscribe(response=>{
  //     this.rentals=response.data
  //   })
  // }

  createDateForm() {
    this.rentalDateForm = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: ["", Validators.required]

    })
  }

  // addRental(){

  //   if (this.rentalAddForm.valid) {
  //     let rentalModel = Object.assign({}, this.rentalAddForm.value)
  //     // console.log(carModel)
  //     this.rentalService.addRental(rentalModel).subscribe(response => {
  //       // console.log(data)
  //       this.toastrService.success(response.message, "BAŞARILI.")


  //     })

  //   } else {
  //     this.toastrService.error("BAŞARISIZ İŞLEM")
  //   }
  // }
  checkDateFormat(date:any){
    let newDate = formatDate(date,'yyyy-MM-dd',this.locale);
    console.log(newDate)
     
  }
  
  checkReturnDate() {
    if (this.rentalDateForm.valid) {
         
       this.checkDateFormat(this.rentalDateForm.controls["rentDate"].value);
      this.rentalService.checkReturnDate(this.carId).subscribe(response => {
          console.log(response)
        if (!response.success) {
          this.toastrService.error(response.message)
        }

      })
    }else{
      this.toastrService.error("İLGİLİ ALANLARI DOLDURUNUZ.")
    }

    

   


  }

   
}







