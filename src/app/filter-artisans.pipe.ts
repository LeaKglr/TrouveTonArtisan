import { Pipe, PipeTransform } from '@angular/core';
import { Artisans } from './artisans.service';

@Pipe({
  name: 'filterArtisans'
})
export class FilterArtisansPipe implements PipeTransform {

  transform(artisans: Artisans[], searchTerm: string): Artisans[] {
    if (!artisans || !searchTerm) {
      return artisans;
    }

    searchTerm = searchTerm.toLowerCase();
    return artisans.filter(artisan => 
      artisan.name.toLocaleLowerCase().includes(searchTerm) ||
      artisan.specialty.toLocaleLowerCase().includes(searchTerm) ||
      artisan.location.toLocaleLowerCase().includes(searchTerm)
    )
  }

}
