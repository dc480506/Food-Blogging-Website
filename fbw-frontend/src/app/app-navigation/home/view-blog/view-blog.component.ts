import { BlogsService } from './../../../services/blogs/blogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from 'src/app/services/follow/follow.service';
import { mergeMap, switchMap } from 'rxjs/operators';
import { LikeDislikeComponent } from 'src/app/components/like-dislike/like-dislike.component';
import { LikeDislikeService } from 'src/app/services/like-dislike/like-dislike.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blog: any = {}
  follow: any = {}
  id: any;
  blogImageBaseURL = "";
  private authorId = "";
  likeDislike: any;
  constructor(
    private likeDislikeService: LikeDislikeService,
    private service: BlogsService,
    private followService: FollowService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.blogImageBaseURL = this.service.baseImageURL;
  }

  ngOnInit(): void {
    // this.service.get(undefined,undefined, this.id)
    // .subscribe((response)=>{
    //   this.blog=response;
    //   this.authorId=this.blog.author._id;
    // })

    this.service.get(undefined, undefined, this.id)
      .pipe(
        mergeMap((response) => {
          this.blog = response;
          this.authorId = this.blog.author._id;
          const getFollow=this.followService.get(undefined, undefined, this.authorId)
          const getLikeDislike=this.likeDislikeService.get(undefined, undefined, this.blog._id)
          return forkJoin(getFollow,getLikeDislike);
        })
      )
      .subscribe((response) => {
        this.follow = response[0];
        this.likeDislike = response[1];
      })
    // this.followService.get(undefined,undefined,this.authorId)
  }


  onFollowClick(isFollowing: boolean) {
    console.log("Follow: ", isFollowing)
    if (isFollowing) {
      this.followService.create({ id: this.authorId })
        .subscribe((res) => { console.log(res) })
    } else {
      this.followService.delete(this.authorId)
        .subscribe((res) => { console.log(res) })
    }
  }

  onLikeDislikeClick(status:any){
    console.log(status);
    if(status.like!=null){
      if(status.like==true){
        this.likeDislikeService.create({
          id:this.blog._id,
          like:true
        }).subscribe((res) => { console.log(res) })
      }
      else{
        this.likeDislikeService.update(this.blog._id,{
          removeLike:true
        }).subscribe((res) => { console.log(res) })
      }
    }
    else if(status.disLike!=null){
      console.log('else if');
      if(status.disLike==true){
        this.likeDislikeService.create({
          id:this.blog._id,
          like:false
        }).subscribe((res) => { console.log(res) })
      }
      else{
        this.likeDislikeService.update(this.blog._id,{
          removeLike:false
        }).subscribe((res) => { console.log(res) })
      }
    }
  }

}
