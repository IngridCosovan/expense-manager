import {Component, ViewEncapsulation} from '@angular/core';
import {SideMenuComponent} from "../features/side-menu/side-menu.component";
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-budget-page',
  standalone: true,
  imports: [
    SideMenuComponent,
    AvatarModule,
  ],
  templateUrl: './budget-page.component.html',
  styleUrl: './budget-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class BudgetPageComponent {

}
