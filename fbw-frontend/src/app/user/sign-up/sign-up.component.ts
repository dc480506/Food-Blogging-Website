import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidators } from './email.validators';
import { ToastrService } from 'ngx-toastr';
import { Toastr } from 'src/app/common/toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent extends Toastr {
  constructor(
    private router: Router,
    private service: AuthService,
    toastr: ToastrService
  ) {
    super(toastr);
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      EmailValidators.shouldBeUnique
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(16),
    ]),
  });

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  signUp() {
    //  console.log('hi',this.form);
    //   this.service.login(this.form,'register')
    //   .subscribe(resp=>{
    //     if(resp){
    //       console.log("Yo");
    //       this.router.navigate(['/home']);
    //     }else{
    //       console.log('else');
    //     }
    //   }, error=>{
    //     console.log('error');
    //   });
    //   console.log(this.form);

    //   const formData = new FormData();
    //   // console.log("Type is: ",this.form.value)
    //   var obj=this.form.value
    //   for ( var key in this.form.value ) {
    //     formData.append(key, obj[key]);
    // }
    // console.log("Form data is: ",formData,typeof(formData))

    this.service.login(this.form.value, 'register').subscribe((response) => {
      console.log(response);
      this.showSuccess(
        'Your account has been created successfully',
        'Account Created'
      );
    });
  }
}
