import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs'
import { ListResponseModel } from '../models/ListResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
   apiUrl="http://localhost:5850/api/Brands/getall"
  constructor(private httpClient:HttpClient) { }


  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
