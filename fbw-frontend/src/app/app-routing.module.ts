import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  {
    path: 'register',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: AppNavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
