import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PaginationCharacter } from 'src/app/model/characters';
import { CharactersService } from 'src/app/service/characters.service';
import { MenuTitleService } from 'src/app/service/menu-title.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class MenuComponent implements OnInit {
  titleHeader: string;
  // Inicialmente, definimos como false.
  showSearchBar = false;
  items: any[] = [];
  paginationCharacter!: PaginationCharacter;

  constructor(
    private menuTitleService: MenuTitleService,
    private router: Router,
    private charactersService: CharactersService
  ) {
    this.titleHeader = '';
    // Verificamos a rota atual sempre que há uma mudança.
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar =
          event.urlAfterRedirects !== '/intro' &&
          event.urlAfterRedirects !== '/home';
      }
    });
  }

  ngOnInit() {
    this.menuTitleService.currentTitle.subscribe(
      (titleHeader) => (this.titleHeader = titleHeader)
    );
  }

  onSearch(event: CustomEvent) {
    const query = event.detail.value;
    if (query && query.length > 0) {
      this.charactersService.getCharactersName(query).subscribe((data) => {
        this.items = data.items; // Atualize a nova propriedade com os itens
      });
    } else {
      this.charactersService.getCharactersDefault().subscribe((data) => {
        this.items = data.items; // Atualize a nova propriedade com os itens
      });
    }
  }
}
