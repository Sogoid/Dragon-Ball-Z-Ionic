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
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Characters, PaginationCharacter } from 'src/app/model/characters';
import { CharactersService } from 'src/app/service/characters.service';
import { MenuTitleService } from 'src/app/service/menu-title.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [
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
  // providers: [{ provide: CharactersService }],
})
export class CharactersPage implements OnInit {
  titleHeader: string;
  paginationCharacter: PaginationCharacter | undefined;

  constructor(
    private charactersService: CharactersService,
    private menuTitleService: MenuTitleService
  ) {
    this.titleHeader = '';
  }

  ngOnInit() {
    this.charactersService.getCharactersDefault().subscribe((data) => {
      this.paginationCharacter = data;
    });
    this.menuTitleService.changeTitle('Characters');
  }

  trackCharacterId(index: number, character: Characters) {
    return character.id;
  }
}

// constructor(
//   private menuTitleService: MenuTitleService,
//   private charactersService: CharactersService,
//   public modalController: ModalController
// ) {
//   this.titleHeader = '';
// }
// characters$ = new BehaviorSubject<Characters[]>([]);
// meta: {
//   totalItems: number;
//   itemCount: number;
//   itemsPerPage: number;
//   totalPages: number;
//   currentPage: number;
// } = {
//   totalItems: 0,
//   itemCount: 0,
//   itemsPerPage: 6,
//   totalPages: 0,
//   currentPage: 1,
// };

// ngOnInit() {
//   this.menuTitleService.changeTitle('Characters');
//   this.getRegisteredCharacters();
//   this.getData();
// }

// getRegisteredCharacters() {
//   this.charactersService.getCharacters().subscribe((characters) => {
//     this.characters$.next(characters);
//     console.log('Número de usuários:', characters.length);
//   });
// }

// async openDialogForDescription(character: Characters) {
//   const modal = await this.modalController.create({
//     component: DialogdescriptionComponent,
//     componentProps: { character },
//   });

//   await modal.present();

//   const { data } = await modal.onWillDismiss();
//   console.log(`Resultado do diálogo de descrição: ${data}`);
// }

// getData() {
//   const { currentPage, itemsPerPage } = this.meta;

//   this.charactersService.getData(currentPage, itemsPerPage).subscribe(
//     (response: {
//       items: Characters[];
//       meta: {
//         totalItems: number;
//         itemCount: number;
//         itemsPerPage: number;
//         totalPages: number;
//         currentPage: number;
//       };
//     }) => {
//       const currentItems = this.characters$.value;
//       this.characters$.next([...currentItems, ...response.items]);
//       this.meta = response.meta;
//     }
//   );
// }

// loadMoreData(event: any) {
//   this.meta.currentPage++;
//   this.charactersService
//     .getData(this.meta.currentPage, this.meta.itemsPerPage)
//     .subscribe(
//       (response: {
//         items: Characters[];
//         meta: {
//           totalItems: number;
//           itemCount: number;
//           itemsPerPage: number;
//           totalPages: number;
//           currentPage: number;
//         };
//       }) => {
//         const currentItems = this.characters$.value;
//         this.characters$.next([...currentItems, ...response.items]);
//         this.meta = response.meta;
//         event.target.complete();

//         if (currentItems.length >= this.meta.totalItems) {
//           event.target.disabled = true;
//         }
//       }
//     );
// }

// }
