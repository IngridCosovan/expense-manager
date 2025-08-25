import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {subscriptionTypes} from "app/core/models/subscription-type.model";
import {TranslateModule} from "@ngx-translate/core";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CardModule,
    Button,
    TranslateModule,
    NgStyle
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  protected readonly subscriptionTypes = subscriptionTypes;
}
