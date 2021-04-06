import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  constructor(private router:Router,private service: AuthService){

  }
  invalidLogin=false;
  log(x:any){ console.log(x);}

  submit(credentials:Object){ 
    this.service.login(credentials)
    .subscribe(resp=>{
      if(resp){
        console.log("Yo");
        this.router.navigate(['/home']);
      }else{
        this.invalidLogin=true;
      }
    }, error=>{
      this.invalidLogin=true;
    });
    console.log(credentials);
  }
}
