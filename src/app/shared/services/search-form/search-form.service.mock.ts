import type { SearchFormService } from './search-form.service';
import { searchFormFixture } from './fixtures/search-form.fixture';
import { signal } from '@angular/core';

export const searchFormServiceMock = {
  searchForm: searchFormFixture,
  searchFieldValueChanges: signal(''),
} as const satisfies jest.Mocked<Partial<SearchFormService>>;
