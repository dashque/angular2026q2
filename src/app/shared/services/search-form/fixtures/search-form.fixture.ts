import { FormControl, FormGroup } from '@angular/forms';

export const searchFormFixture = new FormGroup({
  searchField: new FormControl('', { nonNullable: true }),
});
