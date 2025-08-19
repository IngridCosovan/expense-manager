import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {subscriptionTypes} from "app/core/models/subscription-type.model";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CardModule,
    Button
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  protected readonly subscriptionTypes = subscriptionTypes;
}
