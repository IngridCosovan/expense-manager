import {Component, EventEmitter, Output} from '@angular/core';
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {RippleModule} from "primeng/ripple";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    BadgeModule,
    AvatarModule,
    MenuModule,
    RippleModule,
    ButtonModule,
    NgClass
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  collapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();

  items: MenuItem[] = [
    { separator: true },
    {
      items: [
        { label: 'Dashboard', icon: 'pi pi-chart-bar', command: () => this.onTabClick('dashboard') },
        { label: 'Transactions', icon: 'pi pi-wallet', command: () => this.onTabClick('transactions') },
        { label: 'Budget', icon: 'pi pi-chart-pie' },
        { label: 'Reports', icon: 'pi pi-chart-line' },
        { label: 'Investments', icon: 'pi pi-money-bill' },
      ]
    },
    {
      label: 'Profile',
      items: [
        { label: 'Settings', icon: 'pi pi-cog' },
        { label: 'Messages', icon: 'pi pi-inbox', badge: '2' },
        { label: 'Logout', icon: 'pi pi-sign-out' },
      ]
    },
    { separator: true }
  ];

  constructor(private router: Router) {}

  toggle() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  onTabClick(id: string) {
    this.router.navigate(['/main/' + id]);
  }
}
