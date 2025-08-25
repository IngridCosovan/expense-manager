import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routes} from "./app.routes";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "app/features/home-page/home-page.component";

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule, HomePageComponent, AppComponent, CommonModule],
  exports: [RouterModule]
})
 export class AppRoutingModule{}
