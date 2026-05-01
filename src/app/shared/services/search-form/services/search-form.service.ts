import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SearchFormService {
  private readonly fb = inject(FormBuilder);
  private readonly _form = this.createFormInstance();
  public readonly searchFieldValueChanges = toSignal(this._form.controls.searchField.valueChanges, {
    initialValue: '',
  });

  public get searchForm() {
    return this._form;
  }

  private createFormInstance() {
    return this.fb.group({
      searchField: new FormControl('', { nonNullable: true }),
    });
  }
}
