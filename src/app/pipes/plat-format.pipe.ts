import { Pipe, PipeTransform } from '@angular/core';
import { Plat } from '../models/plat.model';

@Pipe({
  name: 'platFormat'
})
export class PlatFormatPipe implements PipeTransform {

  transform( value: Plat ): string {
    return value.nom + " - " + value.prix + "€";
  }

}
