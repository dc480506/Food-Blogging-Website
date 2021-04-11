import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createBlog(){
    this.router.navigate(['/myblogs/createBlog'])
  }
}
