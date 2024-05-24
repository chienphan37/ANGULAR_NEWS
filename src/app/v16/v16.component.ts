import {Component, computed, effect, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

interface Post {
  id: string,
  title: string,
  content: string
}

@Component({
  selector: 'app-v16',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './v16.component.html',
  styleUrl: './v16.component.scss'
})
export default class V16Component {
  title = signal('Hello World!');
  posts = signal<Post[]>([]);
  name = signal('asdasd');
  error = computed(() => {
    console.log('running....')
    return this.title() ? null : {required: true};
  })
  isShow = signal(false);

  constructor() {
    effect(() => {
      console.log(Date.now(), this.title(), this.isShow())
    })

  }


  onChange($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    this.title.set(value)
  }


  addPost() {
    this.posts.update((posts) => {
      posts.push({
        id: '1',
        title: this.title(),
        content: this.title()
      })
      return posts
    })
  }


  onToggle() {
    this.isShow.update(pre => !pre);
  }
}
