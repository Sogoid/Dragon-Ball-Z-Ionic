import { Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, planet, search } from 'ionicons/icons';

@Component({
  selector: 'app-footer-tabs',
  templateUrl: './footer-tabs.component.html',
  styleUrls: ['./footer-tabs.component.scss'],
  standalone: true,
  imports: [IonTabButton, IonIcon, IonTabBar, IonTabs, RouterModule],
})
export class FooterTabsComponent {
  // Inicialmente, definimos como false.
  showSearchBar = false;

  constructor(private router: Router) {
    addIcons({ search, planet, person, home });
    // Verificamos a rota atual sempre que há uma mudança.
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = event.urlAfterRedirects !== '/intro';
      }
    });
  }
}
