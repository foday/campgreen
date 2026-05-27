/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Leaf, Calendar, Award, CheckCircle, ChevronRight } from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onGoToStore: () => void;
}

export default function AboutPage({ onBackToHome, onGoToStore }: AboutPageProps) {
  const leadership = [
    {
      name: 'Ranger Dave Mercer',
      role: 'Co-Founder & Field Director',
      bio: 'Spent 18 years guarding subalpine reserves in Olympic National Park. Directs extreme conditions quality testing.',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Clara Thorne',
      role: 'Co-Founder & Materials Chemist',
      bio: 'Former cellulose scientist at MIT. Engineered our zero-leak plant-starch composites and biological polymers.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Leo Valenzuela',
      role: 'Head of Eco-Architecture',
      bio: 'Specialist in off-grid modular shelters. Designed our biodegradable dome shelters with zero site soil excavations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
    }
  ];

  const sustainabilityStats = [
    { label: 'GOTS Organic Certified Cotton', value: '100%' },
    { label: 'Fair Trade Sourced Fiber', value: '100%' },
    { label: 'Wilderness Trees Planted To Date', value: '154,200+' },
    { label: 'Circular Material Re-harvesting %', value: '100%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left animate-in fade-in duration-300" id="about-us-page">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-widest block mb-3">
          WHO WE ARE // BRAND DECLARATION
        </span>
        <h1 className="font-sans font-black text-4xl sm:text-5xl text-[#1b1c19] tracking-tight leading-none mb-6">
          Forming a Canopy of <span className="text-[#4A6741]">Eco-Stewardship</span>.
        </h1>
        <p className="font-sans text-lg text-[#434840] leading-relaxed">
          Camp Green was born from frustration. After years observing beautiful trails piling up with non-recyclable metal fuel cans and toxic plastic gear, we decided to engineer gear that restores nature as you travel.
        </p>
      </div>

      {/* Grid: Mission and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="space-y-6">
          <h2 className="font-sans font-bold text-2xl text-[#1b1c19] tracking-tight">
            Our Primary Pledge: Leave Absolute Zero Footprints
          </h2>
          <p className="font-sans text-base text-[#434840] leading-relaxed">
            Every product bearing the **Camp Green** logo is constructed under direct cyclic material specifications. This means we design for disassembly. From steel insulated flasks with organic bamboo stoppers to raw hemp caps, we ensure raw material elements return cleanly to the soil, or remain in continuous industrial use.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#4A6741] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-[#1b1c19] text-sm">Certified Soil Friendly</h4>
                <p className="font-sans text-xs text-[#434840]/95 leading-relaxed">Everything we spawn will degrade organically in localized municipal composting systems without leaving chemicals.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#4A6741] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-[#1b1c19] text-sm">Funding Physical Canopy Reforestations</h4>
                <p className="font-sans text-xs text-[#434840]/95 leading-relaxed">We directly acquire endangered hemlock seed plantations and fund scientific wildfire recovery planting teams.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-[#efeee9] p-2 bg-[#efeee9]/30">
          <img 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
            alt="Warm soft morning sunshine filtering through lush green tall forest pine trees"
            className="rounded-2xl w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Stats Board */}
      <div className="bg-[#efeee9]/40 border border-[#efeee9] rounded-3xl p-8 mb-20">
        <h3 className="font-sans font-black text-center text-lg text-[#1b1c19] uppercase tracking-wider mb-8">
          The Circular Scoreboard
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sustainabilityStats.map((stat, i) => (
            <div key={i} className="text-center p-4 bg-white rounded-2xl border border-[#efeee9]/60 shadow-xs">
              <p className="font-sans font-bold text-3xl text-[#4A6741]">{stat.value}</p>
              <p className="font-sans text-xs text-[#434840]/80 font-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-wider block">CONSERVATION DIRECTORS</span>
          <h2 className="font-sans font-bold text-3xl text-[#1b1c19] tracking-tight mt-1">Our Backcountry Trailblazers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((member, i) => (
            <div key={i} className="bg-white rounded-3xl border border-[#efeee9] overflow-hidden shadow-sm hover:shadow transition-all group p-5">
              <div className="aspect-square rounded-2xl overflow-hidden mb-5">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-base text-left">{member.name}</h4>
              <p className="font-sans text-xs text-[#4A6741] font-bold uppercase tracking-wider text-left mt-0.5">{member.role}</p>
              <p className="font-sans text-sm text-[#434840]/80 mt-3 leading-relaxed text-left">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Grid */}
      <div className="bg-[#4a6741] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
        <h3 className="font-sans font-black text-2xl sm:text-3xl tracking-tight leading-none mb-4">
          Support Our Global Forestry Re-Wilding Today
        </h3>
        <p className="font-sans text-white/80 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          Every single coin spent in our sustainable outdoor gear catalogue funds physical canopy planting. Acquire cups, canvas bags, and biological shirts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGoToStore}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-sans text-sm font-black bg-white text-[#4a6741] hover:bg-[#faf9f4] transition-colors shadow focus:outline-none cursor-pointer"
          >
            Shop the Sustainable Catalogs
          </button>
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-sans text-sm font-black border border-white/30 text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          >
            Explore Interactive Features
          </button>
        </div>
      </div>

    </div>
  );
}
