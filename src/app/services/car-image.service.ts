import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
   url="http://localhost:5850/api/"
   
  constructor(private httpClient:HttpClient) { }
  
  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.url+"CarImages/getcarimagebycarid?carId="+carId

    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }


}
