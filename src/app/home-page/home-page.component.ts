import { LoginAndAuthComponent } from './../login-and-auth/login/login-and-auth.component';
import {Component, signal, ViewEncapsulation} from '@angular/core';
import {TabMenuComponent} from '../home-page/tab-menu/tab-menu.component';
import {InplaceModule} from "primeng/inplace";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TabMenuComponent,
    LoginAndAuthComponent,
    InplaceModule,
    DialogModule,
    InputTextModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  visible= false;
  stateSignInDialog = false;

  showDialog() {
    this.stateSignInDialog=true;
  }

  closeDialog() {
    this.visible = false;
  }
}
