import { NgxSpinnerService } from 'ngx-spinner';
import { NotFollowingAuthorsService } from './../../services/not-following-authors/not-following-authors.service';
import { Component, OnInit } from '@angular/core';
import { CustomScroll } from 'src/app/common/scroll';

@Component({
  selector: 'app-not-following-authors',
  templateUrl: './not-following-authors.component.html',
  styleUrls: ['./not-following-authors.component.css']
})
export class NotFollowingAuthorsComponent extends CustomScroll implements OnInit {

  constructor(service:NotFollowingAuthorsService,spinner:NgxSpinnerService) {
    super(service,spinner);
   }

  ngOnInit(): void {
    this.loadInitData();
  }

}
