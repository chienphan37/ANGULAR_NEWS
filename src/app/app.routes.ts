import {Routes} from '@angular/router';
import {V12Component} from "./v12/v12.component";
import {V14Component} from "./v14/v14.component";


export const routes: Routes = [
  {
    title: 'Version 12',
    path: 'v12',
    component: V12Component
  }, {
    title: 'Version 14',
    path: 'v14',
    component: V14Component,
    loadChildren: () => import('./v14/v14.component').then(m => m.ROUTES),

  },
  {
    title: 'Version 17',
    path: 'v17',
    loadComponent: () => import('./v17/v17.component').then(m => m.V17Component)
  }
];
