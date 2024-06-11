import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MenuTitleService } from 'src/app/service/menu-title.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
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
