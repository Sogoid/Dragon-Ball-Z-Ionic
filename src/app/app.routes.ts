import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./pages/characters/characters.page').then(
        (m) => m.CharactersPage
      ),
  },
  {
    path: 'planets',
    loadComponent: () =>
      import('./pages/planets/planets.page').then((m) => m.PlanetsPage),
  },
  {
    path: 'characters-detail',
    loadComponent: () =>
      import('./pages/characters-detail/characters-detail.page').then(
        (m) => m.CharactersDetailPage
      ),
  },
  {
    path: 'planets-detail',
    loadComponent: () =>
      import('./pages/planets-detail/planets-detail.page').then(
        (m) => m.PlanetsDetailPage
      ),
  },
];
