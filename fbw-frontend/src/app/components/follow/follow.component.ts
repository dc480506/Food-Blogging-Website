import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent{
  @Input('isFollowing') isFollowing:boolean=false;
  @Input('followersCount') followersCount:number=0;
  @Output('change') change= new EventEmitter();
  
  onClick(){
    this.followersCount+=(this.isFollowing)?-1:1;
    this.isFollowing=!this.isFollowing;
    this.change.emit(this.isFollowing);
  }
}
