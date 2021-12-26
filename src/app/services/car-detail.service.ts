import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { SingleDataResponseModel } from '../models/singleDataResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
   url="http://localhost:5850/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
      let newPath=this.url + "/Cars/getcardetails" ;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsById(carId:number):Observable<SingleDataResponseModel<CarDetail>>{
    let newPath=this.url + "Cars/getcardetailsbyid?carId=" + carId;
    return this.httpClient.get<SingleDataResponseModel<CarDetail>>(newPath);
}
}
