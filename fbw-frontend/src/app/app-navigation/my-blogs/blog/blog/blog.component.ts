import { NotFoundError } from './../../../../errors/not-found-error';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { MyBlogService } from 'src/app/services/my-blog/my-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  id: any;
  blog: any;
  blogImageBaseURL;
  blogDeleted=false;
  blogFound=false;
  constructor(
    private route: ActivatedRoute,
    private service: MyBlogService,
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService
  ) {
    this.blogImageBaseURL = this.service.baseImageURL;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    console.log('id:' + this.id);
    this.service.get(undefined, undefined, this.id).subscribe((res) => {
      this.blog = res;
      console.log(res);
      this.blogFound=true;
    },(err)=>{
      if(err instanceof NotFoundError){
        console.log("Kch nhi mila vro!")
      }
    }
    );
  }
  delete() {
    let options = {
      title: 'Are you sure you want to delete this blog?',
      confirmLabel: 'Yes, delete',
      declineLabel: 'No, exit',
    };
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        console.log("Yo");
        this.service.delete(this.id)
        .subscribe(response=>{
          console.log(response);
          this.blogDeleted=!this.blogDeleted;
        });
      }
    });
  }

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

}
