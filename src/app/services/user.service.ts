import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleDataResponseModel } from '../models/singleDataResponseModel';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  fullName:string
  mail:string

  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService, 
    private jwtHelperService:JwtHelperService) { }

  getByMail(mail:string){
   
    let apiUrl = "http://localhost:5850/api/Users/getbymail?mail="+mail;
  
    return this.httpClient.get<SingleDataResponseModel<User>>(apiUrl)
  }


  upDateUser(user:User):Observable<ResponseModel>{
    let newPath= "http://localhost:5850/api/Users/update";
    return this.httpClient.post<ResponseModel>(newPath,user);
  }

 
}
