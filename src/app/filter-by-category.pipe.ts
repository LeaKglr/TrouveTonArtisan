import { Pipe, PipeTransform } from '@angular/core';
import { Artisans } from './artisans.service';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(artisans: Artisans[], category: string | null): Artisans[] {
    if (!artisans || !category) {
      return artisans;
    }
    return artisans.filter(artisan => artisan.category === category);
  }

}
