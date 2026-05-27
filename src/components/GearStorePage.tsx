/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Product, CartItem } from '../types';
import { mockProducts } from '../data';
import { ShoppingBag, Star, ShieldCheck, Heart, Filter, Grid, RefreshCw, X, ShoppingCart, Info, Check, Trash } from 'lucide-react';

interface GearStorePageProps {
  onAddToCart: (product: Product, quantity: number, size?: string) => void;
  cart: CartItem[];
  onRemoveFromCart: (productId: string, size?: string) => void;
  onClearCart: () => void;
  triggerCheckoutSuccess: () => void;
}

export default function GearStorePage({ onAddToCart, cart, onRemoveFromCart, onClearCart, triggerCheckoutSuccess }: GearStorePageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string>('M'); // Default for apparel
  const [quantity, setQuantity] = React.useState<number>(1);
  const [wishlist, setWishlist] = React.useState<string[]>([]);
  const [successToast, setSuccessToast] = React.useState<string>('');

  const categories = ['All', 'Drinkware', 'Bags & Gear', 'Apparel', 'Camp Equipment'];

  // Filter products based on category and search query
  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.material.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
      showNotification('Added to Wilderness Wishlist');
    }
  };

  const showNotification = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => {
      setSuccessToast('');
    }, 2500);
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSelectedSize(product.category === 'Apparel' ? 'M' : 'Default');
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    onAddToCart(selectedProduct, quantity, selectedProduct.category === 'Apparel' ? selectedSize : undefined);
    showNotification(`Added ${quantity} x ${selectedProduct.name} to Cart`);
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left animate-in fade-in duration-300" id="gear-store-catalog">
      
      {/* Search/Filter Banner */}
      <div className="border-b border-[#efeee9] pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs font-bold text-[#4A6741] uppercase tracking-widest block mb-2">
            CONSUMER OUTLET // CAMP GREEN BRAND
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-4xl text-[#1b1c19] tracking-tight mb-2">
            Sustainable Outdoor Gear Store
          </h1>
          <p className="font-sans text-sm text-[#434840]">
            Certified fair-trade organic canvas, non-toxic wood combustors, water bottles and campsite bags.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold font-sans rounded-full transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#4A6741] text-white border-[#4A6741]'
                  : 'bg-white text-[#434840]/90 border-[#efeee9] hover:border-[#4A6741]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Search Field and Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Quick Search */}
          <div className="bg-[#efeee9]/30 rounded-2xl p-5 border border-[#efeee9]/80">
            <h4 className="font-sans font-bold text-sm text-[#1b1c19] mb-3">Refine Catalog</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Search cups, bags, shirts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-[#efeee9] bg-white focus:outline-none focus:border-[#4A6741]"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#ba1a1a] font-bold mt-2 hover:underline flex items-center gap-1 cursor-pointer"
              >
                Clear query
              </button>
            )}
          </div>

          {/* Environmental Purity Promise Panel */}
          <div className="bg-white border border-[#efeee9] rounded-2xl p-5 shadow-xs">
            <h5 className="font-sans font-extrabold text-[#1B1C19] text-xs uppercase tracking-wider mb-3">Green Circular Standard</h5>
            <div className="space-y-4">
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-[#4A6741] flex-shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-[#434840] leading-relaxed">
                  <strong>Stamped Brand:</strong> All goods carry coordinate records tracing real Washington tree plantings.
                </p>
              </div>
              <div className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-[#4A6741] flex-shrink-0 mt-0.5 animate-spin duration-1000" style={{ animationDuration: '8s' }} />
                <p className="font-sans text-xs text-[#434840] leading-relaxed">
                  <strong>Takeback Loop:</strong> Old gear accepts free pre-paid return shipping in return for circular discount coupons.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right main Store list */}
        <div className="lg:col-span-3">
          
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-[#efeee9] rounded-3xl p-12 text-center">
              <p className="font-sans text-[#434840] text-sm">No items match your active filter coordinates.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs text-[#4A6741] font-bold mt-3 hover:underline cursor-pointer"
              >
                Reset catalog filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="store-product-grid">
              {filteredProducts.map((product) => {
                const isWish = wishlist.includes(product.id);
                return (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-2xl border border-[#efeee9] hover:border-[#4A6741]/20 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col h-full relative"
                    id={`product-card-${product.id}`}
                  >
                    
                    {/* Top image section */}
                    <div className="h-52 overflow-hidden relative cursor-pointer" onClick={() => handleOpenProduct(product)}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* EcoScore floating indicator */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#4A6741]/90 backdrop-blur-md text-white text-[10px] font-mono font-black tracking-widest rounded-full shadow border border-white/10 uppercase">
                        ECO: {product.ecoScore}/10
                      </span>

                      {/* Category Pill */}
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#faf9f4] text-[#434840] text-[9px] font-mono font-bold uppercase rounded border border-[#efeee9] shadow">
                        {product.category}
                      </span>
                    </div>

                    {/* Meta Section */}
                    <div className="p-5 flex flex-col flex-grow text-left">
                      
                      {/* Title and Rating Row */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 
                          onClick={() => handleOpenProduct(product)}
                          className="font-sans font-bold text-sm text-[#1b1c19] hover:text-[#4A6741] transition-colors cursor-pointer leading-tight flex-grow"
                        >
                          {product.name}
                        </h3>
                        <button 
                          onClick={() => handleToggleWishlist(product.id)}
                          className="p-1 rounded text-[#434840] hover:text-[#ba1a1a] hover:bg-[#ba1a1a]/5 transition-colors cursor-pointer"
                          aria-label="Add to wishlist"
                        >
                          <Heart className={`w-4 h-4 ${isWish ? 'fill-[#ba1a1a] text-[#ba1a1a]' : ''}`} />
                        </button>
                      </div>

                      {/* Specifications snippet */}
                      <p className="font-sans text-[11px] text-[#434840]/80 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <p className="font-mono text-[10px] text-[#4A6741] font-semibold mt-3">
                        MAT: {product.material}
                      </p>

                      <div className="mt-auto pt-4 border-t border-[#efeee9] flex items-center justify-between">
                        <div>
                          <span className="font-sans font-black text-base text-[#1b1c19]">
                            ${product.price ? product.price.toFixed(2) : '0.00'}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => handleOpenProduct(product)}
                          className="px-3.5 py-1.5 bg-[#4A6741] hover:bg-[#334f2b] text-white text-[11px] font-bold rounded-lg shadow-sm group-hover:shadow transition-colors cursor-pointer"
                        >
                          Acquire Specs
                        </button>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>

      {/* Floating Success Notifications Toast */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1b1c19] text-[#faf9f4] border border-[#efeee9]/10 px-6 py-4 rounded-xl flex items-center gap-3 shadow-2xl animate-in font-sans text-xs font-bold slide-in-from-bottom-3 duration-200">
          <Check className="w-5 h-5 text-[#4A6741] font-bold" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Detailed Product Specification & Quick Cart Add Drawer (Modal Overlay) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="spec-product-details-backdrop">
          
          {/* Backdrop screen split */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />

          <div className="relative bg-[#faf9f4] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#efeee9] animate-in zoom-in-95 duration-200 p-6 sm:p-8">
            
            {/* Top Close Section */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#434840] hover:text-[#4A6741] hover:bg-[#4A6741]/5 transition-colors cursor-pointer"
              aria-label="Close specific dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mt-4">
              
              {/* Image and quick bio */}
              <div>
                <div className="h-64 rounded-2xl overflow-hidden shadow-inner border border-[#efeee9] mb-4">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Score panel */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#4A6741]/10 border border-[#4A6741]/20">
                  <div className="text-left">
                    <span className="font-sans font-bold text-xs text-[#1B1C19] block">Purity Scorecard</span>
                    <span className="font-mono text-[10px] text-[#4A6741]">{selectedProduct.material}</span>
                  </div>
                  <span className="font-sans font-black text-lg text-[#324e2a]">
                    {selectedProduct.ecoScore}/10
                  </span>
                </div>
              </div>

              {/* Specific Options, sizes & Quantity adder */}
              <div className="text-left space-y-4">
                
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#4A6741] bg-[#4a6741]/15 px-2.5 py-1 rounded">
                  {selectedProduct.category}
                </span>

                <h3 className="font-sans font-black text-xl text-[#1b1c19] tracking-tight mt-2">
                  {selectedProduct.name}
                </h3>

                <p className="font-sans text-[#1b1c19] text-base font-black">
                  ${selectedProduct.price.toFixed(2)}
                </p>

                <p className="font-sans text-xs text-[#434840] leading-relaxed border-b border-[#efeee9] pb-4">
                  {selectedProduct.description}
                </p>

                {/* Sizing selection if client is apparel */}
                {selectedProduct.category === 'Apparel' && (
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#434840] block mb-2">
                      Apparel Size Coordination
                    </span>
                    <div className="flex gap-2">
                      {['S', 'M', 'L', 'XL'].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`w-9 h-9 rounded-lg font-sans text-xs font-bold border transition-all cursor-pointer ${
                            selectedSize === sz
                              ? 'bg-[#4A6741] text-white border-[#4A6741]'
                              : 'bg-white text-[#434840] border-[#efeee9] hover:border-[#4A6741]/40'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Unique bullet features */}
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#434840] block mb-2">
                    Backcountry Attributes
                  </span>
                  <ul className="space-y-1.5">
                    {selectedProduct.features.map((ft, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-sans text-[#434840]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741]" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add Actions */}
                <div className="pt-4 border-t border-[#efeee9] flex items-center justify-between gap-4">
                  
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#efeee9] rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 font-sans hover:bg-[#efeee9] text-[#434840] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold font-sans text-[#1b1c19]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 font-sans hover:bg-[#efeee9] text-[#434840] cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-grow bg-[#4A6741] hover:bg-[#334f2b] text-white py-3 rounded-xl font-sans text-xs font-bold shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Incorporate to Cart</span>
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
