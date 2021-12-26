import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterbrand'
})
export class FilterbrandPipe implements PipeTransform {

    transform(value: Brand[],filterText:string): Brand[]{
   filterText= filterText?filterText.toLocaleUpperCase():""
 
   return filterText?value
   .filter((p:Brand)=>p.brandName.toLocaleUpperCase().indexOf(filterText)!==-1)
    :value;
 }


}
