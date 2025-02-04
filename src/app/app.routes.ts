import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  //default route
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },

  //lazy loading
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:id',
    component: AboutComponent,
  },
];
