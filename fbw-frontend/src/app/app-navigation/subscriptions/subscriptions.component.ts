import { NgxSpinnerService } from 'ngx-spinner';
import { SubscribedAuthorBlogsService } from './../../services/subscribed-author-blogs/subscribed-author-blogs.service';
import { CustomScroll } from './../../common/scroll';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent extends CustomScroll implements OnInit {
  blogImageBaseURL=""
  constructor(service: SubscribedAuthorBlogsService,spinner:NgxSpinnerService) {
    super(service,spinner);
    this.blogImageBaseURL=service.baseImageURL;
   }

  ngOnInit(): void {
    this.loadInitData()
  }

}
