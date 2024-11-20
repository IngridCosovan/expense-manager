import {Component, ViewEncapsulation} from '@angular/core';
import {TabMenuComponent} from '../home-page/tab-menu/tab-menu.component';
import {InplaceModule} from "primeng/inplace";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TabMenuComponent,
    InplaceModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {

}
