import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
import { PaginationCharacter } from 'src/app/model/characters';
import { CharactersService } from 'src/app/service/characters.service';
import { MenuTitleService } from 'src/app/service/menu-title.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [
    IonChip,
    IonText,
    IonAvatar,
    IonCol,
    IonRow,
    IonGrid,
    IonLabel,
    IonItem,
    IonList,
    IonThumbnail,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class CharactersPage implements OnInit {
  titleHeader: string;
  paginationCharacter: PaginationCharacter | undefined;

  hasMoreItems: boolean = true;

  private page: number = 1;
  private limit: number = 58;

  constructor(
    private charactersService: CharactersService,
    private menuTitleService: MenuTitleService
  ) {
    this.titleHeader = '';
  }
  ngOnInit() {
    this.loadCharacters();
    this.menuTitleService.changeTitle('Characters');
  }

  private loadCharacters() {
    this.charactersService
      .getCharacters(this.page, this.limit)
      .subscribe((data) => {
        if (this.paginationCharacter) {
          this.paginationCharacter.items.push(...data.items);
        } else {
          this.paginationCharacter = data;
        }
        if (
          this.paginationCharacter.meta.currentPage >=
          this.paginationCharacter.meta.totalPages
        ) {
          this.hasMoreItems = false;
        }
        this.page++;
      });
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    if (
      this.paginationCharacter &&
      this.paginationCharacter.meta.currentPage <
        this.paginationCharacter.meta.totalPages
    ) {
      this.loadCharacters();
      setTimeout(() => {
        ev.target.complete();
      }, 500);
    } else {
      ev.target.disabled = true;
    }
  }
}
