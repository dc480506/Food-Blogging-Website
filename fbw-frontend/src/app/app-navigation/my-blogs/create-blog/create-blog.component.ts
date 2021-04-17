import { MyBlogService } from './../../../services/my-blog/my-blog.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
export class CreateBlogComponent{
  form: FormGroup;
  imageData: string;

  constructor(private service:MyBlogService){
    this.form = new FormGroup({
      title: new FormControl(null),
      subtitle: new FormControl(null),
      description: new FormControl(null),
      summary: new FormControl(null),
      publishNow: new FormControl(false),
      image: new FormControl(null)
    });
    this.imageData="";
  }
  
  onFileSelect(event: Event) {
      const htmlInputElem=event.target as HTMLInputElement;
      if(htmlInputElem.files!=null){
        const file = htmlInputElem.files[0];
        this.form.patchValue({ image: file });
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
  
  onSubmit(){
    this.form.disable();
    const formData = new FormData();
    // console.log("Type is: ",this.form.value)
    var obj=this.form.value
    for ( var key in this.form.value ) {
      formData.append(key, obj[key]);
  }
  // console.log("Form data is: ",formData,typeof(formData))

    this.service.create(formData)
    .subscribe(
      (response)=>{console.log(response)}
    )
  }

  clear(){
    this.form.reset();
    this.form.enable();
  }
}