import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { subscriptionTypes } from 'app/core/models/subscription-type.model';
import { AuthService } from 'app/core/services/auth.service';
import { UiStateService } from 'app/core/services/ui-state.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PricingComponent {
  protected readonly subscriptionTypes = subscriptionTypes;

  constructor(
    private authService: AuthService,
    private uiState: UiStateService,
  ) {}

  selectSubscription(): void {
    if (this.authService.isLoggedIn()) {
      console.log('logat');
    } else {
      this.uiState.openLoginDialog();
    }
  }
}
