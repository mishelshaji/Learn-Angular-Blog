import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  postCount:number;
  constructor(private ps:PostService) { }

  ngOnInit(): void {
    this.ps.getPosts().subscribe((e:any)=>{
      this.postCount = e.length;
    })
  }

}
