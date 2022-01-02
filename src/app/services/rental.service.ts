import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="http://localhost:5850/api/"

  constructor(private httpClient:HttpClient) { }

  // getRentals():Observable<ListResponseModel<Rental>>{
  //    let newPath=this.apiUrl+"/Rentals/getrentaldetails"

  //   return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  // }


  addRental(rental:Rental):Observable<ResponseModel>{
      let newPath=this.apiUrl+"Rentals/add"

    return this.httpClient.post<ResponseModel>(newPath,rental);
  }

  // checkReturnDate(carId:number):Observable<ResponseModel>{
  //   let newPath=this.apiUrl+"Rentals/checkreturndate?carId="+carId
  //   return this.httpClient.get<ResponseModel>(newPath);
  // }
   
   checkRentDate(carId:number,rentDate:Date,returnDate:Date){
     let newPath=this.apiUrl+"Rentals/checkrentdate?carId="+carId+"&rentDate="+rentDate + "&returnDate=" + returnDate;
     return this.httpClient.get<ResponseModel>(newPath);
     
   }

  




}
