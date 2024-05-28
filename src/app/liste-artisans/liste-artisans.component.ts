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
  filteredArtisans: Artisans[] = [];
  category: string | null = null;
  private routeSub: Subscription | null = null;

  constructor (private artisansService: ArtisansService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    // Abonnez-vous aux changements de paramètres de route
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      console.log('Category from route:', this.category);
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
    try {
      const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
      console.log('All Artisans:', allArtisans); // Log de tous les artisans
      if (this.category) {
        const normalizedCategory = this.category?.toLowerCase().trim();
        console.log(`Normalized Category: "${normalizedCategory}"`);
        console.log(this.category)
        this.filteredArtisans = allArtisans.filter(artisan => {
          const artisanCategory = artisan.category.toLowerCase().trim();
          const matches = artisanCategory === normalizedCategory;
          console.log(`Comparing artisan category "${artisanCategory}" with selected category "${normalizedCategory}": ${matches}`); // Log de la comparaison
          return matches;
        });
        console.log('Filtered Artisans:', this.filteredArtisans); // Log des artisans filtrés
      } else {
        this.filteredArtisans = allArtisans;
      }
    } catch (error) {
      console.error('Erreur', error);
    }
  }

  getStars(note:number): boolean[] {
    return Array(5).fill(false).map((_,i) => i < note);
  }

  // async loadArtisans(): Promise<void> {
  //   try {
  //     const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
  //     console.log('All Artisans:', allArtisans); // Log de tous les artisans
  //     if (this.category) {
  //       const normalizedCategory = this.category.toLowerCase().trim();
  //       console.log(`Normalized Category: "${normalizedCategory}"`);
        
  //       this.filteredArtisans = allArtisans.filter(artisan => {
  //         const artisanCategory = artisan.category?.toLowerCase().trim();
  //         const matches = artisanCategory === normalizedCategory;
  //         console.log(`Comparing artisan category "${artisanCategory}" with selected category "${normalizedCategory}": ${matches}`); // Log de la comparaison
  //         return matches;
  //       });
  //       console.log('Filtered Artisans:', this.filteredArtisans); // Log des artisans filtrés
  //     } else {
  //       this.filteredArtisans = allArtisans;
  //     }
  //   } catch (error) {
  //     console.error('Erreur', error);
  //   }
  // }

  // async loadArtisans(): Promise<void> {
  //   try {
  //     const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
  //     console.log('All Artisans:', allArtisans); // Log de tous les artisans
  //     if (this.category) {
  //       const normalizedCategory = this.category.toLowerCase().trim();
  //       this.filteredArtisans = allArtisans.filter(artisan => {
  //         const artisanCategory = artisan.category?.toLowerCase().trim();
  //         const matches = artisanCategory === normalizedCategory;
  //         console.log(`Comparing artisan category "${artisanCategory}" with selected category "${normalizedCategory}": ${matches}`); // Log de la comparaison
  //         return matches;
  //       });
  //       console.log('Filtered Artisans:', this.filteredArtisans); // Log des artisans filtrés
  //     } else {
  //       this.filteredArtisans = allArtisans;
  //     }
  //   } catch (error) {
  //     console.error('Erreur', error);
  //   }
  // }

  // async loadArtisans(): Promise<void> {
  //   try {
  //     const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
  //     console.log('All Artisans:', allArtisans); // Ajoutez ce log
  //     if (this.category) {
  //       this.filteredArtisans = allArtisans.filter(artisan => {
  //         const artisanCategory = artisan.category?.toLowerCase().trim();
  //         const selectedCategory = this.category?.toLowerCase().trim();
  //         const matches = artisanCategory === selectedCategory;
  //         console.log(`Comparing artisan category "${artisanCategory}" with selected category "${selectedCategory}": ${matches}`); // Ajoutez ce log
  //         return matches;
  //       });
  //       console.log('Filtered Artisans:', this.filteredArtisans); // Ajoutez ce log
  //     } else {
  //       this.filteredArtisans = allArtisans;
  //     }
  //   } catch (error) {
  //     console.error('Erreur', error);
  //   }
  // }

  // async loadArtisans(): Promise<void> {
  //   try {
  //     const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
  //     console.log('All Artisans:', allArtisans); // Ajoutez ce log
  //     if (this.category) {
  //       this.filteredArtisans = allArtisans.filter(artisan => {
  //         const artisanCategory = artisan.category?.toLowerCase().trim();
  //         const selectedCategory = this.category?.toLowerCase().trim();
  //         const matches = artisanCategory === selectedCategory;
  //         console.log(`Comparing "${artisanCategory}" with "${selectedCategory}": ${matches}`); // Ajoutez ce log
  //         return matches;
  //       });
  //       console.log('Filtered Artisans:', this.filteredArtisans); // Ajoutez ce log
  //     } else {
  //       this.filteredArtisans = allArtisans;
  //     }
  //   } catch (error) {
  //     console.error('Erreur', error);
  //   }
  // }

  // async loadArtisans(): Promise<void> {
  //   try {
  //     const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
  //     console.log('All Artisans:', allArtisans); // Ajoutez ce log
  //     if (this.category) {
  //       this.filteredArtisans = allArtisans.filter(artisan => {
  //         const matches = artisan.category === this.category;
  //         console.log(`Comparing ${artisan.category} with ${this.category}: ${matches}`); // Ajoutez ce log
  //         return matches;
  //       });
  //       console.log('Filtered Artisans:', this.filteredArtisans); // Ajoutez ce log
  //     } else {
  //       this.filteredArtisans = allArtisans;
  //     }
  //   } catch (error) {
  //     console.error('Erreur', error);
  //   }
  // }



  // async loadArtisans(): Promise<void> {
  //   if (this.category) {
  //     try {
  //       const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
  //       console.log('All Artisans:', allArtisans);
  //       this.filteredArtisans = allArtisans.filter(artisan => artisan.category === this.category);
  //       console.log('Filtered Artisans:', this.filteredArtisans);
  //     } catch (error) {
  //       console.error('Erreur', error);
  //     }
  //   }
  // }

  // async loadArtisans(): Promise<void> {
  //     if (this.category) {
  //       try {
  //                 this.artisans = await firstValueFrom(this.artisansService.getAllArtisans(this.category));
  //               } catch (error) {
  //                 console.error('Erreur', error);
  //             };
  //           }
  //   }

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
