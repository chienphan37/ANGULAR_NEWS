import {Routes} from '@angular/router';
import {V12Component} from "./v12/v12.component";
import {V14Component} from "./v14/v14.component";
import {inject} from "@angular/core";
import {LoginService} from "./service/login.service";
import {TestFormComponent} from "./test-form/test-form.component";


export const routes: Routes = [
  {
    title: 'Login',
    path: 'login',
    component: TestFormComponent
  }, {
    title: 'Version 12',
    path: '',
    component: V12Component
  },
  {
    title: 'Version 12',
    path: 'v12',
    component: V12Component,
    canActivate: [() => inject(LoginService).isLoggedIn()]
  },
  {
    title: 'Version 14',
    path: 'v14',
    component: V14Component,
    loadChildren: () => import('./v14/v14.routes').then(m => m.ROUTES), //lazy load module

  },
  {
    title: 'Version 15',
    path: 'v15',
    loadChildren: () => import('./v15/v15.routes').then(m => m.v15Routes),

  },
  {
    title: 'Version 16',
    path: 'v16',
    loadComponent: () => import('./v16/v16.component')  //lazy load component
  },
  {
    title: 'Version 17',
    path: 'v17',
    loadComponent: () => import('./v17/v17.component')  //lazy load component
  }
];
