import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { EmailValidators } from './email.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router:Router,private service: AuthService) { }

  form = new FormGroup({
    name: new FormControl('',[
      Validators.required
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ],
    EmailValidators.shouldBeUnique),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(16)
    ])
  });

  get name(){
   return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
   }

   get password(){
    return this.form.get('password');
   }
  

}
