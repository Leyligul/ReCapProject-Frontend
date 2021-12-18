import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';

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
}
