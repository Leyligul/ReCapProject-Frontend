import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
url="http://localhost:5850/api/";
  constructor(private httpClient:HttpClient) { }


  pay():Observable<ResponseModel>{
    let newPath=this.url+"Payments/pay";
    return this.httpClient.get<ResponseModel>(newPath);
 
  }
}
