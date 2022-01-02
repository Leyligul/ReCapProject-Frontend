import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';

import { SingleDataResponseModel } from '../models/singleDataResponseModel';
import { TokenModel } from '../models/tokenModel';

import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


 



 apiUrl="http://localhost:5850/api/auth/";
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService,
     private jwtHelperService:JwtHelperService,private toastrService:ToastrService,
     private router:Router) { }

  login(loginModel:LoginModel):Observable<SingleDataResponseModel<TokenModel>>{
      return this.httpClient.post<SingleDataResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  register(registerModel:RegisterModel):Observable<SingleDataResponseModel<TokenModel>>{
    return this.httpClient.post<SingleDataResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
}





   isAuthenticated(){
     if(this.localStorageService.getToken()){
       return true;
     }
     else{
       return false;
     }
   }

  
   getUserInfoByToken(){
    let token=this.localStorageService.getToken();
    let decodedToken=this.jwtHelperService.decodeToken(token);
    let user = {
     firstName:decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
     mail:decodedToken['email'],
    lastName:decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'],
    password:"",
    userId:decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    }
    return  user;


  
  
    
     }

     logout(){
      this.localStorageService.removeToken();
      this.toastrService.success("Çıkış yapıldı.")
      this.router.navigate(["/login"])
    }
  
 


}
