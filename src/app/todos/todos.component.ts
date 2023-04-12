import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterLink],
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <a [routerLink]="['/todos', todo.id]">{{ todo.title }}</a>
      </li>
    </ul>
  `,
  styles: [],
})
export default class TodosComponent {
  todos$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');

  constructor(private http: HttpClient) {}
}
