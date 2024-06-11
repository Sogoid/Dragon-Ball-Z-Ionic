import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuTitleService {
  private titleheader = new BehaviorSubject('Home');
  currentTitle = this.titleheader.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/home') {
            this.changeTitle('Home');
          } else if (event.url === '/characters') {
            this.changeTitle('Characters');
          } else if (event.url === '/planets') {
            this.changeTitle('Planets');
          }
        }
      });

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     if (event.url === '/characters') {
    //       this.changeTitle('characters');
    //     } else if (event.url === '/planets') {
    //       this.changeTitle('Planets');
    //     }
    //   });
  }

  changeTitle(titleheader: string) {
    this.titleheader.next(titleheader);
  }
}
