import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTodoDone]',
  standalone: true
})
export class TodoDoneDirective {

  @Input() set appTodoDone(todo: any) {
    this.textDecoration = todo.completed ? 'line-through' : 'none';
  }

  @HostBinding('style.text-decoration') textDecoration = 'none';

  constructor() { }

}
