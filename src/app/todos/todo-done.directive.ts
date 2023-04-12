import { Directive } from '@angular/core';

@Directive({
  selector: '[appTodoDone]',
  standalone: true
})
export class TodoDoneDirective {

  constructor() { }

}
