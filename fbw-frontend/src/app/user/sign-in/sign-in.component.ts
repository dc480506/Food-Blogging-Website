import { Component } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  log(x:any){ console.log(x);}

  submit(f:any){  console.log(f.value);}
}
