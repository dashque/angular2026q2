import type { SearchFormService } from './search-form.service';

import { searchFormFixture } from './fixtures/search-form.fixture';

export const searchFormServiceMock = {
  searchForm: searchFormFixture,
  searchFieldValueChanges: jest.fn().mockReturnValue('') as any,
} as const satisfies jest.Mocked<Partial<SearchFormService>>;
