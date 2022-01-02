import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
   carDetails:CarDetail[]=[];

   carId:number;
  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=params["carId"]
        this.getCarDetailsById(params["carId"])
      }else{
        this.getCarDetails()
      }
    })
  }
  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data
      
    })
  }
  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response=>{
      this.carDetails=[response.data]
     console.log(this.carDetails)
    })
  }
 


 
 

  
}

