/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActiveView } from '../types';
import { Leaf, ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  cartCount: number;
  triggerCartOpen: () => void;
}

export default function Navbar({ activeView, setActiveView, cartCount, triggerCartOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; view: ActiveView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about-page' },
    { label: 'Products', view: 'products-page' },
    { label: 'Initiatives', view: 'initiatives-page' },
    { label: 'Contact', view: 'contact-page' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f4]/95 backdrop-blur-md border-b border-[#efeee9] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
            id="logo-button"
            aria-label="Camp Green Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4A6741]/10 flex items-center justify-center border border-[#4A6741]/20 transition-all duration-300 group-hover:bg-[#4A6741]/20 group-hover:scale-105">
              <Leaf className="w-6 h-6 text-[#4A6741] transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <div>
              <span className="font-sans font-bold text-xl tracking-tight text-[#1b1c19] block leading-none">
                Camp Green
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#4A6741] font-bold block mt-0.5">
                EST. 2023
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-4 py-2 font-sans font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#4A6741] bg-[#4A6741]/5' 
                      : 'text-[#434840] hover:text-[#4A6741] hover:bg-[#4A6741]/5'
                  }`}
                  id={`nav-${item.view}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Eco Gear Store CTA */}
            <button
              onClick={() => handleNavClick('gear-store')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeView === 'gear-store'
                  ? 'bg-[#334f2b] text-white shadow-md'
                  : 'bg-[#4A6741] text-white hover:bg-[#334f2b] shadow-sm hover:shadow-md hover:-translate-y-0.5'
              }`}
              id="nav-gear-store"
            >
              <span>Sustainable Gear Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={triggerCartOpen}
              className="relative p-2.5 rounded-full text-[#434840] hover:text-[#4A6741] hover:bg-[#4A6741]/5 border border-[#efeee9] transition-all duration-200 cursor-pointer"
              id="cart-trigger-button"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Quick Cart for Mobile */}
            <button
              onClick={triggerCartOpen}
              className="relative p-2 rounded-full text-[#434840] hover:text-[#4A6741] border border-[#efeee9] transition-all duration-200"
              aria-label="View shopping cart mobile"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#434840] hover:bg-[#4A6741]/5 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#efeee9] bg-[#faf9f4] shadow-inner transition-all duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {navItems.map((item) => {
              const isActive = activeView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-[#4A6741] bg-[#4A6741]/10'
                      : 'text-[#434840] hover:text-[#4A6741] hover:bg-[#4A6741]/5'
                  }`}
                  id={`mobile-nav-${item.view}`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNavClick('gear-store')}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#4A6741] text-white font-semibold text-sm hover:bg-[#334f2b] transition-all shadow-sm"
                id="mobile-nav-store"
              >
                <span>Sustainable Gear Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
