import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css']
})
export class AppNavigationComponent implements OnInit {
  constructor(private authService:AuthService, private router:Router) { }
  ngOnInit(): void {

  }
  get currentUser(){
    return this.authService.currentUser;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
