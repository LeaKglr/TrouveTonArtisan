import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


export interface Artisans {
  name: string;
  note: number;
  specialty: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})

export class ArtisansService {
   private dataUrl = 'assets/datas.json';

  constructor(private http: HttpClient) { }

  getTopArtisans(): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl).pipe(
      map(artisans => {
        artisans.sort((a,b) => b.note - a.note);
        return artisans.slice(0, 3);
      })
    )
  }

}
