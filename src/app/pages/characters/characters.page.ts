import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { DialogdescriptionComponent } from 'src/app/components/dialogdescription/dialogdescription.component';
import { Characters } from 'src/app/model/characters';
import { CharactersService } from 'src/app/service/characters.service';
import { MenuTitleService } from '../../service/menu-title.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [
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
  characters$ = new BehaviorSubject<Characters[]>([]);
  titleheader: string;
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  } = {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: 6,
    totalPages: 0,
    currentPage: 1,
  };

  constructor(
    private menuTitleService: MenuTitleService,
    private charactersService: CharactersService,
    public modalController: ModalController
  ) {
    this.titleheader = '';
  }

  ngOnInit() {
    this.menuTitleService.changeTitle('Characters');
    this.getRegisteredCharacters();
    this.getData();
  }

  getRegisteredCharacters() {
    this.charactersService.getCharacters().subscribe((characters) => {
      this.characters$.next(characters);
      console.log('Número de usuários:', characters.length);
    });
  }

  async openDialogForDescription(character: Characters) {
    const modal = await this.modalController.create({
      component: DialogdescriptionComponent,
      componentProps: { character },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(`Resultado do diálogo de descrição: ${data}`);
  }

  getData() {
    const { currentPage, itemsPerPage } = this.meta;

    this.charactersService.getData(currentPage, itemsPerPage).subscribe(
      (response: {
        items: Characters[];
        meta: {
          totalItems: number;
          itemCount: number;
          itemsPerPage: number;
          totalPages: number;
          currentPage: number;
        };
      }) => {
        const currentItems = this.characters$.value;
        this.characters$.next([...currentItems, ...response.items]);
        this.meta = response.meta;
      }
    );
  }

  loadMoreData(event: any) {
    this.meta.currentPage++;
    this.charactersService
      .getData(this.meta.currentPage, this.meta.itemsPerPage)
      .subscribe(
        (response: {
          items: Characters[];
          meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
          };
        }) => {
          const currentItems = this.characters$.value;
          this.characters$.next([...currentItems, ...response.items]);
          this.meta = response.meta;
          event.target.complete();

          if (currentItems.length >= this.meta.totalItems) {
            event.target.disabled = true;
          }
        }
      );
  }

  trackCharacterId(index: number, character: Characters) {
    return character.id;
  }
}
