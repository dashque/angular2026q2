import { TestBed } from '@angular/core/testing';

import { SearchFormService } from './search-form.service';

describe('SearchFormService', () => {
  let service: SearchFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFormService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Получение инстанса формы', () => {
    it('должен вернуть инстанс формы', () => {
      const form = service.searchForm;

      expect(form).toBe(service['_form']);
    });
  });
});
