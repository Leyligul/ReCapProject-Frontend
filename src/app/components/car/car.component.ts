import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/ListResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
   cars:Car[]=[];
   brands:Brand[]=[];
   colors:Color[]=[];
  
   currentCar:Car;
   currentBrand:number;
   currentColor:number;
  
   filterText="";
   
   //selectedImagePath:string
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     if(params["brandId"] && params["colorId"]){
              this.getCarBycolorIdAndBrandId(params["brandId"],params["colorId"])
     }
      else if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }

      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])

      }
      
      else{
        this.getCars()
        
      }

    })
    this.getColors();
    this.getBrands();
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars=response.data
    })
  }

  getCarBycolorIdAndBrandId(colorId:number,brandId:number){
    this.carService.getCarsbycolorIdAndBrandId(colorId,brandId).subscribe(response=>{
      this.cars=response.data

    })
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
   
    
    console.log(car.dailyPrice)
  }
  getAllCarDetailClass(car:Car){
    if(car==this.currentCar){
      return "table-active"
    }else{
      
      return "table"
    
    }
  }
  
  addToCart(car:Car){
    //console.log(car)
    
    this.toastrService.success("Added.",car.carName)
    this.cartService.addToCart(car);

  }
   

   getBrands(){
     this.brandService.getBrands().subscribe(response=>{
       this.brands=response.data;
     })

   }

   getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
   }

   setBrandId(brandId:string){
    this.currentBrand=parseInt(brandId);
    //console.log(this.currentBrand);

   }
    
   setColorId(colorId:string){
     this.currentColor=parseInt(colorId);
     // console.log(this.currentColor)

   }

   

}
