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
import { BlogComponent } from './app-navigation/my-blogs/blog/blog/blog.component';
import { UpdateBlogComponent } from './app-navigation/my-blogs/update-blog/update-blog/update-blog.component';

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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
  path: 'home', 
  component: AppNavigationComponent, 
  children: [{ path: '', 
    component: HomeComponent, 
    // canActivate:[AuthGuard]
   }],
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
  { 
    path: 'myblogs', 
    component: AppNavigationComponent, 
    children: [{ path: 'blog/:id', 
      component: BlogComponent, 
      canActivate:[AuthGuard] }
    ],
  },
  { 
    path: 'myblogs', 
    component: AppNavigationComponent, 
    children: [{ path: 'editBlog/:id', 
      component: UpdateBlogComponent, 
      canActivate:[AuthGuard] }
    ],
  },
  { 
    path: 'view-blogs', 
    component: AppNavigationComponent, 
    children: [{ path: 'blog/:id', 
      component: BlogComponent, 
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
