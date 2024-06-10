import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FooterTabsComponent } from '../components/footer-tabs/footer-tabs.component';
import { MenuTitleService } from '../service/menu-title.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    FooterTabsComponent,
  ],
})
export class PlanetsPage implements OnInit {
  titleheader: string;

  constructor(private menuTitleService: MenuTitleService) {
    this.titleheader = '';
  }

  ngOnInit() {
    this.menuTitleService.changeTitle('Planets');
  }
}
