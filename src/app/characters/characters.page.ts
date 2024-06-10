import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MenuTitleService } from '../service/menu-title.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class CharactersPage implements OnInit {
  titleheader: string;

  constructor(private menuTitleService: MenuTitleService) {
    this.titleheader = '';
  }

  ngOnInit() {
    this.menuTitleService.changeTitle('Characters');
  }
}
