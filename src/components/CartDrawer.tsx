/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldAlert, BadgeCheck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveFromCart: (productId: string, size?: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, cart, onRemoveFromCart, onClearCart, onCheckout }: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const carbonOffsetFactor = cart.reduce((total, item) => total + (item.product.ecoScore * item.quantity), 0) * 12.5;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-overlay">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf9f4] border-l border-[#efeee9] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Cart Header */}
          <div className="px-6 py-5 border-b border-[#efeee9] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#4A6741]" />
              <h2 className="font-sans font-bold text-lg text-[#1b1c19] tracking-tight">Your Sustainable Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-[#434840] hover:text-[#4A6741] hover:bg-[#4A6741]/5 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="p-4 bg-[#efeee9] rounded-full text-[#434840]/60">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#1b1c19] text-base">Your cart is complete empty</h4>
                  <p className="font-sans text-xs text-[#434840]/85 max-w-xs mt-1 leading-relaxed">
                    Add GOTS organic t-shirts, bamboo enamel cups, and stone dust field notebooks from the store to load catalog coordinate seedings.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#4A6741] hover:bg-[#334f2b] text-white text-xs font-bold rounded-full shadow-sm cursor-pointer"
                >
                  Return to shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                
                {cart.map((item, index) => (
                  <div 
                    key={`${item.product.id}-${item.selectedSize || 'default'}`}
                    className="flex gap-4 p-3 bg-white rounded-xl border border-[#efeee9] relative group hover:border-[#4A6741]/20 transition-all"
                  >
                    
                    {/* Tiny visual card thumbnail */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-[#efeee9] bg-white flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta entries */}
                    <div className="flex-grow text-left space-y-1">
                      <h4 className="font-sans font-bold text-xs text-[#1b1c19] leading-tight pr-6">
                        {item.product.name}
                      </h4>
                      
                      {item.selectedSize && item.selectedSize !== 'Default' && (
                        <p className="font-mono text-[9px] text-[#4A6741] font-bold">
                          SIZE: {item.selectedSize}
                        </p>
                      )}

                      <p className="font-sans text-xs text-[#434840]">
                        ${item.product.price.toFixed(2)} × {item.quantity}
                      </p>

                      <p className="font-mono text-[9px] text-[#434840]/60 uppercase tracking-wider">
                        PREVENT: {item.product.ecoScore * item.quantity} CO2 SCORES
                      </p>
                    </div>

                    {/* Delete Item button */}
                    <button
                      onClick={() => onRemoveFromCart(item.product.id, item.selectedSize)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                  </div>
                ))}

                {/* Clear Cart option */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-[#ba1a1a]/80 font-bold hover:underline cursor-pointer"
                  >
                    Reset and empty cart
                  </button>
                </div>

              </div>
            )}
          </div>

          {/* Cart Pricing Summary and Circular offset block */}
          {cart.length > 0 && (
            <div className="border-t border-[#efeee9] bg-[#efeee9]/30 p-6 space-y-4">
              
              {/* Green environmental pledge summary */}
              <div className="p-3.5 bg-[#4A6741]/10 border border-[#4A6741]/20 rounded-xl flex gap-3 text-left">
                <BadgeCheck className="w-5 h-5 text-[#324e2a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans block text-xs font-bold text-[#1b1c19]">Carbon Canopy Seeding Target</span>
                  <span className="font-sans block text-[10px] text-[#434840] leading-relaxed mt-0.5">
                    This selection offsets approximately <strong>{carbonOffsetFactor.toFixed(1)}kg</strong> of greenhouse carbon emissions directly inside Pacific state reserves.
                  </span>
                </div>
              </div>

              {/* Incomes stats */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#434840]/80">
                  <span>Carbon-Free Transit</span>
                  <span className="font-mono font-bold uppercase text-[#4A6741]">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-[#434840]/80 border-b border-[#efeee9] pb-2">
                  <span>Botanical Forestry Tax</span>
                  <span className="font-mono">Included</span>
                </div>
                <div className="flex justify-between text-[#1b1c19] text-base font-black pt-1">
                  <span>Aggregated Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#4A6741] hover:bg-[#334f2b] text-white py-4 rounded-xl font-sans text-xs font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Authorize Zero-Trace Purchase</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="font-mono text-[8px] text-[#434840]/60 uppercase tracking-widest text-center mt-2">
                FULLY REDISTRIBUTED TO FORESTRY COMMISSIONS
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
