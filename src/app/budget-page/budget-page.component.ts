import { Component } from '@angular/core';
import {SideMenuComponent} from "../features/side-menu/side-menu.component";
import {CategoriesPanelComponent} from "../features/categories-panel/categories-panel.component";

@Component({
  selector: 'app-budget-page',
  standalone: true,
  imports: [
    SideMenuComponent,
    CategoriesPanelComponent,
    CategoriesPanelComponent,
  ],
  templateUrl: './budget-page.component.html',
  styleUrl: './budget-page.component.css'
})
export class BudgetPageComponent {

}
