import { InjectionToken } from '@angular/core';
import { FILMS_URL } from './films-url';

export const FILMS_URL_TOKEN = new InjectionToken('FILMS_URL', {
  factory: () => FILMS_URL,
});
