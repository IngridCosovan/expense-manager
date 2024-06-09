import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginAndAuthComponent} from "./login-and-auth/login/login-and-auth.component";

export const routes: Routes = [
  { path: 'login', component: LoginAndAuthComponent, title: 'Login Page'},
  { path: 'home', component: HomePageComponent, title: 'Home Page' },
];
