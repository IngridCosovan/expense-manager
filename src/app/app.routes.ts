import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginAndAuthComponent} from "./login-and-auth/login/login-and-auth.component";
import {SignUpComponent} from "./login-and-auth/sign-up/sign-up.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'features', component: HomePageComponent},
  { path: 'pricing', component: HomePageComponent},
  { path: 'about', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
