import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  // Injeção de dependências no construtor
  constructor(
    private planetsService: PlanetsService,
    private menuTitleService: MenuTitleService,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleHeader = '';
  }

  // Método chamado quando o componente é inicializado
  ngOnInit() {
    this.loadPlanets();

    // Altera o título do menu
    this.menuTitleService.changeTitle('Lista dos Planetas');

    // Subscreve aos dados resolvidos da rota
    this.activatedRoute.data.subscribe(({ data }) => {
      this.paginationPlanets = data;
    });
  }

  // Carrega os planetas
  private loadPlanets() {
    this.planetsService.getPlanets(this.page, this.limit).subscribe((data) => {
      if (this.paginationPlanets) {
        // Se já existem planetas carregados, adiciona os novos ao final
        this.paginationPlanets.items.push(...data.items);
      } else {
        // Se não existem planetas carregados, inicia a lista de planetas
        this.paginationPlanets = data;
      }
      // Verifica se existem mais planetas para carregar
      if (
        this.paginationPlanets.meta.currentPage >=
        this.paginationPlanets.meta.totalPages
      ) {
        this.hasMoreItems = false;
      }
      // Incrementa o número da página para a próxima carga
      this.page++;
    });
  }

  // Método chamado quando o usuário atinge o final da página
  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    if (
      this.paginationPlanets &&
      this.paginationPlanets.meta.currentPage <
        this.paginationPlanets.meta.totalPages
    ) {
      // Se ainda existem planetas para carregar, carrega mais planetas
      this.loadPlanets();
      setTimeout(() => {
        // Completa o evento de rolagem infinita
        ev.target.complete();
      }, 500);
    } else {
      // Se não existem mais planetas para carregar, desabilita a rolagem infinita
      ev.target.disabled = true;
    }
  }
}
