/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Compass, ShieldCheck, TreePine } from 'lucide-react';
import { ActiveView } from '../types';

interface HeroSectionProps {
  onDiscoverMore: () => void;
  setActiveView: (view: ActiveView) => void;
}

export default function HeroSection({ onDiscoverMore, setActiveView }: HeroSectionProps) {
  // Use the exact generated file saved in /src/assets/images/
  // The system compiled it to: /src/assets/images/camp_green_hero_1779841823569.png
  const heroImageSrc = '/src/assets/images/camp_green_hero_1779841823569.png';

  return (
    <section className="relative overflow-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f4]" id="landing-hero">
      
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4A6741]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-96 h-96 bg-[#D9CCB9]/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Eco Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A6741]/10 border border-[#4A6741]/20 shadow-sm animate-fade-in mb-8">
          <TreePine className="w-4 h-4 text-[#4A6741]" />
          <span className="font-sans font-bold text-xs tracking-wider uppercase text-[#324e2a]">
            CLAY-MEMBER SANCTUARIES
          </span>
        </div>

        {/* Big Displays Header */}
        <h1 className="font-sans font-extrabold text-[#1b1c19] text-5xl md:text-6xl tracking-tight leading-none max-w-4xl mx-auto italic drop-shadow-sm">
          Experience the Outdoors, <br className="hidden md:inline" />
          <span className="text-[#4A6741] not-italic">Responsibly.</span>
        </h1>

        {/* Paragraph Descriptives */}
        <p className="font-sans text-lg md:text-xl text-[#434840] max-w-2xl mx-auto mt-6 leading-relaxed">
          Sustainable gear and initiatives for a better planet. Discover a beautiful canopy of camps built on materials that leave zero footprints.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={onDiscoverMore}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-sans text-base font-bold text-white bg-[#4A6741] hover:bg-[#334f2b] tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-center cursor-pointer"
            id="hero-discover-more-btn"
          >
            Discover More
          </button>
          
          <button
            onClick={() => setActiveView('gear-store')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-sans text-base font-bold text-[#4A6741] bg-white hover:bg-[#efeee9] border-2 border-[#4A6741]/20 hover:border-[#4A6741]/40 transition-all text-center cursor-pointer"
            id="hero-shop-collection-btn"
          >
            Explore Sustainable Store
          </button>
        </div>

        {/* Central 3D generated landscape asset frame */}
        <div className="mt-16 relative mx-auto max-w-4xl rounded-3xl overflow-hidden shadow-2xl border-4 border-[#efeee9] bg-gradient-to-b from-[#efeee9] to-white group p-1 transition-all">
          
          {/* Subtle Ambient Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4A6741]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <img
            src={heroImageSrc}
            alt="Camp Green pristine 3D sustainable campground model illustration with a caravan, tents, alpine mountaintops and clay trees"
            className="w-full h-auto object-cover rounded-[1.25rem] transform group-hover:scale-[1.01] transition-all duration-700"
            referrerPolicy="no-referrer"
            id="hero-rendered-3d-asset"
          />

          {/* Hologram or Eco stats layer overlapping */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-[#faf9f4]/85 backdrop-blur-md border border-[#efeee9] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A6741] flex items-center justify-center text-[#faf9f4]">
                <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              <div className="text-left">
                <span className="font-sans font-bold text-[#1b1c19] text-sm block">Cascade Peak Eco Sanctuary</span>
                <span className="font-mono text-[10px] text-[#434840]/80">COORDINATES: 48.5133° N, 121.7589° W</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#4A6741]/15 text-[#324e2a] font-mono text-xs font-bold ring-1 ring-[#4A6741]/30">
              <ShieldCheck className="w-4 h-4 text-[#4A6741]" />
              <span>ACTIVE FORESTRY PARTNER</span>
            </div>
          </div>

        </div>

        {/* Simple single page anchor scrolls guidelines for visitors (Warm visual indicators) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-[#efeee9] pt-12">
          
          <div className="p-2">
            <span className="font-mono text-xs font-bold text-[#4A6741] block">01 / PERSISTENT SHIELD</span>
            <span className="font-sans font-bold text-[#1b1c19] text-base block mt-1">Stewardship First</span>
            <span className="font-sans text-xs text-[#434840] block mt-1 leading-relaxed">Everything built is backed by active re-wilding tree operations.</span>
          </div>

          <div className="p-2">
            <span className="font-mono text-xs font-bold text-[#4A6741] block">02 / CARBON ZERO</span>
            <span className="font-sans font-bold text-[#1b1c19] text-base block mt-1">Starch-Enamel Base</span>
            <span className="font-sans text-xs text-[#434840] block mt-1 leading-relaxed">No toxic single-use canisters. We build stoves powered by twigs.</span>
          </div>

          <div className="p-2">
            <span className="font-mono text-xs font-bold text-[#4A6741] block">03 / COMPASSIONATE</span>
            <span className="font-sans font-bold text-[#1b1c19] text-base block mt-1">Circular Guarantee</span>
            <span className="font-sans text-xs text-[#434840] block mt-1 leading-relaxed">We accept used gear back for processing under voucher credit.</span>
          </div>

          <div className="p-2">
            <span className="font-mono text-xs font-bold text-[#4A6741] block">04 / LOCAL RANGING</span>
            <span className="font-sans font-bold text-[#1b1c19] text-base block mt-1">Fair Assembly Loop</span>
            <span className="font-sans text-xs text-[#434840] block mt-1 leading-relaxed">Ensuring healthy living salaries for local mountain communities.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
