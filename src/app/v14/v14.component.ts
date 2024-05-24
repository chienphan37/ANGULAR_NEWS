import {Component, inject} from '@angular/core';
import {TestService} from "../service/test.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MyToken} from "./my-token";
import {CpDirective} from "./cp.directive";


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
