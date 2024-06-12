import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuTitleService {
  private titleHeader = new BehaviorSubject('Home');
  currentTitle = this.titleHeader.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '') {
            this.changeTitle('Home');
          } else if (event.url === '/home') {
            this.changeTitle('Home');
          } else if (event.url === '/characters') {
            this.changeTitle('Lista de Personagem');
          } else if (event.url === '/planets') {
            this.changeTitle('Lista dos Planetas');
          }
        }
      });
  }

  changeTitle(titleHeader: string) {
    this.titleHeader.next(titleHeader);
  }
}
