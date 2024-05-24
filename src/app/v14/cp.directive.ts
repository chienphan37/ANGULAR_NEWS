import {Directive, inject} from '@angular/core';
import {MyToken} from "./my-token";

@Directive({
  selector: '[CP]',
  standalone: true
})
export class CpDirective {
  token = inject(MyToken)
  constructor() {
    console.log(this.token)
  }

}
