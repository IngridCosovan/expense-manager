import {Component, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";
import { ButtonModule } from 'primeng/button';
import {subscriptionTypes} from "app/core/models/subscription-type.model";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PricingComponent {
  protected readonly subscriptionTypes = subscriptionTypes;
}
