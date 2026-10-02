import React from 'react';
import { Package, MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, CALL_PHONE_URL } from '../utils/whatsapp';

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
            Next Day Doorstep Delivery
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
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#291D11] text-[#FAF7F2] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
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

        {/* Contact Number & Action buttons */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href={CALL_PHONE_URL}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#291D11] hover:text-[#25D366] transition-colors py-1.5 px-2.5 rounded-lg border border-[#E6D8C5] bg-white/70"
            title="Call KARTONIQ"
          >
            <Phone className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{WHATSAPP_DISPLAY_PHONE}</span>
          </a>

          <a
            id="header-estimator-btn"
            href="#order-estimator"
            className="hidden lg:inline-flex items-center gap-1 text-xs font-bold text-[#61482D] hover:text-[#291D11] px-3 py-2 rounded-full border border-[#D4BEA1] hover:bg-[#E6D8C5]/50 transition-all"
          >
            <span>Calculator</span>
          </a>

          <a
            id="header-whatsapp-btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span className="hidden md:inline">CONNECT ON WHATSAPP</span>
            <span className="md:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
