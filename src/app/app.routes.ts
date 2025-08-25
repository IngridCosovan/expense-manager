import {Routes} from '@angular/router';
import {BudgetPageComponent} from "app/budget-page/budget-page.component";
import {HomePageComponent} from "app/features/home-page/home-page.component";
import {HomeContentComponent} from "app/features/home-page/home-content/home-content.component";
import {PricingComponent} from "app/features/home-page/pricing/pricing.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {path: 'home', component: HomeContentComponent},
      {path: 'features', component: HomeContentComponent},
      {path: 'pricing', component: PricingComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {path: 'budget', component: BudgetPageComponent,
    children: [
      // {path: 'income', component: IncomeComponent}
    ]
  },
];
