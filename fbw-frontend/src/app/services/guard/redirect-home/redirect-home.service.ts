import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectHome{

  constructor(private authService:AuthService,private router:Router) { }
  canActivate(){
    if(!this.authService.isLoggedin())
      return true;
    this.router.navigate(['/home']);
    return false;
  }
}
