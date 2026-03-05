import { SupportType } from 'app/core/enums/support-type.enum';
import { SubscriptionType } from 'app/core/enums/subscription-type.enum';

export interface SubscriptionTypeModel {
  id: number;
  type: SubscriptionType;
  subtitle: string;
  price: Price;
  numberOfUsers: number;
  storage: number;
  supportType: SupportType;
  features: string[];
}

export interface Price {
  currency: string;
  value: number;
}

export const subscriptionTypes: SubscriptionTypeModel[] = [
  {
    id: 1,
    type: SubscriptionType.BASIC,
    subtitle: 'Best for individuals starting to track their spending.',
    price: { currency: '$', value: 5 },
    numberOfUsers: 5,
    storage: 5,
    supportType: SupportType.MAIL,
    features: ['Track expenses', 'Track income', 'Basic categories', 'Monthly summary'],
  },
  {
    id: 2,
    type: SubscriptionType.STANDARD,
    subtitle: 'Perfect for users who want deeper insights into their finances.',
    price: { currency: '$', value: 10 },
    numberOfUsers: 15,
    storage: 15,
    supportType: SupportType.PRIOR_MAIL,
    features: ['Everything in Basic', 'Custom categories', 'Charts & analytics', 'Export to CSV', 'Budget goals'],
  },
  {
    id: 3,
    type: SubscriptionType.PREMIUM,
    subtitle: 'For power users who want full financial control.',
    price: { currency: '$', value: 25 },
    numberOfUsers: 30,
    storage: 50,
    supportType: SupportType.PHONE_AND_MAIL,
    features: ['Everything in Standard', 'Multi-currency support', 'Recurring transactions', 'Priority support', 'Unlimited history'],
  },
];
