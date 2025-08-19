import {Routes} from '@angular/router';
import {HomePageComponent} from "app/home-page/home-page.component";
import {HomeContentComponent} from "app/home-page/home-content/home-content.component";
import {PricingComponent} from "app/home-page/pricing/pricing.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'home', component: HomeContentComponent },
      { path: 'features', component: HomeContentComponent },
      { path: 'pricing', component: PricingComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  // { path: 'dashboard', component: DashboardComponent }
];
