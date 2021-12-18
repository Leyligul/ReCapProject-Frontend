import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { CarDetail } from '../models/carDetail';



@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
   url="http://localhost:5850/api/Cars/getcardetails"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.url);
  }
}
