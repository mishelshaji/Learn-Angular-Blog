import { PostService } from './../post.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent implements OnInit {

  posts:any

  constructor(private ps:PostService) { }

  ngOnInit(): void {
    this.ps.getPosts().subscribe((e)=>{
      this.posts = e
      console.log(e)
    });
  }
}
