import { filmListFixture } from '../../services/film-repository/fixtures/film-list.fixture';
import { searchFormFixture } from '../../services/search-form/fixtures/search-form.fixture';

export const filmListServiceMock = {
  searchForm: searchFormFixture,
  isLoading: jest.fn().mockReturnValue(false) as any,
  filmList: jest.fn().mockReturnValue(filmListFixture) as any,
  toggleFavorite: jest.fn(),
};
