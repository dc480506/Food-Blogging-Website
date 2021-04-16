import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyBlogService } from 'src/app/services/my-blog/my-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id:any;
  blog:any;
  blogImageBaseURL;

  constructor(private route:ActivatedRoute, private service: MyBlogService) { 
    this.blogImageBaseURL=this.service.baseImageURL;
  }


  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
      this.id=params.get('id');
      console.log(this.id);
    });

    console.log('id:'+this.id);
    this.service.get(undefined,undefined,this.id).subscribe((res) => {
      this.blog = res;
      console.log(res);
    });
  }

  

}
