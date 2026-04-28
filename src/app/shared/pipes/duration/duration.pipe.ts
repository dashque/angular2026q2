import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  //Custom Pipe
  // Create a pipe that converts a number of minutes into a human-readable duration format:
  //
  // Hours only: 60 → "1h"
  // Minutes only: 45 → "45min"
  // Hours and minutes: 90 → "1h 30min"
  // The pipe must be standalone and used in the template of at least one component.
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
