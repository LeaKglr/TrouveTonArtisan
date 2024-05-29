import { Component, OnDestroy, OnInit } from '@angular/core';
import { Artisans, ArtisansService } from '../artisans.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss'
})
export class FicheArtisanComponent implements OnInit{
  artisan: Artisans | undefined;
  private routeSub: Subscription | null = null;

  constructor (private route: ActivatedRoute, private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(async params => {
      const name = params.get('name');
      if (name) {
        this.artisan = await firstValueFrom(this.artisansService.getArtisanByName(name));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  getStars(note:number): boolean[] {
    return Array(5).fill(false).map((_,i) => i < note);
  }
}
