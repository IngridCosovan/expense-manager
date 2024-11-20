import { Component } from '@angular/core';
import {TabMenuModule} from "primeng/tabmenu";

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
    TabMenuModule
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css'
})
export class TabMenuComponent {

}
