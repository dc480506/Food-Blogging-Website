import { NgxSpinnerService } from 'ngx-spinner';
import { MyBlogService } from './../../services/my-blog/my-blog.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomScroll } from 'src/app/common/scroll';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css'],
})
export class MyBlogsComponent extends CustomScroll implements OnInit {
  constructor(private router: Router, service: MyBlogService,spinner:NgxSpinnerService) {
    super(service,spinner);
    this.blogImageBaseURL=service.baseImageURL;
  }
  blogImageBaseURL;
  ngOnInit(): void {
    this.loadInitData();
  }
  
  createBlog() {
    this.router.navigate(['/myblogs/createBlog']);
  }
}
