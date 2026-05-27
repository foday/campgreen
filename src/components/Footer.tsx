/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Leaf, Instagram, Facebook, Twitter, Linkedin, Heart, HelpCircle, Shield, Globe } from 'lucide-react';
import { FooterModalType, ActiveView } from '../types';

interface FooterProps {
  onOpenModal: (type: FooterModalType) => void;
  setActiveView: (view: ActiveView) => void;
}

export default function Footer({ onOpenModal, setActiveView }: FooterProps) {
  const handleNav = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#efeee9]/60 border-t border-[#efeee9] pt-16 pb-12 mt-auto" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footprint / Mission Action Cards (Row directly above links, mirroring the design image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#efeee9]">
          
          {/* Card 1: Our Mission */}
          <button 
            onClick={() => onOpenModal('mission')}
            className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf9f4] hover:bg-[#faf9f4]/80 text-left border border-[#efeee9]/30 hover:border-[#4A6741]/20 transition-all group cursor-pointer shadow-sm hover:shadow"
            id="footer-card-mission"
          >
            <div className="p-3 rounded-xl bg-[#4A6741]/10 flex items-center justify-center text-[#4A6741] group-hover:bg-[#4A6741] group-hover:text-[#faf9f4] transition-all">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-base">Our Mission</h4>
              <p className="font-sans text-xs text-[#434840] mt-1.5 leading-relaxed">
                Empowering responsible outdoor travel with plant-based, circular camping materials.
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#4A6741] uppercase tracking-wide mt-3 group-hover:underline">
                Read Declaration →
              </span>
            </div>
          </button>

          {/* Card 2: Sustainable Gear */}
          <button 
            onClick={() => handleNav('gear-store')}
            className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf9f4] hover:bg-[#faf9f4]/80 text-left border border-[#efeee9]/30 hover:border-[#4A6741]/20 transition-all group cursor-pointer shadow-sm hover:shadow"
            id="footer-card-gear"
          >
            <div className="p-3 rounded-xl bg-[#4A6741]/10 flex items-center justify-center text-[#4A6741] group-hover:bg-[#4A6741] group-hover:text-[#faf9f4] transition-all">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-base">Sustainable Gear</h4>
              <p className="font-sans text-xs text-[#434840] mt-1.5 leading-relaxed">
                Premium zero-waste water flasks, earth bags, organic apparel, and carbonless equipment.
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#4A6741] uppercase tracking-wide mt-3 group-hover:underline">
                Explore Store →
              </span>
            </div>
          </button>

          {/* Card 3: Conservation Projects */}
          <button 
            onClick={() => onOpenModal('conservation')}
            className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf9f4] hover:bg-[#faf9f4]/80 text-left border border-[#efeee9]/30 hover:border-[#4A6741]/20 transition-all group cursor-pointer shadow-sm hover:shadow"
            id="footer-card-conservation"
          >
            <div className="p-3 rounded-xl bg-[#4A6741]/10 flex items-center justify-center text-[#4A6741] group-hover:bg-[#4A6741] group-hover:text-[#faf9f4] transition-all">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-[#1b1c19] text-base">Conservation Projects</h4>
              <p className="font-sans text-xs text-[#434840] mt-1.5 leading-relaxed">
                Actively funding tree replanting and trail cleanups in vulnerable subalpine basins.
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#4A6741] uppercase tracking-wide mt-3 group-hover:underline">
                Trace Restoration →
              </span>
            </div>
          </button>

        </div>

        {/* Dynamic Footer Layout matches design perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 items-start">
          
          {/* Brand Block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#4A6741] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-sans font-black text-xl tracking-tight text-[#1b1c19]">
                Camp Green
              </span>
            </div>
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#4A6741]">
              Nature Brand
            </p>
            <p className="font-sans text-sm text-[#434840]/80 pr-6 leading-relaxed">
              We engineer beautiful outdoor products built strictly on green material science, low-impact camp installations, and deep, physical restoration of global forest parks.
            </p>
          </div>

          {/* Links Block */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Comp Link */}
            <div>
              <h5 className="font-sans font-bold text-sm text-[#1b1c19] uppercase tracking-wider mb-4 text-left">
                Company
              </h5>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => onOpenModal('company')}
                    className="font-sans text-sm text-[#434840] hover:text-[#4A6741] cursor-pointer text-left focus:outline-none"
                    id="link-company-about"
                  >
                    Our Company
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenModal('mission')}
                    className="font-sans text-sm text-[#434840] hover:text-[#4A6741] cursor-pointer text-left focus:outline-none"
                    id="link-company-mission"
                  >
                    Our Mission
                  </button>
                </li>
              </ul>
            </div>

            {/* Support Link */}
            <div>
              <h5 className="font-sans font-bold text-sm text-[#1b1c19] uppercase tracking-wider mb-4 text-left">
                Support
              </h5>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNav('contact-page')}
                    className="font-sans text-sm text-[#434840] hover:text-[#4A6741] cursor-pointer text-left focus:outline-none"
                    id="link-support-contact"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenModal('support')}
                    className="font-sans text-sm text-[#434840] hover:text-[#4A6741] cursor-pointer text-left focus:outline-none"
                    id="link-support-help"
                  >
                    Helpdesk Desk
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Link */}
            <div>
              <h5 className="font-sans font-bold text-sm text-[#1b1c19] uppercase tracking-wider mb-4 text-left">
                Legal
              </h5>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => onOpenModal('legal')}
                    className="font-sans text-sm text-[#434840] hover:text-[#4A6741] cursor-pointer text-left focus:outline-none"
                    id="link-legal-policy"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenModal('legal')}
                    className="font-sans text-sm text-[#434840] hover:text-[#4A6741] cursor-pointer text-left focus:outline-none"
                    id="link-legal-gov"
                  >
                    Circular Audit
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Link */}
            <div>
              <h5 className="font-sans font-bold text-sm text-[#1b1c19] uppercase tracking-wider mb-4 text-left">
                Social
              </h5>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="p-2 rounded-full bg-[#faf9f4] hover:bg-[#4A6741]/10 text-[#434840] hover:text-[#4A6741] transition-all border border-[#efeee9]"
                  aria-label="Camp Green Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="p-2 rounded-full bg-[#faf9f4] hover:bg-[#4A6741]/10 text-[#434840] hover:text-[#4A6741] transition-all border border-[#efeee9]"
                  aria-label="Camp Green Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="p-2 rounded-full bg-[#faf9f4] hover:bg-[#4A6741]/10 text-[#434840] hover:text-[#4A6741] transition-all border border-[#efeee9]"
                  aria-label="Camp Green Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="p-2 rounded-full bg-[#faf9f4] hover:bg-[#4A6741]/10 text-[#434840] hover:text-[#4A6741] transition-all border border-[#efeee9]"
                  aria-label="Camp Green LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Inner system signature */}
        <div className="mt-16 pt-8 border-t border-[#efeee9] flex flex-col sm:flex-row items-center justify-between text-xs text-[#434840]/60 font-mono">
          <p>© {new Date().getFullYear()} Camp Green Inc. All rights reserved. Zero-Trace Carbon offsetting registered globally.</p>
          <p className="mt-2 sm:mt-0">ESTABLISHED IN PACIFIC NORTHWEST WILDLANDS</p>
        </div>

      </div>
    </footer>
  );
}
