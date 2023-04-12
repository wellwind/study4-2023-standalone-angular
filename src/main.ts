import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './app/api.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter([
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full',
      },
      {
        path: 'todos',
        loadChildren: () => import('./app/todos/routes'),
      }
    ]),
    provideHttpClient(
      withInterceptors([apiInterceptor])
    )
  ],
}).catch((err) => console.error(err));
