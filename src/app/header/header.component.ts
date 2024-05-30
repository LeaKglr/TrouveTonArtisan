import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  onSearchChange(): void {
    this.searchService.setSearchTerm(this.searchTerm);
}
}