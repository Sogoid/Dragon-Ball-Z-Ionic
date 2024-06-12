import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MenuTitleService } from 'src/app/service/menu-title.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonGrid,
    IonCol,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class IntroPage implements OnInit {
  titleHeader: string;

  constructor(
    private menuTitleService: MenuTitleService,
    private router: Router
  ) {
    this.titleHeader = '';
  }

  ngOnInit() {
    this.menuTitleService.changeTitle('Intro');

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }
}
