import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginAndAuthComponent} from "./login-and-auth/login/login-and-auth.component";
import {SignUpComponent} from "./login-and-auth/sign-up/sign-up.component";

export const routes: Routes = [
  { path: 'login', component: LoginAndAuthComponent, title: 'Login Page'},
  { path: 'home', component: HomePageComponent, title: 'Home Page' },
  { path: 'sign-up', component: SignUpComponent, title: 'Sign Up' },
];
