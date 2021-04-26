import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
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
import { TitleCasePipe } from './custom-pipe/title-case.pipe';
import { TitleCaseDirective } from './custom-directives/title-case.directive';
import { BlogComponent } from './app-navigation/my-blogs/blog/blog/blog.component';
// import { ConfirmBoxComponent } from './components/confirm-box/confirm-box/confirm-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateBlogComponent } from './app-navigation/my-blogs/update-blog/update-blog/update-blog.component';
import { ToastrModule } from 'ngx-toastr';
import { IsAuthorizedDirective } from './custom-directives/is-authorized.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReadLessMorePipe } from './custom-pipe/read-less-more.pipe';
import { RestaurantComponent } from './app-navigation/restaurant/restaurant.component';
import { ViewBlogComponent } from './app-navigation/home/view-blog/view-blog.component';
import { LazyLoadDirective } from './custom-directives/lazy-load.directive';
import { FollowComponent } from './components/follow/follow.component';
import { PublishComponent } from './components/publish/publish.component';

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
    TitleCasePipe,
    TitleCaseDirective,
    BlogComponent,
    UpdateBlogComponent,
    IsAuthorizedDirective,
    ReadLessMorePipe,
    RestaurantComponent,
    ViewBlogComponent,
    LazyLoadDirective,
    FollowComponent,
    PublishComponent,
// ToastrModule added
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxBootstrapConfirmModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        closeButton:true
      }
    ), 

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
