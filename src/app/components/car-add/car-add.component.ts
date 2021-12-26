import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  currentBrand: number;
  currentColor: number;
  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carName: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  setBrandId(brandId: string) {
    this.currentBrand = parseInt(brandId);
    //console.log(this.currentBrand);

  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
      //console.log(this.brands)
    })
  }
  setColorId(colorId: string) {
    this.currentColor = parseInt(colorId);
    // console.log(this.currentColor)

  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    }

    )
  }

  addCar() {

    if (this.carAddForm.valid) {
      //     let carModel = Object.assign({}, this.carAddForm.value)
      //     // console.log(carModel)
      //     this.carService.addCar(carModel).subscribe(response => {
      //       // console.log(data)
      //       this.toastrService.success(response.message, "BAŞARILI.")
      //     }, responseError => {
      //       if (responseError.error.Errors.length > 0) {
      //         // console.log(responseError.error.Errors)
      //         for (let i = 0; i < responseError.error.Errors.length; i++) {

      //           this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası");
      //         }

      //       }

      //     })

      //   } else {
      //     this.toastrService.error("BAŞARISIZ İŞLEM")




      let carModel = Object.assign({}, this.carAddForm.value)
      this.carService.addCar(carModel).subscribe(response => {
        this.toastrService.success('Added.')
      }, error => {
        this.toastrService.error(error)
      }
      )
    } else {
      this.toastrService.error('Form invalid.')
    }
  }


}




