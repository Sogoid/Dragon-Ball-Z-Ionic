import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MenuTitleService } from '../../service/menu-title.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTitle, IonHeader, IonContent, IonToolbar],
})
export class HomePage implements OnInit {
  titleheader: string;
  constructor(private menuTitleService: MenuTitleService) {
    this.titleheader = '';
  }

  ngOnInit() {
    this.menuTitleService.changeTitle('Home');
  }
}
