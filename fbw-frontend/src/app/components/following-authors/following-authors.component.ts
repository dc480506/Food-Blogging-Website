import { FollowService } from './../../services/follow/follow.service';
import { FollowingAuthorsService } from './../../services/following-authors/following-authors.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomScroll } from './../../common/scroll';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following-authors',
  templateUrl: './following-authors.component.html',
  styleUrls: ['./following-authors.component.css']
})
export class FollowingAuthorsComponent extends CustomScroll implements OnInit {

  constructor(service:FollowingAuthorsService,private followService:FollowService,spinner:NgxSpinnerService) { 
    super(service,spinner)
  }

  ngOnInit(): void {
    this.loadInitData();
  }
  
}
