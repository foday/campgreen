/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { mockInitiatives } from '../data';
import { Calendar, Circle, CheckCircle2, TrendingUp, Globe2, Leaf, ArrowRight } from 'lucide-react';

interface InitiativesPageProps {
  onGoToStore: () => void;
}

export default function InitiativesPage({ onGoToStore }: InitiativesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left animate-in fade-in duration-300" id="green-initiatives-page">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-widest block mb-3">
          STATIONS // PHYSICAL RESTORATION
        </span>
        <h1 className="font-sans font-black text-4xl sm:text-5xl text-[#1b1c19] tracking-tight leading-none mb-6">
          Campaigns that Breathe <br />
          <span className="text-[#4A6741]">Life into Wilderness</span>.
        </h1>
        <p className="font-sans text-lg text-[#434840] leading-relaxed">
          We believe in direct physical action. We stand at the trail head with spade in hand—funding, organizing, and executing native flora restoration plans across fire-scarred and fragile ecosystems.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        <div className="p-6 rounded-2xl bg-white border border-[#efeee9] shadow-xs hover:shadow transition-all flex items-start gap-4">
          <div className="p-3 bg-[#4A6741]/10 rounded-xl text-[#4A6741]">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-sans font-extrabold text-[#1b1c19] text-sm uppercase tracking-wider">Subalpine Focus Area</h4>
            <p className="font-sans text-3xl font-black text-[#4A6741] mt-1">Cascades</p>
            <p className="font-sans text-xs text-[#434840] mt-1">Supporting severe alpine vegetation regeneration.</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#efeee9] shadow-xs hover:shadow transition-all flex items-start gap-4">
          <div className="p-3 bg-[#4A6741]/10 rounded-xl text-[#4A6741]">
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-sans font-extrabold text-[#1b1c19] text-sm uppercase tracking-wider">Circular Recovery Rate</h4>
            <p className="font-sans text-3xl font-black text-[#4A6741] mt-1">100% Loop</p>
            <p className="font-sans text-xs text-[#434840] mt-1">Zero raw materials wasted in active camper distributions.</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#efeee9] shadow-xs hover:shadow transition-all flex items-start gap-4">
          <div className="p-3 bg-[#4A6741]/10 rounded-xl text-[#4A6741]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-sans font-extrabold text-[#1b1c19] text-sm uppercase tracking-wider">Consolidated Seed Investment</h4>
            <p className="font-sans text-3xl font-black text-[#4A6741] mt-1">15% of Sales</p>
            <p className="font-sans text-xs text-[#434840] mt-1">All store transactions directly fund seedling seed purchases.</p>
          </div>
        </div>

      </div>

      {/* Interactive Loop list */}
      <div className="space-y-12 mb-20">
        <h2 className="font-sans font-black text-[#1b1c19] text-2xl tracking-tight text-center">
          Active Camp Green Campaigns & Timeline
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockInitiatives.map((item) => {
            const isCompleted = item.status === 'Completed';
            const isInProgress = item.status === 'In Progress';
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl border border-[#efeee9] overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
                id={`initiative-card-${item.id}`}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-[#1b1c19]/85 backdrop-blur-md rounded-full shadow border border-white/10 text-xs font-mono font-black uppercase text-white">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-[#afd0a1]" />
                    ) : isInProgress ? (
                      <Circle className="w-3.5 h-3.5 text-[#eee1cd] fill-[#eee1cd] animate-pulse" />
                    ) : (
                      <Circle className="w-3.5 h-3.5 text-white/50" />
                    )}
                    <span>{item.status}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#faf9f4] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#4A6741] rounded shadow">
                    {item.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-sans font-bold text-lg text-[#1b1c19]">{item.title}</h3>
                  <p className="font-sans text-sm text-[#434840]/90 leading-relaxed mt-3 flex-grow">{item.description}</p>
                  
                  <div className="mt-6 pt-4 border-t border-[#efeee9] bg-[#efeee9]/30 -mx-6 -mb-6 p-6">
                    <span className="font-mono text-[10px] uppercase font-black text-[#4A6741] block">RECORDED FIELD IMPACT</span>
                    <span className="font-sans text-sm font-bold text-[#1b1c19] block mt-1">{item.impactMetric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Bottom Banner */}
      <div className="bg-[#4A6741] text-[#faf9f4] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#eee1cd]/10 rounded-full filter blur-3xl" />
        <h3 className="font-sans font-black text-2xl sm:text-3xl tracking-tight leading-none mb-4">
          Want your camp purchase to fund a specific coordinates slot?
        </h3>
        <p className="font-sans text-white/80 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          All orders processed inside our sustainable gear and camping category carry coordinate codes registered under active botanical plant divisions.
        </p>

        <button
          onClick={onGoToStore}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#faf9f4] text-[#4A6741] font-sans text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span>Purchase & Seed Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
