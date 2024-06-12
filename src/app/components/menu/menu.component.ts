import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonButtons, IonBackButton, IonIcon, IonSearchbar, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { MenuTitleService } from 'src/app/service/menu-title.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonSearchbar, IonIcon, IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class MenuComponent implements OnInit {
  titleHeader: string;

  constructor(private menuTitleService: MenuTitleService) {
    this.titleHeader = '';
  }

  ngOnInit() {
    this.menuTitleService.currentTitle.subscribe(
      (titleHeader) => (this.titleHeader = titleHeader)
    );
  }
}
