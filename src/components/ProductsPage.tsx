/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, ShieldAlert, Award, Footprints, Sparkles, ShoppingBag, CheckCircle } from 'lucide-react';

interface ProductsPageProps {
  onGoToStore: () => void;
}

export default function ProductsPage({ onGoToStore }: ProductsPageProps) {
  const customSpecs = [
    {
      title: 'Sol-Dome Bio Shelters',
      metric: '92% CO2 Less than PVC Tents',
      desc: 'Crafted from plant-based polymers and organic structured hemp threads. Features complete shelter water-sealing and lightweight folding arches.',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=500'
    },
    {
      title: 'Lichen-Tech Micro Linings',
      metric: 'Complete Natural Breathability',
      desc: 'Our revolutionary lining fabric harvested from certified sustainable flax fields. Naturally insulates heat while keeping air circulating.',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=500'
    },
    {
      title: 'Titanium Twig Gasifiers',
      metric: 'Zero Hydrocarbon Emissions',
      desc: 'Collapsible ultraweight stoves that cook using local natural wilderness debris. No metal canister waste or transport weight.',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1594498653385-d5172b53adc7?auto=format&fit=crop&q=80&w=500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left animate-in fade-in duration-300" id="brand-products-spec-page">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-widest block mb-3">
          CATALOGS // MATERIAL INNOVATION
        </span>
        <h1 className="font-sans font-black text-4xl sm:text-5xl text-[#1b1c19] tracking-tight leading-none mb-6">
          Equipping the Explorer, <span className="text-[#324e2a] font-normal italic">Securing the Trail</span>.
        </h1>
        <p className="font-sans text-lg text-[#434840] leading-relaxed">
          At Camp Green, our gear isn’t merely assembled—it is grown. We reject standard synthetic plastics, heavy chemical stains, and disposable camping frames in favor of heavy duty, high-performance bio-composites.
        </p>
      </div>

      {/* Philosophy Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        <div className="p-6 rounded-2xl bg-[#faf9f4] border border-[#efeee9] shadow-xs">
          <div className="p-3 w-12 h-12 bg-[#4A6741]/10 rounded-xl flex items-center justify-center text-[#4A6741] mb-5">
            <Footprints className="w-6 h-6" />
          </div>
          <h3 className="font-sans font-bold text-lg text-[#1b1c19] mb-2 text-left">Carbon-Light Design</h3>
          <p className="font-sans text-sm text-[#434840] leading-relaxed text-left">
            We track the continuous carbon footprint of every thread. Our goal is to offset 120% of the manufacturing and transit emissions directly inside native state forests.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#faf9f4] border border-[#efeee9] shadow-xs">
          <div className="p-3 w-12 h-12 bg-[#4A6741]/10 rounded-xl flex items-center justify-center text-[#4A6741] mb-5">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-sans font-bold text-lg text-[#1b1c19] mb-2 text-left">Lifetime Circular Policy</h3>
          <p className="font-sans text-sm text-[#434840] leading-relaxed text-left">
            When your cup dents or your jacket stains, ship it right back. We recycle or compost the raw fibers and reward you with high-value digital voucher codes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#faf9f4] border border-[#efeee9] shadow-xs">
          <div className="p-3 w-12 h-12 bg-[#4A6741]/10 rounded-xl flex items-center justify-center text-[#4A6741] mb-5">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-sans font-bold text-lg text-[#1b1c19] mb-2 text-left">Zero Toxic Chemicals</h3>
          <p className="font-sans text-sm text-[#434840] leading-relaxed text-left">
            Our water water-proof membranes use zero PFAs, carcinogens, or harsh polymers. We color fabrics utilizing only organic, certified water-based inks.
          </p>
        </div>

      </div>

      {/* Show speculative architectural projects */}
      <div className="space-y-12 mb-20">
        <h2 className="font-sans font-extrabold text-[#1B1C19] text-3xl tracking-tight text-center mb-12">
          Exclusive Backcountry Equipment Engineering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customSpecs.map((spec, index) => (
            <div key={index} className="bg-white rounded-3xl border border-[#efeee9] overflow-hidden shadow-sm hover:shadow transition-all group p-4">
              <div className="h-48 rounded-2xl overflow-hidden mb-5 relative">
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#4A6741]/90 backdrop-blur-md text-white text-[10px] font-mono tracking-wider font-bold rounded-full uppercase">
                  {spec.metric}
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#1b1c19] text-left">{spec.title}</h3>
              <p className="font-sans text-sm text-[#434840] leading-relaxed text-left mt-3">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Gear E-commerce transition promo */}
      <div className="bg-[#efeee9]/40 rounded-3xl p-8 md:p-12 border border-[#efeee9] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-left">
          <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-wider block">VISIT E-COMMERCE SECTOR</span>
          <h3 className="font-sans font-bold text-2xl text-[#1b1c19] tracking-tight">Sustainable CAMP GREEN Consumer Goods</h3>
          <p className="font-sans text-sm text-[#434840] leading-relaxed">
            Acquire premium organic t-shirts, mineral dust waterproof journals, insulated thermoses, bamboo drinking cups, and post-consumer trail backpacks. Stamped with the signature Camp Green canopy logotype.
          </p>
        </div>
        
        <button
          onClick={onGoToStore}
          className="flex items-center gap-3 px-8 py-4 bg-[#4A6741] hover:bg-[#334f2b] text-white font-sans text-sm font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
          id="products-goto-store-btn"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Enter Eco-Gear Store</span>
        </button>
      </div>

    </div>
  );
}
