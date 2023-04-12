import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoWithDone',
  standalone: true,
})
export class TodoWithDonePipe implements PipeTransform {
  transform(todoItem: any): unknown {
    return `${todoItem.title}${todoItem.completed ? '(done)' : ''}`;
  }
}
