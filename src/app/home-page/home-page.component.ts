import { LoginAndAuthComponent } from './../login-and-auth/login/login-and-auth.component';
import {ChangeDetectorRef, Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {TabMenuComponent} from '../home-page/tab-menu/tab-menu.component';
import {InplaceModule} from "primeng/inplace";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import { Router , NavigationEnd, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TabMenuComponent,
    LoginAndAuthComponent,
    InplaceModule,
    DialogModule,
    InputTextModule,
    CommonModule,
    RouterOutlet

  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit{
  visible= false;
  stateSignInDialog = false;
  currentRoute='';
  test = false;

  constructor(private router: Router, private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
    console.log('test');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.cdr.detectChanges();
        console.log(this.currentRoute);
      }
    });
  }

  showDialog() {
    this.stateSignInDialog=true;
  }

  closeDialog() {
    this.visible = false;
  }

  receiveSeletedTab(event: Event){
    console.log(event);
  }
}
