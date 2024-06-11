import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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
export class FooterTabsComponent implements OnInit {
  constructor() {
    addIcons({ search, planet, person, home });
  }

  ngOnInit() {
    return this;
  }
}
