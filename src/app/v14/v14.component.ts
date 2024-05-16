import {Component, inject, InjectionToken} from '@angular/core';
import {TestService} from "../test.service";
import {Route, RouterLink, RouterOutlet} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {CommonModule} from "@angular/common";
import {MyToken} from "./my-token";
import {CpDirective} from "./cp.directive";
export const ROUTES: Route[] = [{
  path: '',
  pathMatch: 'prefix',
  providers: [TestService], //sẽ tạo 1 instance khác cho service
  children: [
    {path: 'admin', component: AdminComponent},
    {path: 'user', component: UserComponent},
  ]}
];

@Component({
  selector: 'app-v14',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, CpDirective],
  templateUrl: './v14.component.html',
  styleUrl: './v14.component.scss',
  providers:[
    {
      provide: MyToken,
      useValue: 'My token'
    },
    {
      provide: 'my token 2',
      useFactory: () =>{
        const token = inject(MyToken);
        return token + 'value 2'
      }
    }

  ]
})

export class V14Component {
  token = inject(MyToken) // chỉ dùng được inject ở đây hoặc trong constructor
  constructor(public testService: TestService) {
    // console.log(this.token)
  }

  increase() {
    this.testService.length ++;
  }
}
