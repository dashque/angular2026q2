import type { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { filmDetailsTitleResolver } from './shared/resolvers/film-details-title.resolver';
import { filmDetailsDataResolver } from './shared/resolvers/film-details-data.resolver';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Catalog',
        loadComponent: async () => {
          const m = await import('./features/catalog/ui/components/catalog/catalog.component');
          return m.CatalogComponent;
        },
      },
      {
        path: 'details/:id',
        title: filmDetailsTitleResolver,
        resolve: {
          film: filmDetailsDataResolver,
        },
        loadComponent: async () => {
          const m = await import('./features/film-details/ui/components/film-details/film-details.component');
          return m.FilmDetailsComponent;
        },
      },
      {
        path: '**',
        title: 'Page Not Found',
        loadComponent: async () => {
          const m = await import('./features/not-found/ui/components/not-found/not-found.component');
          return m.NotFoundComponent;
        },
      },
    ],
  },
];
