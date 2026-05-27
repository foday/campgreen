/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutDetailsPage from './components/AboutDetailsPage';
import GearStorePage from './components/GearStorePage';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import InitiativesPage from './components/InitiativesPage';
import ContactPage from './components/ContactPage';
import SupportPopup from './components/SupportPopup';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem, ActiveView, FooterModalType } from './types';
import { Leaf, BadgeCheck, CheckCircle2, ShieldEllipsis, X, TicketPercent } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = React.useState<ActiveView>('home');
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState<FooterModalType>(null);
  const [checkoutSuccess, setCheckoutSuccess] = React.useState(false);
  const [purchasedItems, setPurchasedItems] = React.useState<CartItem[]>([]);

  // Smooth hash routing listener
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['about-details', 'gear-store', 'about-page', 'products-page', 'initiatives-page', 'contact-page'].includes(hash)) {
        setActiveView(hash as ActiveView);
      } else {
        setActiveView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash whenever view changes
  const handleSetView = (view: ActiveView) => {
    setActiveView(view);
    window.location.hash = view === 'home' ? '' : view;
  };

  const handleAddToCart = (product: Product, quantity: number, size?: string) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      }

      return [...prevCart, { product, quantity, selectedSize: size }];
    });
  };

  const handleRemoveFromCart = (productId: string, size?: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.product.id === productId && item.selectedSize === size))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setPurchasedItems([...cart]);
    setCart([]);
    setIsCartOpen(false);
    setCheckoutSuccess(true);
  };

  const handleCloseCheckoutSuccess = () => {
    setCheckoutSuccess(false);
    setPurchasedItems([]);
    handleSetView('home');
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Render appropriate view based on activeView state
  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <HeroSection 
            onDiscoverMore={() => handleSetView('about-details')} 
            setActiveView={handleSetView}
          />
        );
      case 'about-details':
        return <AboutDetailsPage onBack={() => handleSetView('home')} />;
      case 'gear-store':
        return (
          <GearStorePage 
            onAddToCart={handleAddToCart}
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={handleClearCart}
            triggerCheckoutSuccess={handleCheckout}
          />
        );
      case 'about-page':
        return (
          <AboutPage 
            onBackToHome={() => handleSetView('home')} 
            onGoToStore={() => handleSetView('gear-store')}
          />
        );
      case 'products-page':
        return <ProductsPage onGoToStore={() => handleSetView('gear-store')} />;
      case 'initiatives-page':
        return <InitiativesPage onGoToStore={() => handleSetView('gear-store')} />;
      case 'contact-page':
        return <ContactPage />;
      default:
        return (
          <HeroSection 
            onDiscoverMore={() => handleSetView('about-details')} 
            setActiveView={handleSetView}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f4] text-[#1b1c19] flex flex-col font-sans" id="app-root-layout">
      
      {/* Navbar Container */}
      <Navbar 
        activeView={activeView} 
        setActiveView={handleSetView} 
        cartCount={cartCount} 
        triggerCartOpen={() => setIsCartOpen(true)}
      />

      {/* Main Dynamic Workspace viewport */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Persistent Global Footer bar */}
      <Footer 
        onOpenModal={(type) => setActiveModal(type)} 
        setActiveView={handleSetView}
      />

      {/* Footer support Dialog overlay popup windows */}
      {activeModal && (
        <SupportPopup 
          type={activeModal} 
          onClose={() => setActiveModal(null)} 
        />
      )}

      {/* Shopping Drawer widget */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Authorized Congratulation Modal popscreen */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="checkout-success-backdrop">
          
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCloseCheckoutSuccess} />

          <div className="relative bg-[#faf9f4] border border-[#efeee9] rounded-2.5xl max-w-lg w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            
            <button 
              onClick={handleCloseCheckoutSuccess}
              className="absolute top-4 right-4 p-2 rounded-full text-[#434840] hover:text-[#4A6741] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              
              <div className="w-16 h-16 bg-[#4A6741]/20 rounded-full flex items-center justify-center text-[#4A6741] mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-sans font-black text-2xl text-[#1b1c19] tracking-tight">
                Zero-Trace Checkout Approved!
              </h3>
              
              <p className="font-sans text-xs text-[#434840]/90 max-w-sm mx-auto leading-relaxed">
                Thank you for purchasing authentic **Camp Green** gear. Your materials have been registered with the forest stewardship loop.
              </p>

              {/* Seeding certificate license frame display */}
              <div className="bg-white rounded-2xl p-5 border border-[#efeee9] text-left space-y-3 shadow-inner">
                <div className="flex items-center gap-2 border-b border-[#efeee9] pb-3 text-[#4A6741]">
                  <Leaf className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase font-black tracking-widest">
                    BOTANICAL SEED COORDINATES LICENSE
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-medium">STATION OUTPOST:</span>
                    <span className="font-sans font-bold text-[#1b1c19]">Cascade Range Branch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-medium">ALLOCATED SPECIES:</span>
                    <span className="font-sans font-bold text-[#1b1c19]">Douglas Fir & Hemlock</span>
                  </div>
                  <div className="flex justify-between border-t border-[#efeee9]/60 pt-2 mt-2">
                    <span className="text-gray-400 font-medium font-bold">CIRCULAR TICKET ID:</span>
                    <span className="font-mono text-[10px] font-bold text-[#4A6741]">CG-HMR-8418-23569</span>
                  </div>
                </div>

                <div className="pt-2 px-3 py-2 bg-[#4a6741]/5 rounded-xl border border-[#4a6741]/20 flex items-center gap-2 text-[10px] text-[#324e2a] font-semibold leading-relaxed">
                  <TicketPercent className="w-4 h-4 text-[#4a6741] flex-shrink-0" />
                  <span>A physical coordinate tag is being sewn inside your items hem!</span>
                </div>
              </div>

              <button
                onClick={handleCloseCheckoutSuccess}
                className="w-full bg-[#4A6741] hover:bg-[#334f2b] text-white py-3.5 rounded-xl font-sans text-xs font-bold shadow-sm cursor-pointer mt-4"
              >
                Conclude Outpost Session
              </button>

              <div className="font-mono text-[8px] text-[#434840]/60 uppercase tracking-widest text-center">
                CERTIFIED BIOLOGICALLY ACCOUNTABLE BY COMPASS GROUP
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
