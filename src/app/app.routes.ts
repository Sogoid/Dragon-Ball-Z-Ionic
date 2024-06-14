import { Routes } from '@angular/router';
import { PlanetsPage } from './pages/planets/planets.page';
import { PlanetResolveDefaultList } from './service/planets.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () =>
      import('./pages/intro/intro.page').then((m) => m.IntroPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./pages/characters/characters.page').then(
        (m) => m.CharactersPage
      ),
  },
  {
    path: 'characters-detail',
    loadComponent: () =>
      import('./pages/characters-detail/characters-detail.page').then(
        (m) => m.CharactersDetailPage
      ),
  },

  // {
  //   path: 'planets',
  //   loadComponent: () =>
  //     import('./pages/planets/planets.page').then((m) => m.PlanetsPage),
  // },

  // Esse modelo abaixo e para usar o Resolve para fazer as rotas
  {
    path: 'planets',
    component: PlanetsPage,
    resolve: { data: PlanetResolveDefaultList },
  },

  {
    path: 'planets-detail',
    loadComponent: () =>
      import('./pages/planets-detail/planets-detail.page').then(
        (m) => m.PlanetsDetailPage
      ),
  },
];
