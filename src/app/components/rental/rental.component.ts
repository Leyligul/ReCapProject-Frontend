
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = []
  rental: Rental;
  currentDate: string;
  returnDate:Date;

  rentalDateForm: FormGroup;
 
  carId: number;
  
  rentDate:Date;
  user: User;

  constructor(private rentalService: RentalService,
    private toastrService: ToastrService, private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router , private authService:AuthService,
    private localStorageService:LocalStorageService) {

  }

  ngOnInit(): void {


    // this.createDateForm();

    // this.activatedRoute.params.subscribe(params => {
    //   if (params["carId"]) {
    //     this.carId = params["carId"]
    //   if(params["returnDate"] && params["rentDate"]){
    //     this.returnDate=params["returnDate"]
    //     this.rentDate=params["rentDate"]
    //   }


    //   }
    // })


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

  // createDateForm() {
  //   this.rentalDateForm = this.formBuilder.group({
  //     rentDate: ["", Validators.required],
  //     returnDate: ["", Validators.required],
        
  //   })

    
  // }


  

  // addRental() {
    
  //   let user=this.authService.getUserInfoByToken();
  //   this.user=user;
  //   let rentalModel={
  //     carId:this.carId,
  //     userId:parseInt(user.userId),
  //     rentDate:this.rentalDateForm.controls["rentDate"].value,
  //     returnDate: this.rentalDateForm.controls["returnDate"].value,
  //     id:
      

  //   }
  //   this.rentalService.addRental(rentalModel).subscribe(response => {
  //     // console.log(data)
  //     this.toastrService.success(response.message, "BAŞARILI.")


  //   })


  // }



  // checkRentDate() {
  //   if (this.rentalDateForm.valid) {


  //     this.rentalService.checkRentDate(this.carId, this.rentalDateForm.controls["rentDate"].value, this.rentalDateForm.controls["returnDate"].value).subscribe(response => {
  //       console.log(response)
  //       if (!response.success) {
  //         this.toastrService.error(response.message)
  //       } else {
  //         this.toastrService.success(response.message)
         
          
  //       }

  //     }, error => {
  //       this.toastrService.error(error.error.message)



  //     })
  //   } else {
  //     this.toastrService.error("İLGİLİ ALANLARI DOLDURUNUZ.")
  //   }



  // }

  // getUserInfo() {
  //   let user=this.authService.getUserInfoByToken();
  //   this.user=user;
  //   console.log(this.user)
  // }



}












