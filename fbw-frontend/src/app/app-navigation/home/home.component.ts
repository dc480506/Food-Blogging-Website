import { NgxSpinnerService } from 'ngx-spinner';
import { MyBlogService } from './../../services/my-blog/my-blog.service';
import { CustomScroll } from 'src/app/common/scroll';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends CustomScroll implements OnInit {
  blogImageBaseURL;
  constructor(service:BlogsService,spinner:NgxSpinnerService) { 
    super(service,spinner);
    this.blogImageBaseURL=service.baseImageURL;
  }

  ngOnInit(): void {
    this.loadInitData();

  }

}
