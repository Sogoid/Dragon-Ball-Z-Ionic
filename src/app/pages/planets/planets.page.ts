import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonCard,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
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
    IonGrid,
    IonCard,
    IonChip,
    IonCol,
    IonAvatar,
    IonRow,
    IonText,
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
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class PlanetsPage implements OnInit {
  titleHeader: string;
  paginationPlanets: PaginationPlanets | undefined;

  hasMoreItems: boolean = true;
  private page: number = 1;
  private limit: number = 20;

  constructor(
    private planetsService: PlanetsService,
    private menuTitleService: MenuTitleService
  ) {
    this.titleHeader = '';
  }

  ngOnInit() {
    this.loadPlanets();
    this.menuTitleService.changeTitle('Planets');
  }
  private loadPlanets() {
    this.planetsService.getPlanets(this.page, this.limit).subscribe((data) => {
      if (this.paginationPlanets) {
        this.paginationPlanets.items.push(...data.items);
      } else {
        this.paginationPlanets = data;
      }
      if (
        this.paginationPlanets.meta.currentPage >=
        this.paginationPlanets.meta.totalPages
      ) {
        this.hasMoreItems = false;
      }
      this.page++;
    });
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    if (
      this.paginationPlanets &&
      this.paginationPlanets.meta.currentPage <
        this.paginationPlanets.meta.totalPages
    ) {
      this.loadPlanets();
      setTimeout(() => {
        ev.target.complete();
      }, 500);
    } else {
      ev.target.disabled = true;
    }
  }
}
