import { RedirectHome } from './services/guard/redirect-home/redirect-home.service';
import { AuthGuard } from './services/guard/auth-guard/auth-guard.service';
import { CommonService } from './services/common/common.service';
import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:3000/"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
        headerName: "x-auth-token",
        authScheme: "",
        throwNoTokenError: true,
      },
    }),
  ],
  providers: [
    AuthService,
    CommonService,
    AuthGuard,
    RedirectHome
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
