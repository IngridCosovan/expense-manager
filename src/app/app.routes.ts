import {Routes} from '@angular/router';
import {HomePageComponent} from "app/features/home-page/home-page.component";
import {HomeContentComponent} from "app/features/home-page/home-content/home-content.component";
import {PricingComponent} from "app/features/home-page/pricing/pricing.component";
import {MainBoardComponent} from "app/features/main-board/main-board.component";
import {TransactionsBoardComponent} from "app/features/transactions-board/transactions-board.component";

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
  {path: 'main', component: MainBoardComponent,
    children: [
      {path: 'transactions', component: TransactionsBoardComponent},
      {path: 'dashboard', component: TransactionsBoardComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
];
