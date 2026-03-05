import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {SideMenuComponent} from "app/layout/side-menu/side-menu.component";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "primeng/button";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {Menu, MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {AuthService} from "app/core/services/auth.service";

@Component({
  selector: 'app-main-board',
  standalone: true,
  imports: [
    AvatarModule,
    SideMenuComponent,
    TranslateModule,
    ButtonModule,
    RouterOutlet,
    MenuModule,
  ],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MainBoardComponent {
  @ViewChild('profileMenu') profileMenu!: Menu;

  pageTitle = '';
  showAddButton = true;
  profileItems: MenuItem[] = [
    {label: 'Profile', icon: 'pi pi-user'},
    {label: 'Settings', icon: 'pi pi-cog'},
    {separator: true},
    {label: 'Sign Out', icon: 'pi pi-sign-out', command: () => this.signOut()},
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('transactions')) {
          this.pageTitle = 'Transactions';
          this.showAddButton = true;
        } else if (event.url.includes('dashboard')) {
          this.pageTitle = 'Dashboard';
          this.showAddButton = false;
        }
      }
    });
  }

  addTransaction(): void {
    console.log('works');
  }

  signOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
