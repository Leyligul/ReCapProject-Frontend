import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleDataResponseModel } from '../models/singleDataResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 apiUrl="http://localhost:5850/api/auth/";
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleDataResponseModel<TokenModel>>{
      return this.httpClient.post<SingleDataResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

   isAuthenticated(){
     if(localStorage.getItem("token")){
       return true;
     }
     else{
       return false;
     }
   }

}
