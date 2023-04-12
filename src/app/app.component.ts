import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
      <h1>{{ title }}</h1>
      <div><a routerLink="/">Todos</a></div>
      <router-outlet></router-outlet>
    `,
    imports: [RouterOutlet, RouterLink, RouterOutlet],
    styles: [],
    standalone: true
})
export class AppComponent {
  title = 'study4-2023-standalone-angular';
}
