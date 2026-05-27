/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Compass, Info, ShieldCheck, TreePine, Award, Zap, HeartHandshake } from 'lucide-react';

interface AboutDetailsPageProps {
  onBack: () => void;
}

export default function AboutDetailsPage({ onBack }: AboutDetailsPageProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-left animate-in fade-in slide-in-from-bottom-6 duration-300" id="discover-more-page">
      
      {/* Back navigation */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 group mb-8 px-4 py-2 rounded-full border border-[#efeee9] bg-white hover:bg-[#efeee9] text-[#1b1c19] text-sm font-semibold transition-all shadow-sm focus:outline-none cursor-pointer"
        id="about-details-back-btn"
      >
        <ArrowLeft className="w-4 h-4 text-[#4A6741] transition-transform group-hover:-translate-x-1" />
        <span>Return to Home Overview</span>
      </button>

      {/* Editorial Title */}
      <header className="border-b border-[#efeee9] pb-10">
        <div className="flex items-center gap-2.5 text-[#4A6741] font-mono text-xs font-bold uppercase tracking-wider mb-3">
          <TreePine className="w-4 h-4" />
          <span>DEEP DIVE REPORT // CAMPAIGN MANUAL</span>
        </div>
        <h1 className="font-sans font-black text-4xl sm:text-5xl text-[#1b1c19] tracking-tight leading-none mb-4">
          Unfolding Camp Green: <br />
          The Design of Low-Impact Micro-Sanctuaries
        </h1>
        <p className="font-sans text-lg text-[#434840] leading-relaxed max-w-3xl">
          Everything you need to know about our certified biological shelter systems, material closed-loops, and how we are active stewards of the lands we roam.
        </p>
      </header>

      {/* Core Grid Sections */}
      <main className="py-12 space-y-16">

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <h2 className="font-sans font-extrabold text-[#1b1c19] text-2xl tracking-tight">
              The Genesis of Carbon-Zero Exploration
            </h2>
            <div className="font-mono text-[10px] text-[#4A6741] font-bold uppercase tracking-widest mt-2">
              BACKGROUND HISTORY
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 text-[#434840]/90 leading-relaxed font-sans text-base">
            <p>
              In late 2023, a group of three backcountry wilderness engineers and a conservation architect sat beside an alpine tarn in the Cascade Range. Surveying the shores, they found classic signs of microplastic canvas rot, oxidized single-use propane cylinders, and heavy rubber boot erosion. 
            </p>
            <p>
              The question became vital: <strong>Could we engineer temporary mountain shelters and gear that actively healed the surrounding wilderness, instead of just slowly degrading it?</strong>
            </p>
            <p>
              Six months later, Camp Green was established. Today, we exist at the intersection of heavy materials biochemistry and extreme weather safety, developing zero-waste shelter items that blend comfort, warmth, and absolute circularity.
            </p>
          </div>
        </section>

        {/* Architectural Pillars (Isometric layout list) */}
        <section className="bg-white rounded-3xl p-8 border border-[#efeee9] shadow-sm">
          <h3 className="font-sans font-bold text-xl text-[#1b1c19] tracking-tight mb-8">
            Our Three Green Architectural Pillars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#4A6741]/10 flex items-center justify-center text-[#4A6741]">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-lg">Twig Gasification</h4>
              <p className="font-sans text-sm text-[#434840] leading-relaxed">
                We are actively eliminating fossil-fuel canister dependence. Our patented micro-stoves draw dry pinecones, twigs, or local dry leaf debris to create high-thermal cooking vents.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#4A6741]/10 flex items-center justify-center text-[#4A6741]">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-lg">Mineral Stone Stitches</h4>
              <p className="font-sans text-sm text-[#434840] leading-relaxed">
                By harvesting fine limestone quarry residues, we manufacture waterproof field journals and clothing linings that utilize completely zero tree fibers, bleaching chemicals, or heavy polymers.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#4A6741]/10 flex items-center justify-center text-[#4A6741]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-lg">Circular Returns</h4>
              <p className="font-sans text-sm text-[#434840] leading-relaxed">
                Never discard Camp Green gear. We accept damaged, worn, or oxidized gear back to dismantle, compost, or re-weave into new outdoor gear, offering substantial vouchers in exchange.
              </p>
            </div>

          </div>
        </section>

        {/* Detailed Image and Quote Block */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
          <div className="rounded-2xl overflow-hidden shadow">
            <img 
              src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=800"
              alt="Close organic dome shelter set up responsibly in misty mountains"
              className="w-full h-64 object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-[#4A6741] pl-4 italic text-[#434840] font-sans text-base leading-relaxed">
              "We stayed in a Camp Green certified subalpine dome tent during our week-long survey of the Olympic Peninsula. No trace of condensation, exceptional heat retention, and we packed everything back without a single scrap of waste."
            </blockquote>
            <p className="font-sans font-bold text-[#1b1c19] text-sm">
              — Dr. Helen Vance, Cascade Wildlands Biologist
            </p>
          </div>
        </section>

        {/* Reforestation Campaign Numbers */}
        <section className="border-t border-[#efeee9] pt-12 space-y-6">
          <h3 className="font-sans font-bold text-2xl text-[#1b1c19] tracking-tight">
            Camp Green Conservation Ledger
          </h3>
          <p className="font-sans text-sm text-[#434840] leading-relaxed">
            Every cup, t-shirt, and backpack sold carries an encoded geography tag in the hem. This shows the precise coordinates of land where native Douglas Firs and Western Red Cedars have been planted using the proceeds. Our ledger is audited by non-profit forestry consortiums.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            <div className="bg-[#efeee9]/30 rounded-2xl p-4 border border-[#efeee9]">
              <span className="font-sans block text-sm text-[#434840] font-semibold">TREES PLANTED</span>
              <span className="font-sans block text-3xl font-black text-[#4A6741] mt-1">154,200+</span>
            </div>
            <div className="bg-[#efeee9]/30 rounded-2xl p-4 border border-[#efeee9]">
              <span className="font-sans block text-sm text-[#434840] font-semibold">ACRES RE-WILDED</span>
              <span className="font-sans block text-3xl font-black text-[#4A6741] mt-1">1,210+</span>
            </div>
            <div className="bg-[#efeee9]/30 rounded-2xl p-4 border border-[#efeee9]">
              <span className="font-sans block text-sm text-[#434840] font-semibold">CANISTERS CO2 PREVENTED</span>
              <span className="font-sans block text-3xl font-black text-[#4A6741] mt-1">42,000+</span>
            </div>
            <div className="bg-[#efeee9]/30 rounded-2xl p-4 border border-[#efeee9]">
              <span className="font-sans block text-sm text-[#434840] font-semibold">STORES CIRCULAR %</span>
              <span className="font-sans block text-3xl font-black text-[#4A6741] mt-1">100%</span>
            </div>
          </div>
        </section>

      </main>

      {/* Back to Home CTA Footer */}
      <footer className="border-t border-[#efeee9] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-sans font-bold text-lg text-[#1b1c19]">Ready to book or acquire gear?</h4>
          <p className="font-sans text-sm text-[#434840]">Let's change our relationship with nature together.</p>
        </div>
        <button
          onClick={onBack}
          className="px-8 py-3.5 rounded-full font-sans text-sm font-black text-white bg-[#4A6741] hover:bg-[#334f2b] transition-colors shadow-sm focus:outline-none cursor-pointer"
          id="about-details-bottom-return-btn"
        >
          Return to Hub Details
        </button>
      </footer>

    </article>
  );
}
