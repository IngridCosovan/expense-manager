import {SupportType} from "app/core/enums/support-type.enum";
import {SubscriptionType} from "app/core/enums/subscription-type.enum";

export interface SubscriptionTypeModel {
  id: number;
  type: SubscriptionType;
  price: Price;
  numberOfUsers: number;
  storage: number;
  supportType: SupportType
}

export interface Price {
  currency: string;
  value: number;
}

export const subscriptionTypes: SubscriptionTypeModel[] = [
  {id: 1, type: SubscriptionType.BASIC, price:{currency: '$', value:5}, numberOfUsers:5, storage:5, supportType:SupportType.MAIL},
  {id: 2, type: SubscriptionType.STANDARD, price:{currency: '$', value:10}, numberOfUsers:15, storage:15, supportType:SupportType.PRIOR_MAIL},
  {id: 3, type: SubscriptionType.PREMIUM, price:{currency: '$', value:25}, numberOfUsers:30, storage:50, supportType:SupportType.PHONE_AND_MAIL}]
