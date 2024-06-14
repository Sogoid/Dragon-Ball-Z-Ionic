import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonImg } from '@ionic/angular/standalone';
import { MenuTitleService } from '../../service/menu-title.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonTitle, IonHeader, IonContent, IonToolbar],
})
export class HomePage implements OnInit {
  titleHeader: string;
  constructor(private menuTitleService: MenuTitleService) {
    this.titleHeader = '';
  }

  ngOnInit() {
    this.menuTitleService.changeTitle('Home');
  }
}
