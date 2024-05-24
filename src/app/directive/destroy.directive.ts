import { Directive, OnDestroy, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Directive({
  // selector: '[appDestroy]',
  standalone: true
})
export class DestroyDirective  implements OnDestroy, OnInit{
  destroy$: Subject<void> = new Subject<void>();
  constructor() {

    console.log(' DestroyDirective constructor')
  }

  ngOnInit(): void {
    console.log(' DestroyDirective on init')
  }



  ngOnDestroy(): void {
    console.log(' DestroyDirective on destroy')
    this.destroy$.next()
    this.destroy$.complete()
  }

}
