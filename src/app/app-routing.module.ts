// import { RouterModule, Routes } from '@angular/router';
// import {HomePageComponent} from "./home-page/home-page.component";
// import {AppComponent} from "./app.component";
// import {NgModule} from "@angular/core";
//
// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomePageComponent },
// ];
//
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routes} from "./app.routes";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule, HomePageComponent, AppComponent, CommonModule],
  exports: [RouterModule]
})
 export class AppRoutingModule{}
