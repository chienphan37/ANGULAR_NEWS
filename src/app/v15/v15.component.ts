import { Component } from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {TestService} from "../test.service";
import {HttpClient} from "@angular/common/http";
import {Route, RouterLink, RouterOutlet} from "@angular/router";
import {AdminComponent} from "../v14/admin/admin.component";
import {UserComponent} from "../v14/user/user.component";
import {PostComponent} from "./post/post.component";
interface Post{
  id: number,
  title: string,
  body: string,
}

@Component({
  selector: 'app-v15',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './v15.component.html',
  styleUrl: './v15.component.scss'
})
export class V15Component {
  list: number[] = [1,2,3];
  post$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')

  constructor(public testService: TestService,
              private http: HttpClient) {
  }

}
