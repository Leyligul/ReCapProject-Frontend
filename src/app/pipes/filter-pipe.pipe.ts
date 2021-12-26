import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[],filterText:string): Car[]{
   filterText= filterText?filterText.toLocaleUpperCase():""

   return filterText?value
   .filter((p:Car)=>p.carName.toLocaleUpperCase().indexOf(filterText)!==-1)
   :value;
  }


   
  
  
}

//map,filter