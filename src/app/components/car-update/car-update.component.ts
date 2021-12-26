import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  cardetail:CarDetail;
  brands:Brand[];
  colors:Color[];
  currentBrand:number;
  currentColor:number;
  carUpDateForm: FormGroup;
  carId:number;
  constructor(private carDetailService:CarDetailService,
    private toastrService:ToastrService,private activatedRoute:ActivatedRoute,
    private colorService:ColorService,private brandService:BrandService,
    private formBuilder: FormBuilder,
    private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=params["carId"];
        this.getCarDetail(params["carId"])
      }
    })
    this.createCarUpDateForm();
    this.getBrands();
    this.getColors();
    
  }
  
  getCarDetail(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response=>{
      this.cardetail=response.data
    
      
    })
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

   createCarUpDateForm() {
    this.carUpDateForm = this.formBuilder.group({
      carName: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
    })
  }
  upDateCar() {
   
    if (this.carUpDateForm.valid) {
      let carModel = Object.assign({}, this.carUpDateForm.value)
      // console.log(carModel)
      carModel.carId=this.carId
      this.carService.upDateCar(carModel).subscribe(response => {
        // console.log(data)
        this.toastrService.success(response.message, "BAŞARILI.")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          // console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {

            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası");
          }

        }

      })

    } else {
      this.toastrService.error("BAŞARISIZ İŞLEM")
    }
  }

}
