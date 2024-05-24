import {Route} from "@angular/router";
import {TestService} from "../service/test.service";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";

export const ROUTES: Route[] = [{
  path: '',
  pathMatch: 'prefix',
  providers: [TestService], //sẽ tạo 1 instance khác cho service
  children: [
    {path: 'admin', component: AdminComponent},
    {path: 'user', component: UserComponent},
  ]}
];
