import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterTabsComponent } from './components/footer-tabs/footer-tabs.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenuComponent, FooterTabsComponent],
})
export class AppComponent {
  title = 'Dragon-Ball-Z-Ionic';

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
