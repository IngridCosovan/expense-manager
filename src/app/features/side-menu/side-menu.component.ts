import {Component} from '@angular/core';
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {Ripple, RippleModule} from "primeng/ripple";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    BadgeModule,
    AvatarModule,
    MenuModule,
    RippleModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  currentRoute = '';
  items: MenuItem[] = [
    {
      separator: true
    },
    {
      // label: 'Documents',
      items: [
        {
          label: 'Dashboard',
          routerLink: '/dashboard',
          icon: 'pi pi-chart-bar',
          command: () => this.onTabClick('dashboard')
        },
        {
          label: 'Transactions',
          icon: 'pi pi-wallet',
          routerLink: '/transactions',
          command: () => this.onTabClick('transactions')
        },
        {
          label: 'Budget',
          icon: 'pi pi-chart-pie',
        },
        {
          label: 'Reports',
          icon: 'pi pi-chart-line',
        },
        {
          label: 'Investments',
          icon: 'pi pi-money-bill',
        },
      ]
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog',
        },
        {
          label: 'Messages',
          icon: 'pi pi-inbox',
          badge: '2'
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out'
        }
      ]
    },
    {
      separator: true
    }
  ];

  constructor(private router: Router) {
  }

  onTabClick(id: string) {
    this.router.navigate(['/main/' + id]);
  }
}
