import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent{
  @Input('isLikeActive') isLikeActive: boolean=false;
  @Input('likesCount') likesCount: number=0;
  @Input('isDisLikeActive') isDisLikeActive: boolean=false;
  @Input('disLikesCount') disLikesCount: number=0;
  @Output('change') change= new EventEmitter();
  
  isLoggedin=false;
  constructor(private authService:AuthService){
    this.isLoggedin=this.authService.isLoggedin();
  }

  onLikeClick(){
    this.isLikeActive=!this.isLikeActive;
    this.likesCount+=(this.isLikeActive)?1:-1;
    if(this.isDisLikeActive){
      this.isDisLikeActive=false;
      this.disLikesCount-=1;
    }
    this.change.emit({like:this.isLikeActive});
  }

  onDisLikeClick(){
    this.isDisLikeActive=!this.isDisLikeActive;
    this.disLikesCount+=(this.isDisLikeActive)?1:-1;
    if(this.isLikeActive){
      this.isLikeActive=false;
      this.likesCount-=1;
    }
    this.change.emit({disLike:this.isDisLikeActive});
  }
}
