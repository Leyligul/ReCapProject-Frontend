import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';


import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
   brands:Brand[]=[];
   currentBrand:Brand;
   activeAllCars:boolean=false;
   
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      //console.log(response.data)
    })

  }

  setCurrentBrand(brand:Brand){
   // console.log(brand.brandName)
   this.currentBrand=brand;
  }
   
  allCarsActive(){
    this.activeAllCars=true;

  }

  
  
  getCurrentBrandClass(brand:Brand){
    this.activeAllCars=false;
    if(brand==this.currentBrand){
      
      return "list-group-item active"
    }else{
      
      return "list-group-item"
    }
  }



  getAllCarsClass(){
  //   if(!this.currentBrand){
  //     return "list-group-item active"
  //   }
  //   else{
      
  //     return "list-group-item "
  //   }
  // }

  if(this.activeAllCars==false){
    return "list-group-item"
  }else{
    return "list-group-item active"
  }
 }
}
