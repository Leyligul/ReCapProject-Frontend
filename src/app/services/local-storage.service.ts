import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  saveToken(token:string){
    localStorage.setItem('token',token)
    
  }

  getToken():string{
    return localStorage.getItem('token')
  }

  removeToken(){
    localStorage.removeItem('token');
  }


  // get(key:string){
  //   return localStorage.getItem(key)
  // }

 
  


}
