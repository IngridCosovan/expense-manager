import {Component, OnInit} from '@angular/core';
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
    TabMenuModule
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css'
})
export class TabMenuComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Features', icon: 'pi pi-fw pi-calendar'},
      {label: 'Pricing', icon: 'pi pi-fw pi-pencil'},
      {label: 'About Us', icon: 'pi pi-fw pi-file'},
    ];
  }
}
