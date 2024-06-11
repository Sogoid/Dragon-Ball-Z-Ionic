import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Characters } from 'src/app/model/characters';

@Component({
  selector: 'app-dialogdescription',
  templateUrl: './dialogdescription.component.html',
  styleUrls: ['./dialogdescription.component.scss'],
  standalone: true,
})
export class DialogdescriptionComponent {
  character: Characters;

  constructor(navParams: NavParams) {
    this.character = navParams.get('character');
  }
}
