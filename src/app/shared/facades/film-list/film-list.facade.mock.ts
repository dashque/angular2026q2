import { filmListFixture } from '../../services/film-repository/fixtures/film-list.fixture';
import { searchFormFixture } from '../../services/search-form/fixtures/search-form.fixture';
import type { FilmListFacade } from './film-list.facade';

export const filmListFacadeMock = {
  searchForm: searchFormFixture.controls,
  isLoading: jest.fn().mockReturnValue(false) as any,
  filmList: jest.fn().mockReturnValue(filmListFixture) as any,
  toggleFavorite: jest.fn(),
} as const satisfies jest.Mocked<Partial<FilmListFacade>>;
