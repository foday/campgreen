/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, InitiativeItem } from './types';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Camp Green Insulated Hydro Flask',
    price: 34.00,
    description: 'Double-walled vacuum insulated beverage flask featuring the official Camp Green emblem. Keeps liquids hot for 12 hours or ice-cold for 24.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
    category: 'Drinkware',
    inventory: 45,
    material: '100% Recycled 18/8 Stainless Steel, bamboo cap',
    ecoScore: 9,
    features: ['BPA-free', 'Condensation-resistant', 'Zero-leak seal', 'Lifetime warranty']
  },
  {
    id: 'p2',
    name: 'Camp Green Explorer Terra Backpack',
    price: 89.00,
    description: 'Ultra-durable, weather-resistant outdoor pack crafted entirely from ocean-bound recycled plastic bottles. Perfect for wilderness multi-day excursions or urban commutes.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600',
    category: 'Bags & Gear',
    inventory: 18,
    material: '900D Post-Consumer Recycled Polyester (PET)',
    ecoScore: 10,
    features: ['Waterproof coating', 'Ergonomic lumbar support', 'Laptop sleeve & bladder pouch', 'Hydration pack compatible']
  },
  {
    id: 'p3',
    name: 'Camp Green Organic Field Tee',
    price: 28.00,
    description: 'Comfortable, breathable adventure shirt. Spun from pesticide-free, organic fair-trade cotton. Minimalist line art of the Camp Green canopy silhouette.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600',
    category: 'Apparel',
    inventory: 64,
    material: '100% Certified Organic Cotton',
    ecoScore: 10,
    features: ['GOTS certified', 'Water-based eco inks', 'Naturally odor-resistant', 'Pre-shrunk finish']
  },
  {
    id: 'p4',
    name: 'Camp Green Sol-Flex Folding Stove',
    price: 55.00,
    description: 'Compact ultralight camping stove that relies on twigs, dry leaves, or solar-charred wood pellets instead of polluting canisters. High thermal outcome.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594498653385-d5172b53adc7?auto=format&fit=crop&q=80&w=600',
    category: 'Camp Equipment',
    inventory: 12,
    material: 'Surgical Titanium Alloy',
    ecoScore: 8,
    features: ['Windproof shielding', 'Collapses flat to 0.5 inches', 'Includes carry case', 'No chemical emissions']
  },
  {
    id: 'p5',
    name: 'Camp Green Biodegradable Enamel Cup',
    price: 18.00,
    description: 'Traditional campfire mug rebuilt using plant-starch hybrid composites. Completely sturdy, fire-resistant, and breaks down in compost at end-of-life.',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    category: 'Drinkware',
    inventory: 80,
    material: 'Starch Crystalline Silicates & Steel Enamel core',
    ecoScore: 9,
    features: ['Dishwasher safe', 'Scratch proof', 'Signature forest speckled trim', 'Reinforced comfort handle']
  },
  {
    id: 'p6',
    name: 'Camp Green Recycled Canopy Cap',
    price: 22.00,
    description: 'Adjustable strap-back baseball cap stitched with the Camp Green leaf logo. Crafted from hemp fabrics and composite recycled sails.',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13ce35?auto=format&fit=crop&q=80&w=600',
    category: 'Apparel',
    inventory: 35,
    material: '50% Organic Hemp, 50% Recycled PET canvas',
    ecoScore: 9,
    features: ['Hypoallergenic strap', 'Deconstructed brass clasp', 'Moisture-wicking brow-band']
  },
  {
    id: 'p7',
    name: 'Camp Green Solar Grid Lantern',
    price: 42.00,
    description: 'Inflatable, waterproof LED camping lantern with integrated solar tiles. Provides up to 150 lumens of ambient light, power banking backup for phone charging.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600',
    category: 'Camp Equipment',
    inventory: 20,
    material: 'Thermoplastic Polyurethane & Monocrystalline Solar Panels',
    ecoScore: 10,
    features: ['Waterproof rating IP67', 'USB & Solar recharge paths', '5 light-intensity settings', 'Compresses flat']
  },
  {
    id: 'p8',
    name: 'Camp Green All-Weather Field Journal',
    price: 15.00,
    description: '100% waterproof notebook made from real limestone rock residue. Write effortlessly in rain, snow, or mud without tearing or bleeding ink.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600',
    category: 'Bags & Gear',
    inventory: 110,
    material: 'Recycled Mineral Stone Dust',
    ecoScore: 9,
    features: ['Acid-free paper', 'Zero trees harvested', 'Extremely durable cover', 'Recyclable locally']
  }
];

export const mockInitiatives: InitiativeItem[] = [
  {
    id: 'init1',
    title: 'Zero-Canister Camping Pledge',
    date: 'Summer 2025',
    status: 'In Progress',
    description: 'Promoting biomaterial wood gasification and solar cooking at state parks. We have distributed over 1,500 Sol-Flex camping stoves to replace single-use gas canisters.',
    impactMetric: '42,000+ plastic/metal canisters diverted from waste streams',
    image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'init2',
    title: 'The Great Cascade Re-wilding',
    date: 'Spring 2024',
    status: 'Completed',
    description: 'A major native plant reforestation campaign in wildfire-scarred regions of Washington. Active partnership with local tribes and biological researchers.',
    impactMetric: '150,000 native seedling sprouts safely planted',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'init3',
    title: 'Eco-Camp Archicenter Designs',
    date: 'Winter 2025',
    status: 'Completed',
    description: 'Developing low-impact, biodegradable dome shelters with off-grid composting systems designed to leave zero trace in vulnerable ecological wetlands.',
    impactMetric: '8 pristine test sites deployed in National Preserves',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'init4',
    title: 'Himalayan Sherpa Trash Sweep',
    date: 'Autumn 2026',
    status: 'Planned',
    description: 'A dedicated clean-up and high-altitude gear recycling network aiming to collect and transform discarded basecamp materials into beautiful Camp Green bags.',
    impactMetric: 'Projected collection of over 12 tons of microplastic gear',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600'
  }
];

export const footerModalContent = {
  mission: {
    title: 'Our Mission',
    subtitle: 'Restoring Nature as We Explore It',
    content: 'At Camp Green, our mission is firm and unwavering. We are dedicated to creating a vibrant canopy of sustainable gear, low-impact camp sanctuaries, and persistent re-wilding initiatives. We believe that humans do not need to choose between beautiful modern comfort and clean ecological stewardship. Through fair-trade cotton apparel, zero-canister stove solutions, and fully mineral-derived field gear, we are shaping an outdoor culture that repairs wilderness as you cross it. Discover, recreate, and rest easy knowing your shelter and gear are contributing to active ecological preservation projects globally.'
  },
  conservation: {
    title: 'Conservation Projects',
    subtitle: 'Direct Ecosystem Planting & Cleanup',
    content: 'We invest 15% of all proceeds from our gear and apparel store straight into physical ecosystem actions. Our current campaigns focus on Washington State native forest reforestation, Western water-table purification networks, and coastal microplastic sweeps. Every garment you buy from us is tied to a specific geographic region (look at the interior coordinate tag), allowing you to trace the exact acre of canopy you helped finance. We host quarterly public planting summits where our community gathers together in state forests to get their hands in the soil.'
  },
  company: {
    title: 'Company & Founders',
    subtitle: 'Grown from the Earth',
    content: 'Camp Green was established in 2023 by a handful of sustainable design architects, materials engineers, and former National Park rangers. Distressed by the pile-up of single-use heavy metal fuel canisters, plastic microfibers, and non-recyclable tents inside our wild lands, we set out to build an alternative. Every design is tested in rough mountainous conditions to ensure that biodegradable materials do not compromise life-safety warmth, water protection, or longevity.'
  },
  support: {
    title: 'Support & Helpdesk',
    subtitle: 'We Stand by Our Green Gear',
    content: 'Need to return some gear? Every Camp Green purchase is covered by our Circular Life Program. If your pack, flask, or apparel breaks, tears, or is ready to retire, do not throw it away. Ship it to us for free! We will refactor or compost the raw materials, and send you a voucher code for 20% off your next item. For any customer questions or shipping inquiries, email support@campgreen.org or hop on our live chat during weekdays.'
  },
  legal: {
    title: 'Legal & Circular Compliance',
    subtitle: 'Zero-Waste & Transparency First',
    content: 'Camp Green operates under legal circular transparency guidelines. All of our certifications (GOTS, Fair-Trade, FSC paper and Stone, and Recycled PET) are audited biannually and are available in full public records on our secure legal portal. We maintain zero shell investments and prioritize local assembly loops in regions affected by economic depression. Your data is protected by high-standard environmental privacy compliance: we never monetize your contact info, because nature belongs to everyone, and privacy is a fundamental human block.'
  }
};
