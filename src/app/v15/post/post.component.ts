import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, takeUntil, tap} from "rxjs";
import {CommonModule} from "@angular/common";
import {DestroyDirective} from "../../directive/destroy.directive";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  hostDirectives: [DestroyDirective]
})
export class PostComponent implements OnInit {

  id$ = this.activatedRoute.paramMap.pipe(map(p => p.get('id')));
  destroy$ =inject(DestroyDirective).destroy$;
  //detect component reload khi when use  onSameUrlNavigation:"reload"
  navigated$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd),
    tap((e) => console.log("navigated", e)));

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.navigated$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => console.log('next'),
      complete: () => console.log('complete'),
    });
  }


}
