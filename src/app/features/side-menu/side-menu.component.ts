import { Component } from '@angular/core';
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    BadgeModule,
    AvatarModule,
    MenuModule,
    Ripple
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
items = [
    {
      separator: true
    },
    {
      // label: 'Documents',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-plus',
        },
        {
          label: 'Income',
          icon: 'pi pi-plus',
        },
        {
          label: 'Expenses',
          icon: 'pi pi-plus',
        },
        {
          label: 'Budget',
          icon: 'pi pi-plus',
        },
        {
          label: 'Reports',
          icon: 'pi pi-plus',
        },
        {
          label: 'Investments',
          icon: 'pi pi-plus',
        },
      ]
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog',
          shortcut: '⌘+O'
        },
        {
          label: 'Messages',
          icon: 'pi pi-inbox',
          badge: '2'
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          shortcut: '⌘+Q'
        }
      ]
    },
    {
      separator: true
    }
  ];
}
