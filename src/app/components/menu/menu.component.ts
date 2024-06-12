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

  constructor(
    private menuTitleService: MenuTitleService,
    private router: Router
  ) {
    this.titleHeader = '';
    // Verificamos a rota atual sempre que há uma mudança.
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = event.urlAfterRedirects !== '/intro';
      }
    });
  }

  ngOnInit() {
    this.menuTitleService.currentTitle.subscribe(
      (titleHeader) => (this.titleHeader = titleHeader)
    );
  }
}
