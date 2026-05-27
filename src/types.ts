/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  category: 'Apparel' | 'Drinkware' | 'Bags & Gear' | 'Camp Equipment';
  inventory: number;
  material: string;
  ecoScore: number; // 1-10 index of sustainability
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export type ActiveView = 
  | 'home' 
  | 'about-details' 
  | 'gear-store' 
  | 'about-page' 
  | 'products-page' 
  | 'initiatives-page' 
  | 'contact-page';

export type FooterModalType = 
  | 'mission' 
  | 'conservation' 
  | 'company' 
  | 'support' 
  | 'legal' 
  | null;

export interface InitiativeItem {
  id: string;
  title: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  description: string;
  impactMetric: string;
  image: string;
}
