import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Color } from '../models/color';

@Pipe({
  name: 'filtercolor'
})
export class FiltercolorPipe implements PipeTransform {

  transform(value: Color[],filterText:string): Color[]{
      filterText= filterText?filterText.toLocaleUpperCase():""
   
       return filterText?value
      .filter((p:Color)=>p.colorName.toLocaleUpperCase().indexOf(filterText)!==-1)
      :value;
      }
  
}
