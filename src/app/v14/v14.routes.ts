import {Route} from "@angular/router";
import {PostComponent} from "./post/post.component";
import {V15Component} from "./v15.component";
import {AdminComponent} from "../v14/admin/admin.component";

export const v15Routes: Route[] = [
  {
    path: '',
    // pathMatch: 'full',
    component: V15Component,
    children:[
      //router outlet
      {path: 'post/:id', component: AdminComponent},
    ]
  }
  //Redirect new page
  // , {
  //   path: 'post/:id',
  //   component: PostComponent,
  // },
];
