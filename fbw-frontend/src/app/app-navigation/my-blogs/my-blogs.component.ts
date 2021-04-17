import { MyBlogService } from './../../services/my-blog/my-blog.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css'],
})
export class MyBlogsComponent implements OnInit {
  constructor(private router: Router, private service: MyBlogService) {
    this.blogImageBaseURL=this.service.baseImageURL;
  }
  blogs: any[] = [];
  blogImageBaseURL;
  notscrolly = true;
  notEmptyResult = true;
  page = 1;
  limit = 4;
  ngOnInit(): void {
    this.loadInitData();
  }
  loadInitData() {
    this.service.get(this.page, this.limit).subscribe((res) => {
      this.blogs = res;
      console.log(res);
    });
    this.page += 1;
  }
  onScroll() {
    if (this.notscrolly && this.notEmptyResult) {
      // this.spinner.show();
      this.notscrolly = false;
      this.loadNextData();
    }
  }
  loadNextData() {
    this.service.get(this.page, this.limit).subscribe((res) => {
      this.page+=1;
      if (res.length == 0) {
        this.notEmptyResult = false;
      }
      this.notscrolly=true;
      this.blogs = this.blogs.concat(res);
      console.log(res);
    });
  }
  createBlog() {
    this.router.navigate(['/myblogs/createBlog']);
  }
}
