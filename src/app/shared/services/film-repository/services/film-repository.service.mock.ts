import type { FilmRepositoryService } from './film-repository.service';

import { searchFormFixture } from '../../search-form/fixtures/search-form.fixture';
import { filmListFixture } from '../fixtures/film-list.fixture';
import { favoriteFilmFixture } from '../fixtures/favorite-film.fixture';
import { filmFixture } from '../fixtures/film.fixture';

export const filmRepositoryServiceMock = {
  toggleFavorite: jest.fn(),
  searchForm: searchFormFixture,
  isLoading: jest.fn().mockReturnValue(false) as any,
  filmList: jest.fn().mockReturnValue(filmListFixture) as any,
  favoriteFilmList: jest.fn().mockReturnValue([favoriteFilmFixture]) as any,
  getFilmDetails: jest.fn().mockReturnValue(filmFixture) as any,
} as const satisfies jest.Mocked<Partial<FilmRepositoryService>>;
