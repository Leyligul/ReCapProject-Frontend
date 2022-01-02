import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ResponseModel } from '../models/responseModel';
import { SingleDataResponseModel } from '../models/singleDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url="http://localhost:5850/api/";
  constructor(private httpClient:HttpClient) { }


  
  addCard(card:Card):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"Cards/add",card)
  }

  getCardByUserId(userId:number):Observable<SingleDataResponseModel<Card>>{
    return this.httpClient.get<SingleDataResponseModel<Card>>(this.url+"Cards/getcardbyuserid?userId="+userId)
  }
}
