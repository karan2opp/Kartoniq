export interface Product {
  id: 'small' | 'medium';
  name: string;
  dimensions: string;
  ply: string;
  price: number;
  badge?: string;
  image: string;
  recommendedFor: string[];
  ctaLabel: string;
  defaultQtyEstimate: number;
}

export interface QuickOrderState {
  smallQty: number;
  mediumQty: number;
}
