import {Route} from "@angular/router";
import {PostComponent} from "./post/post.component";
import {V15Component} from "./v15.component";

export const v15Routes: Route[] = [
  {
    path: '',
    // pathMatch: 'full',
    component: V15Component,
    children:[
      //router outlet
      {path: 'post/:id', component: PostComponent},
    ]
  }
  //Redirect new page
  // , {
  //   path: 'post/:id',
  //   component: PostComponent,
  // },
];
