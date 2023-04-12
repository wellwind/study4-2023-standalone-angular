import { provideHttpClient } from '@angular/common/http';
import { Route } from '@angular/router';

export default [
  {
    path: ':id',
    loadComponent: () => import('./single-todo.component'),
    providers: [
      provideHttpClient()
    ]
  },
  {
    path: '',
    loadComponent: () => import('./todos.component'),
    providers: [
      provideHttpClient()
    ]
  }
] as Route[];
