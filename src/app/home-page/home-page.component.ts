import { LoginAndAuthComponent } from 'app/login-and-auth/login/login-and-auth.component';
import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InplaceModule} from "primeng/inplace";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import { Router , NavigationEnd, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import {Button} from "primeng/button";
import {TranslateModule} from "@ngx-translate/core";
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LoginAndAuthComponent,
    InplaceModule,
    DialogModule,
    InputTextModule,
    CommonModule,
    RouterOutlet,
    Button,
    TranslateModule,
    TabMenuModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit{
  currentRoute='';
  items: MenuItem[] = [];
  showSignInDialog = false;

  constructor(private router: Router, private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', id: 'home',  command: () => this.onTabClick('home')},
      { label: 'Features', id: 'features',   command: () => this.onTabClick('features') },
      { label: 'Pricing', id: 'pricing', command: () => this.onTabClick('pricing') },
      { label: 'Sign In', id: 'signin',  command: () => this.onTabClick('signin') }
    ];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.cdr.detectChanges();
        console.log(this.currentRoute);
      }
    });
  }

  onTabClick(id: string) {
    if (id === 'signin') {
      this.showSignInDialog = true;
    }
    this.router.navigate(['/' + id]);
  }
}
