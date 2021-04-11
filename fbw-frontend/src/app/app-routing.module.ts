import { CreateBlogComponent } from './app-navigation/my-blogs/create-blog/create-blog.component';
import { RedirectHome } from './services/guard/redirect-home/redirect-home.service';
import { AuthGuard } from './services/guard/auth-guard/auth-guard.service';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './app-navigation/home/home.component';
import { MyBlogsComponent } from './app-navigation/my-blogs/my-blogs.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', 
    component: SignInComponent, 
    canActivate:[RedirectHome] }],
  },
  {
    path: 'register',
    component: UserComponent,
    children: [{ path: '', 
    component: SignUpComponent, 
    canActivate:[RedirectHome] }],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
  path: 'home', 
  component: AppNavigationComponent, 
  children: [{ path: '', 
    component: HomeComponent, 
    canActivate:[AuthGuard] }],
  },
  { 
    path: 'myblogs', 
    component: AppNavigationComponent, 
    children: [{ path: '', 
      component: MyBlogsComponent, 
      canActivate:[AuthGuard] },
      { path: 'createBlog', 
      component: CreateBlogComponent, 
      canActivate:[AuthGuard] }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
