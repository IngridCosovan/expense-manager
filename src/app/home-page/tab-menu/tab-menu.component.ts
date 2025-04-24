import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";
import {LoginAndAuthComponent} from "app/login-and-auth/login/login-and-auth.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
    TabMenuModule,
    LoginAndAuthComponent
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TabMenuComponent implements OnInit{
  items: MenuItem[] | null = [];
  showSignInDialog = false;
  activeItem: MenuItem | null = null;
  @Output() selectedTab = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<any>();

constructor(private router: Router) {
}
  ngOnInit() {
    this.items = [
      { label: 'Home', id: 'home',  command: () => this.onTabClick('home')},
      { label: 'Features', id: 'features',   command: () => this.onTabClick('features') },
      { label: 'Pricing', id: 'pricing', command: () => this.onTabClick('pricing') },
      { label: 'Sign In', id: 'signin',  command: () => this.onTabClick('signin') }
    ];
    this.activeItem = this.items[0];
  }

  onTabClick(id: string) {
    if (id === 'signin') {
      this.showSignInDialog = true;
      this.activeItem = null; // ✨ dezactivăm selecția
    } else {
      this.router.navigate(['/' + id]);
      this.activeItem = this.items?.find(i => i.id === id) ?? null;
    }
  }
  //
  // onTabChange(item: MenuItem) {
  //   if (item.id === 'signin') {
  //     this.activeItem = item;
  //     this.showSignInDialog = true;
  //   }else {
  //     this.activeItem = item;
  //     this.router.navigate(['/' + item.id]);
  //   }
  // }

  // onTabChange(event: MenuItem) {
  //   if (event.id === 'signin') {
  //     this.showSignInDialog = true;
  //     setTimeout(() => {
  //       this.activeItem = undefined; // sau alt tab default, ex. this.items[0]
  //     });
  //   }else if (event.routerLink) {
  //     this.router.navigate([event.routerLink]);
  //   }
  //   // this.selectedTab.emit(event.label);
  //
  // }

}
