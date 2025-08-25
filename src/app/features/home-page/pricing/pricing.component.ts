import {Component, ViewEncapsulation} from '@angular/core';
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {subscriptionTypes} from "app/core/models/subscription-type.model";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    Button,
    CardModule,
    PrimeTemplate
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PricingComponent {
  protected readonly subscriptionTypes = subscriptionTypes;
}
