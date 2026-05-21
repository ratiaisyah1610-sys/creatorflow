export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MarketFactor {
  category: string;
  details: string;
  subDetails: string;
}

export interface StatsMarket {
  tier: 'TAM' | 'SAM' | 'SOM';
  label: string;
  value: string;
  description: string;
  scope: string;
}

export interface CompetitorComparison {
  featureName: string;
  creatorFlow: boolean | string;
  hootsuite: boolean | string;
  buffer: boolean | string;
  later: boolean | string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  colorTheme: 'cream' | 'brown' | 'dark';
}
