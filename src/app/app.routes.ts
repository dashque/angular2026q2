import { type Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { filmDetailsDataResolver } from './shared/resolvers/film-details-data.resolver';
import { filmDetailsBreadcrumbResolver } from './shared/resolvers/film-details-breadcrumb.resolver';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Catalog',
        data: {
          breadcrumb: 'Catalog',
        },
        children: [
          {
            path: '',
            title: 'Catalog',
            loadComponent: async () =>
              await import('./features/catalog/ui/components/catalog/catalog.component').then(
                (m) => m.CatalogComponent
              ),
          },
          {
            path: 'details/:id',
            resolve: {
              film: filmDetailsDataResolver,
            },
            data: {
              breadcrumb: filmDetailsBreadcrumbResolver,
            },
            loadComponent: async () =>
              await import('./features/film-details/ui/components/film-details/film-details.component').then(
                (m) => m.FilmDetailsComponent
              ),
          },
          {
            path: 'about',
            title: 'About app',
            data: {
              breadcrumb: 'About app',
            },
            loadComponent: async () =>
              await import('./features/about/ui/components/about/about.component').then((m) => m.AboutComponent),
          },
        ],
      },
      {
        path: '**',
        title: 'Page Not Found',
        loadComponent: async () =>
          await import('./features/not-found/ui/components/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      },
    ],
  },
];
