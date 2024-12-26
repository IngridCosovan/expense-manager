import {Component, signal, ViewEncapsulation} from '@angular/core';
import {TabMenuComponent} from '../home-page/tab-menu/tab-menu.component';
import {InplaceModule} from "primeng/inplace";
import {NgStyle} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LoginAndAuthComponent} from "../login-and-auth/login/login-and-auth.component";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TabMenuComponent,
    InplaceModule,
    NgStyle,
    LoginAndAuthComponent,
    DialogModule,
    InputTextModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger(
      'slideView',
      [
        state('true', style({transform: 'translateX(100%)', opacity: 0})),
        state('false', style({transform: 'translateX(0)', opacity: 1})),
        transition('0 => 1', animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))),
        transition('1 => 1', animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0}))),
      ]),

    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('600ms ease-in', style({transform: 'translateX(0%)', 'opacity': 1}))
      ]),

      transition(':leave', [
        style({transform: 'translateX(0%)', opacity: 1}),
        animate('0ms ease-in', style({transform: 'translateX(100%)', 'opacity': 0}))
      ])
    ])
  ]
})
export class HomePageComponent {
  state = false;
  isLoginDialogOpen = signal(false)

  openLoginDialog() {
    this.isLoginDialogOpen.set(true);
  }

  showDialog() {
    this.state = true;
  }
}
