import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {VideoComponent} from "./video/video.component";
function delay(ms =1000){
  return new Promise(res => setTimeout(res, ms));
}
@Component({
  selector: 'app-v17',
  standalone: true,
   imports: [
      AsyncPipe,
      VideoComponent
   ],
  templateUrl: './v17.component.html',
  styleUrl: './v17.component.scss',
})

export class V17Component {
  show = false;
  isShowVideo = false;
  user?:  {name: string, age: number};
  post = delay().then(() =>( {id: 5, title: 'demo id async'}))
  postIds: Array<{id: number}> = [
    {id: 123},
    {id: 546},
    {id: 1234},
    {id: 123234}
  ]
  toggle() {
    this.show = !this.show;
    this.isShowVideo = !this.isShowVideo;
    if(this.show){
      this.user  = {name: 'content', age: 19}
    }else {
      this.user = undefined;
    }

  }
}
