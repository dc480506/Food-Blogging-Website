import { MyBlogService } from './../../../services/my-blog/my-blog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
// export class CreateBlogComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class CreateBlogComponent {

  userDetails:any;
  // uploadForm: FormGroup;
  blogCreated=false;
  title: string = "";
  subtitle: string = "";
  imageUrl: string = "";
  summary: string = "";
  description: string = "";
  constructor(private service:MyBlogService){}
  

  onFileSelect(event:any) {

  }
  submitBlogData(blog:Object){
    this.service.create(blog)
    .subscribe(
      response=> {console.log(response)}
    )
  }
}