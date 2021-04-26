import { Toastr } from './../../../../common/toastr';
import { PublishBlogsService } from './../../../../services/publish-blogs/publish-blogs.service';
import { NotFoundError } from './../../../../errors/not-found-error';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { MyBlogService } from 'src/app/services/my-blog/my-blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent extends Toastr implements OnInit {
  id: any;
  blog: any;
  blogImageBaseURL;
  blogDeleted=false;
  blogFound=false;
  constructor(
    private route: ActivatedRoute,
    private service: MyBlogService,
    private publishService: PublishBlogsService,
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService,
    toastr: ToastrService
  ) {
    super(toastr);
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
        // console.log("Kch nhi mila vro!")
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

  onPublishToggle(isPublish:boolean){
    if(isPublish==true){
      this.publishService.create({id:this.id})
      .subscribe((res)=>{
        this.showSuccess("Your blog has been published successfully","Published Successfully");
      })
    }else if(isPublish==false){
      console.log("Inside unpublish");
      this.publishService.delete(this.id)
      .subscribe((res)=>{
        this.showSuccess("Your blog has been unpublished successfully","Unpublished Successfully");
      })
    }
  }
}
