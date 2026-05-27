/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Shield, Users, HeartHandshake, Eye, BookOpen, Heart } from 'lucide-react';
import { FooterModalType } from '../types';
import { footerModalContent } from '../data';

interface SupportPopupProps {
  type: FooterModalType;
  onClose: () => void;
}

export default function SupportPopup({ type, onClose }: SupportPopupProps) {
  if (!type) return null;

  const data = footerModalContent[type];
  if (!data) return null;

  const getIcon = () => {
    switch (type) {
      case 'mission':
        return <Heart className="w-8 h-8 text-[#4A6741]" />;
      case 'conservation':
        return <BookOpen className="w-8 h-8 text-[#4A6741]" />;
      case 'company':
        return <Users className="w-8 h-8 text-[#4A6741]" />;
      case 'support':
        return <HeartHandshake className="w-8 h-8 text-[#4A6741]" />;
      case 'legal':
        return <Shield className="w-8 h-8 text-[#4A6741]" />;
      default:
        return <Eye className="w-8 h-8 text-[#4A6741]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="footer-modal-backdrop">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div 
        className="relative bg-[#faf9f4] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#efeee9] animate-in fade-in zoom-in-95 duration-200"
        id="footer-modal-container"
      >
        {/* Decorative Top Accent */}
        <div className="h-2 bg-[#4A6741]" />

        {/* Modal Header */}
        <div className="p-6 pb-2 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-[#4A6741]/10 flex items-center justify-center">
              {getIcon()}
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl text-[#1b1c19] tracking-tight text-left">
                {data.title}
              </h3>
              <p className="font-sans text-xs font-semibold text-[#4A6741] uppercase tracking-wider text-left mt-0.5">
                {data.subtitle}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#434840] hover:text-[#4A6741] hover:bg-[#4A6741]/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
            id="close-modal-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 pt-2">
          <div className="mt-2 text-sm leading-relaxed text-[#434840] text-left">
            <p className="whitespace-pre-line font-sans font-medium text-base text-[#1b1c19]/80 leading-7">
              {data.content}
            </p>
          </div>

          <div className="mt-8 border-t border-[#efeee9] pt-4 flex justify-between items-center text-xs font-mono text-[#434840]/60">
            <span>CAMP GREEN CLY-MEMBER-SEC</span>
            <span>VERIFIED ZERO TRACE</span>
          </div>
        </div>

        {/* Modal Footer Button */}
        <div className="bg-[#efeee9]/40 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full font-sans text-xs font-bold text-[#faf9f4] bg-[#426038] hover:bg-[#334f2b] transition-colors focus:outline-none cursor-pointer"
            id="modal-dismiss-button"
          >
            Conclude & Return
          </button>
        </div>
      </div>
    </div>
  );
}
