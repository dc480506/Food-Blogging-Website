import { BlogsService } from './../../../services/blogs/blogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blog:any={}
  id:any;
  blogImageBaseURL="";
  constructor(private service:BlogsService,private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.blogImageBaseURL=this.service.baseImageURL;
   }

  ngOnInit(): void {
    this.service.get(undefined,undefined, this.id)
    .subscribe((response)=>{
      this.blog=response;
    })
  }

}
