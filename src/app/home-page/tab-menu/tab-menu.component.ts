import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
    TabMenuModule
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TabMenuComponent implements OnInit{
  items: MenuItem[] = [];
  @Output() selectedTab = new EventEmitter<string>();


  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home'},
      {label: 'Features', icon: 'pi pi-fw pi-calendar', routerLink: '/features'},
      {label: 'Pricing', icon: 'pi pi-fw pi-pencil', routerLink: '/pricing'},
      {label: 'About Us', icon: 'pi pi-fw pi-file', routerLink: '/about'},
    ];
  }

  onTabChange(event: MenuItem) {
    console.log();

    this.selectedTab.emit(event.label);
  }

}
