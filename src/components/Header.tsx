import React from 'react';
import { Package, MessageCircle, MapPin, Clock } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

export const Header: React.FC = () => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E6D8C5]/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#291D11] text-[#FAF7F2] text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[#D4BEA1]">
            <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
            Serving Noida & Greater Noida
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="inline-flex items-center gap-1 text-white/90">
            <Clock className="w-3.5 h-3.5 text-[#25D366]" />
            Doorstep Delivery Within 24 Hours
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-[#25D366] font-semibold">
            Free Delivery on Orders Above ₹999
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo & Location badge */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#291D11] text-[#FAF7F2] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Package className="w-5 h-5 text-[#D4BEA1]" />
          </div>
          <div>
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#291D11] block leading-none font-display">
              KARTONIQ
            </span>
            <span className="text-[11px] font-medium text-[#7F613D] tracking-wider uppercase block mt-0.5">
              Noida & Greater Noida
            </span>
          </div>
        </a>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <a
            id="header-whatsapp-btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span className="hidden md:inline">CONNECT ON WHATSAPP</span>
            <span className="md:hidden">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};
