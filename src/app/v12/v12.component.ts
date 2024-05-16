import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-v12',
  standalone: true,
  imports: [],
  templateUrl: './v12.component.html',
  styleUrl: './v12.component.scss'
})
export class V12Component implements  OnInit{
  user?: {name: string | null, age: number} ;

  ngOnInit(): void {
    this.user = {name: '12312312', age: 15};
  }



}
