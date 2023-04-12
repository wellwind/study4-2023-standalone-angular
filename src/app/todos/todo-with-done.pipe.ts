import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoWithDone',
  standalone: true
})
export class TodoWithDonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
