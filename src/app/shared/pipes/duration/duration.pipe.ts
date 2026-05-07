import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number) {
    if (!Number.isFinite(minutes) || minutes <= 0) {
      return '';
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return [hours > 0 ? `${hours}h` : '', remainingMinutes > 0 ? `${remainingMinutes}min` : '']
      .filter(Boolean)
      .join(' ');
  }
}
