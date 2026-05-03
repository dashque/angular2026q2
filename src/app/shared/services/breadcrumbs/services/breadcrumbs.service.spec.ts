import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { BreadcrumbsService } from './breadcrumbs.service';
import { routesFixture } from '../fixtures/routes.fixture';
import type { Breadcrumb } from '../models/breadcrumb.model';

describe('BreadcrumbsService', () => {
  let router: Router;
  let service: BreadcrumbsService;
  const breadcrumbFixture = { label: 'Catalog', url: '/' } as const satisfies Breadcrumb;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routesFixture)],
    });

    router = TestBed.inject(Router);
    service = TestBed.inject(BreadcrumbsService);
    await router.navigateByUrl('/about');
    TestBed.inject(ApplicationRef).tick();
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Навигация закончена', () => {
    it('должен собрать хлебные крошки из вложенных маршрутов', () => {
      expect(service.breadcrumbs()).toEqual([breadcrumbFixture, { label: 'About app', url: '/about' }]);
    });
  });

  describe('При последующей навигации', () => {
    it('список крошек должен соответствовать новому Url', async () => {
      await router.navigateByUrl('/');
      TestBed.inject(ApplicationRef).tick();

      expect(service.breadcrumbs()).toEqual([breadcrumbFixture]);
    });

    it('должен применять фабрику из данных маршрута', async () => {
      await router.navigateByUrl('/dynamic');
      TestBed.inject(ApplicationRef).tick();

      expect(service.breadcrumbs()).toEqual([breadcrumbFixture, { label: 'Dynamic', url: '/dynamic' }]);
    });

    describe('Передана пустая строка', () => {
      it('должен пропускать подпись', async () => {
        await router.navigateByUrl('/empty-label');
        TestBed.inject(ApplicationRef).tick();

        expect(service.breadcrumbs()).toEqual([breadcrumbFixture]);
      });
    });
  });
});
