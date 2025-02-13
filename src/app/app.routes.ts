import {Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {BudgetPageComponent} from "./budget-page/budget-page.component"

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'features', component: HomePageComponent},
  {path: 'pricing', component: HomePageComponent},
  {path: 'about', component: HomePageComponent},
  {path: 'budget', component: BudgetPageComponent, title: 'Budget'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
