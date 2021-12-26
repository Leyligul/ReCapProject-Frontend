import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
url="http://localhost:5850/api/";
  constructor(private httpClient:HttpClient) { }
   getCars():Observable<ListResponseModel<Car>>{
     let newPath= this.url+"Cars/getall"
     return this.httpClient.get<ListResponseModel<Car>>(newPath)
   }
   getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
     let newPath=this.url+"Cars/getbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.url+"Cars/getbycolorid?id="+colorId
   return this.httpClient.get<ListResponseModel<Car>>(newPath)
 }

  getCarsbycolorIdAndBrandId(colorId:number,brandId:number){
    //let newPath=this.url + `Cars/getcarsbycoloridandbrandid?colorId=${colorId}&brandId=${brandId}`;
    let newPath=this.url + "Cars/getcarsbycoloridandbrandid?colorId=" + colorId + "&brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

   addCar(car:Car):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.url+"cars/add",car)
   }

   upDateCar(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"cars/update",car);
   }
}
