import { Pipe, PipeTransform } from '@angular/core';
import { Plat } from '../models/plat.model';

@Pipe({
  name: 'filterPlat'
})
export class FilterPlatPipe implements PipeTransform {

  transform(value: Plat[], prixMax: number = Infinity): Plat[] {
    return value.filter( (element) => element.prix <= prixMax );
  }

}
