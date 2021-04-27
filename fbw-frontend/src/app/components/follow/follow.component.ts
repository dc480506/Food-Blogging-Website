import { FollowService } from './../../services/follow/follow.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent{
  @Input('isFollowing') isFollowing:boolean=false;
  @Input('followersCount') followersCount:number=0;
  @Input('authorId') authorId:string="";

  // @Output('change') change= new EventEmitter();
  
  constructor(private followService:FollowService){

  }

  onClick(){
    this.followersCount+=(this.isFollowing)?-1:1;
    this.isFollowing=!this.isFollowing;
    // this.change.emit(this.isFollowing);
    if (this.isFollowing) {
      this.followService.create({ id: this.authorId })
        .subscribe((res) => { console.log(res) })
    } else {
      this.followService.delete(this.authorId)
        .subscribe((res) => { console.log(res) })
    }
  }
}
