import { AppErrorHandler } from './errors/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { CustomInterceptor } from './custom-interceptor.module';
import { RedirectHome } from './services/guard/redirect-home/redirect-home.service';
import { AuthGuard } from './services/guard/auth-guard/auth-guard.service';
import { CommonService } from './services/common/common.service';
import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { HomeComponent } from './app-navigation/home/home.component';
import { MyBlogsComponent } from './app-navigation/my-blogs/my-blogs.component';
import { CreateBlogComponent } from './app-navigation/my-blogs/create-blog/create-blog.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent,
    AppNavigationComponent,
    HomeComponent,
    MyBlogsComponent,
    CreateBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ["http://localhost:3000/"],
    //     // disallowedRoutes: ["http://example.com/examplebadroute/"],
    //     headerName: "x-auth-token",
    //     authScheme: "",
    //     throwNoTokenError: true,
    //   },
    // }),
  ],
  providers: [
    AuthService,
    CommonService,
    AuthGuard,
    RedirectHome,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomInterceptor,
      multi:true
    },
    // {
    //   provide:ErrorHandler,
    //   useClass:AppErrorHandler
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
