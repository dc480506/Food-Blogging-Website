import { BlogsService } from './../../../services/blogs/blogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from 'src/app/services/follow/follow.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blog:any={}
  follow:any={}
  id:any;
  blogImageBaseURL="";
  private authorId="";
  constructor(private service:BlogsService,private followService:FollowService,private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.blogImageBaseURL=this.service.baseImageURL;
   }

  ngOnInit(): void {
    // this.service.get(undefined,undefined, this.id)
    // .subscribe((response)=>{
    //   this.blog=response;
    //   this.authorId=this.blog.author._id;
    // })

    this.service.get(undefined,undefined, this.id)
    .pipe(
      switchMap((response) => {
        this.blog=response;
        this.authorId=this.blog.author._id;
        return this.followService.get(undefined,undefined,this.authorId)
      })
    )
    .subscribe((response)=>{
      this.follow=response;
    })
    // this.followService.get(undefined,undefined,this.authorId)
  }
  onFollowClick(isFollowing:boolean){
    console.log("Follow: ",isFollowing)
    if(isFollowing){
      this.followService.create({id:this.authorId})
      .subscribe((res)=>{console.log(res)})
    }else{
      this.followService.delete(this.authorId)
      .subscribe((res)=>{console.log(res)})
    }
  }
}
