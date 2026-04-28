import { TestBed } from '@angular/core/testing';

import { FilmRepositoryService } from './film-repository.service';

describe('FilmRepositoryService', () => {
  let service: FilmRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
