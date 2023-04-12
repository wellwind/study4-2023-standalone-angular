import { Route } from '@angular/router';

export default [
  {
    path: ':id',
    loadComponent: () => import('./single-todo.component'),
  },
  {
    path: '',
    loadComponent: () => import('./todos.component'),
  }
] as Route[];
