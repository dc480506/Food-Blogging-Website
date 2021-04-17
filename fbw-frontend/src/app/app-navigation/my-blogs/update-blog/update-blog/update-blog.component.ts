import { FormControl, FormGroup } from '@angular/forms';
import { MyBlogService } from './../../../../services/my-blog/my-blog.service';
import { Component, OnInit } from '@angular/core';
import { CreateBlogComponent } from '../../create-blog/create-blog.component';
import { ActivatedRoute } from '@angular/router';
import { NotFoundError } from 'src/app/errors/not-found-error';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit{
  id:any;
  blog:any;
  form:FormGroup;
  blogImageBaseURL;
  fileChanged=false;
  imageData:string="";
  constructor(private service:MyBlogService, private route: ActivatedRoute) { 
    this.blogImageBaseURL = this.service.baseImageURL;
    this.form = new FormGroup({
      title: new FormControl(null),
      subtitle: new FormControl(null),
      description: new FormControl(null),
      summary: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.service.get(undefined, undefined, this.id).subscribe((res) => {
      this.blog = res;
      this.imageData=this.blogImageBaseURL+this.blog.image_url;
      this.form = new FormGroup({
        title: new FormControl(this.blog.title),
        subtitle: new FormControl(this.blog.subtitle),
        description: new FormControl(this.blog.description),
        summary: new FormControl(this.blog.summary),
        image: new FormControl(null),
      });
    },(err)=>{
      if(err instanceof NotFoundError){
        console.log("Not found")
      }
    }
    );  
  }
  onSubmit(){
    // this.form.disable();
    const formData = new FormData();
    // console.log("Type is: ",this.form.value)
    console.log(this.form.value);
    const keyValue = Object.entries(this.form.controls).filter(value => value[1].dirty);
    console.log(keyValue)
    keyValue.forEach(entry=>{
      formData.append(entry[0],entry[1].value);
    })
    if(this.fileChanged){
      formData.append("image",this.form.value.image)
    }
    formData.forEach((value,key) => {
      console.log(key+": "+value)
    });

    this.service.update(this.id,formData)
    .subscribe(res=>{
      console.log(res);
    })
  }

  onFileSelect(event: Event) {
    const htmlInputElem=event.target as HTMLInputElement;
    if(htmlInputElem.files!=null){
      const file = htmlInputElem.files[0];
      this.form.patchValue({ image: file });
      this.fileChanged=true;
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          console.log("Read file");
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
}

}
