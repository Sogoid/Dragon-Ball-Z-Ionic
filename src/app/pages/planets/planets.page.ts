import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PaginationPlanets } from 'src/app/model/planets';
import { PlanetsService } from 'src/app/service/planets.service';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';
import { MenuTitleService } from '../../service/menu-title.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonList,
    IonContent,
    IonItem,
    IonThumbnail,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    FooterTabsComponent,
  ],
})
export class PlanetsPage implements OnInit {
  titleHeader: string;
  paginationPlanets: PaginationPlanets | undefined;

  constructor(
    private planetsService: PlanetsService,
    private menuTitleService: MenuTitleService
  ) {
    this.titleHeader = '';
  }

  ngOnInit() {
    this.planetsService.getPlanetsDefault().subscribe((data) => {
      this.paginationPlanets = data;
    });
    this.menuTitleService.changeTitle('Planets');
  }
}
