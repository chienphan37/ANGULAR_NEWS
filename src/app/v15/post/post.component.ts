import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  id$ = this.activatedRoute.paramMap.pipe(map(p => p.get('id')));

  constructor(private activatedRoute: ActivatedRoute) {
  }

}
