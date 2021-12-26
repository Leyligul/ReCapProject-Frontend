import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { ListResponseModel } from '../models/ListResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class ColorService {
   apiUrl="http://localhost:5850/api/";
  constructor(private httpClient:HttpClient) { }
   
  getColors():Observable<ListResponseModel<Color>>{
      return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"Colors/getall")
  }

  addColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }
}
