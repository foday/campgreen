/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Compass, AlertCircle, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    category: 'Sponsorships',
    coordinates: 'Sauk River Forest Sanctuary',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [validationError, setValidationError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError('Please complete all requested fields.');
      return;
    }
    setValidationError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'Sponsorships',
      coordinates: 'Sauk River Forest Sanctuary',
      message: ''
    });
    setSubmitted(false);
  };

  const coordinatesDestinations = [
    { name: 'Sauk River Forest Sanctuary', desc: '48.1505° N, 121.4921° W (Washington, USA)' },
    { name: 'Olympic Coastal Reserve', desc: '47.9715° N, 124.3855° W (Washington, USA)' },
    { name: 'Klickitat Pine Basin', desc: '45.9221° N, 121.2114° W (Oregon border, USA)' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left animate-in fade-in duration-300" id="contact-camp-green">
      
      {/* Editorial Title */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-widest block mb-3">
          STATIONS // DISPATCH CENTER
        </span>
        <h1 className="font-sans font-black text-4xl sm:text-5xl text-[#1b1c19] tracking-tight leading-none mb-6">
          Establish Contact with <br />
          <span className="text-[#4A6741]">Our Backcountry Stations</span>.
        </h1>
        <p className="font-sans text-lg text-[#434840] leading-relaxed">
          Whether you are coordinates tracking a seedling pack, arranging fair circular returns of old gear, or proposing corporate ecological sponsorships, we are here. Select a forestry station below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Contact Info & Interactive Eco-Coordinates map display */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-[#efeee9]/40 border border-[#efeee9] rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-sans font-bold text-lg text-[#1b1c19] tracking-tight border-b border-[#efeee9]/60 pb-3">
              Station Headquarters
            </h3>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#4A6741]/10 rounded-lg text-[#4A6741] mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-sans font-bold text-sm text-[#1b1c19]">Station Cascade Range</h4>
                <p className="font-sans text-xs text-[#434840] mt-1 leading-relaxed">
                  121 Green Canopy Way, Sauk River Wilderness Outpost, WA 98235
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#4A6741]/10 rounded-lg text-[#4A6741] mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-sans font-bold text-sm text-[#1b1c19]">Dispatch Mailbox</h4>
                <p className="font-sans text-xs text-[#4A6741] font-bold mt-1 hover:underline">
                  dispatch@campgreen.org
                </p>
                <p className="font-sans text-[10px] text-[#434840]/60 mt-0.5">Average reply timeline: 8 hours</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-[#4a6741]/10 rounded-lg text-[#4a6741] mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-sans font-bold text-sm text-[#1b1c19]">Satellite Outpost Line</h4>
                <p className="font-sans text-xs text-[#434840] mt-1">
                  +1 (360) 555-0143
                </p>
                <p className="font-sans text-[10px] text-[#434840]/60 mt-0.5">Encryption secured via forest solar relays</p>
              </div>
            </div>
          </div>

          {/* Tacoma mountain locations visual representator */}
          <div className="bg-white border border-[#efeee9] rounded-x-3 rounded-2xl p-6 relative overflow-hidden shadow-xs">
            <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] font-bold text-[#4A6741] bg-[#4a6741]/10 px-2 py-0.5 rounded uppercase">
              <Compass className="w-3 h-3 animate-spin duration-1000" style={{ animationDuration: '24s' }} />
              <span>ACTIVE RADAR</span>
            </div>
            
            <h4 className="font-sans font-bold text-[#1b1c19] text-sm text-left mb-4">Eco-Reserve Forestry Outposts</h4>
            
            <div className="space-y-3">
              {coordinatesDestinations.map((dest, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl border transition-all text-left ${
                    formData.coordinates === dest.name 
                      ? 'bg-[#4A6741]/5 border-[#4A6741]/30' 
                      : 'border-[#efeee9] bg-[#faf9f4]/30'
                  }`}
                >
                  <p className="font-sans font-bold text-xs text-[#1b1c19]">{dest.name}</p>
                  <p className="font-mono text-[10px] text-[#434840]/80 mt-1">{dest.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Contact Form Component */}
        <div className="lg:col-span-7">
          
          {submitted ? (
            <div className="bg-white border border-[#4A6741]/20 rounded-3xl p-8 shadow-sm text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#4A6741]/15 rounded-full flex items-center justify-center text-[#4A6741] mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#1b1c19] tracking-tight">
                Satellite Transmission Completed
              </h3>
              <p className="font-sans text-sm text-[#434840] max-w-md mx-auto mt-3 leading-relaxed">
                Thank you for dispatching, <strong>{formData.name}</strong>. Your message categorized under <strong>{formData.category}</strong> has been encoded and beamed to <strong>{formData.coordinates}</strong> station block. We will analyze and reply within 8 hours.
              </p>

              <div className="mt-8 pt-6 border-t border-[#efeee9] flex items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full font-sans text-xs font-bold bg-[#4A6741] text-white hover:bg-[#334f2b] transition-all cursor-pointer"
                >
                  Send another dispatch
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#efeee9] rounded-3xl p-6 sm:p-8 shadow-sm text-left">
              <h3 className="font-sans font-bold text-lg text-[#1b1c19] mb-6">
                Backcountry Radio Form
              </h3>

              {validationError && (
                <div className="mb-6 p-4 rounded-xl bg-[#ba1a1a]/10 border border-[#ba1a1a]/30 flex items-center gap-3 text-xs font-semibold text-[#ba1a1a]">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              <div className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-[#434840] mb-2">
                    Explorer Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Helen Vance"
                    className="w-full px-4 py-3 rounded-xl border border-[#efeee9] bg-[#faf9f4]/40 focus:bg-white focus:outline-none focus:border-[#4A6741] transition-all text-sm font-sans text-[#1b1c19]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-[#434840] mb-2">
                    Secure Return Secure ID & Secure Mail Address
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. helen@wildlife.org"
                    className="w-full px-4 py-3 rounded-xl border border-[#efeee9] bg-[#faf9f4]/40 focus:bg-white focus:outline-none focus:border-[#4A6741] transition-all text-sm font-sans text-[#1b1c19]"
                  />
                </div>

                {/* Dropdowns Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="category-select" className="block text-xs font-bold uppercase tracking-wider text-[#434840] mb-2">
                      Topic Interest
                    </label>
                    <select
                      id="category-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#efeee9] bg-white focus:outline-none focus:border-[#4A6741] text-sm text-[#1B1C19]"
                    >
                      <option value="Sponsorships">Eco-Sponsorship Proposal</option>
                      <option value="Returns">Circular Apparel Returns</option>
                      <option value="Campsite">Wilderness Booking Inquiry</option>
                      <option value="Feedback">Material Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="coordinates-select" className="block text-xs font-bold uppercase tracking-wider text-[#434840] mb-2">
                      Aiming Outpost Coordinates
                    </label>
                    <select
                      id="coordinates-select"
                      value={formData.coordinates}
                      onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#efeee9] bg-white focus:outline-none focus:border-[#4A6741] text-sm text-[#1B1C19]"
                    >
                      {coordinatesDestinations.map((dest, i) => (
                        <option key={i} value={dest.name}>
                          {dest.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Messages info */}
                <div>
                  <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-[#434840] mb-2">
                    Encryption Dispatch Data (Message)
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about your inquiry, eco coordinate links, or return tracking numbers..."
                    className="w-full px-4 py-3 rounded-xl border border-[#efeee9] bg-[#faf9f4]/40 focus:bg-white focus:outline-none focus:border-[#4A6741] transition-all text-sm font-sans text-[#1b1c19]"
                  />
                </div>

              </div>

              {/* Submit Dispatch */}
              <button
                type="submit"
                className="w-full mt-6 bg-[#4A6741] hover:bg-[#334f2b] active:bg-[#324e2a] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-sans font-bold text-sm shadow hover:shadow-md transition-all cursor-pointer"
                id="contact-submit-btn"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Secure Satellite Dispatch</span>
              </button>

              <div className="mt-4 text-center font-mono text-[9px] text-[#434840]/60 uppercase tracking-widest block">
                ECC VERIFIED ENCRYPTION SECURE RELAY
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
