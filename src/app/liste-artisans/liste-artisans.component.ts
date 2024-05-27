import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService, Artisans } from '../artisans.service';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-liste-artisans',
  templateUrl: './liste-artisans.component.html',
  styleUrl: './liste-artisans.component.scss'
})

export class ListeArtisansComponent implements OnInit, OnDestroy {
  artisans: Artisans[] = [];
  category: string | null = null;
  private routeSub: Subscription | null = null;;

  constructor (private artisansService: ArtisansService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    // Abonnez-vous aux changements de paramètres de route
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.loadArtisans();
    });
  }

  ngOnDestroy(): void {
    // Désabonnez-vous des changements de paramètres de route pour éviter les fuites de mémoire
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  async loadArtisans(): Promise<void> {
      if (this.category) {
        try {
                  this.artisans = await firstValueFrom(this.artisansService.getAllArtisans());
                } catch (error) {
                  console.error('Erreur', error);
              };
            }
    }

  // loadArtisans(): void {
  //   this.artisansService.getAllArtisans().subscribe(
  //     (data: Artisans[]) => this.artisans = data,
  //     (error: any) => console.error('Erreur', error)
  //   );
  // }

    // async ngOnInit(): Promise<void> {
    //   this.routeSub = this.route.paramMap.subscribe(async params => {
    //     this.category = params.get('category');
    //     if (this.category) {
    //       try {
    //         this.artisans = await firstValueFrom(this.artisansService.getArtisansParCategories(this.category));
    //       } catch (error) {
    //         console.error('Erreur', error);
    //     };
    //   }
    // });
    // }

    // ngOnDestroy(): void {
    //   // Désabonnez-vous des changements de paramètres de route pour éviter les fuites de mémoire
    //   if (this.routeSub) {
    //     this.routeSub.unsubscribe();
    //   }
    // }

    // ngOnInit(): void {
    //   // Abonnez-vous aux changements de paramètres de route
    //   this.routeSub = this.route.paramMap.subscribe(params => {
    //     this.category = params.get('category');
    //     this.loadArtisans();
    //   });
    // }
  
    // ngOnDestroy(): void {
    //   // Désabonnez-vous des changements de paramètres de route pour éviter les fuites de mémoire
    //   if (this.routeSub) {
    //     this.routeSub.unsubscribe();
    //   }
    // }
  
    // async loadArtisans(): Promise<void> {
    //   if (this.category) {
    //     try {
    //               this.artisans = await firstValueFrom(this.artisansService.getArtisansParCategories(this.category));
    //             } catch (error) {
    //               console.error('Erreur', error);
    //           };
    //         }
    // }
}
