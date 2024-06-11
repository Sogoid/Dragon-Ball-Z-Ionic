import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.page.html',
  styleUrls: ['./planets-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlanetsDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
