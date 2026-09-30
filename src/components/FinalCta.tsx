import React from 'react';
import { MessageCircle, Clock, MapPin, Truck } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

export const FinalCta: React.FC = () => {
  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F2] to-[#E6D8C5]/50 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 bg-[#291D11] text-[#25D366] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <Truck className="w-4 h-4" />
          <span>Need cartons urgently for your move?</span>
        </div>

        {/* Emotional Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#291D11] tracking-tight leading-[1.15] mb-5 font-display">
          Your Move Is Already Complicated. <br />
          <span className="text-[#A07E54]">Getting Cartons Doesn't Have to Be.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#61482D] leading-relaxed max-w-xl mx-auto mb-4">
          Tell KARTONIQ what you need and we'll help you get your cartons sorted.
        </p>

        {/* Concise delivery reminder */}
        <p className="text-xs sm:text-sm font-semibold text-[#7F613D] max-w-lg mx-auto mb-8 bg-white/80 border border-[#E6D8C5] p-3 rounded-xl">
          Order today and get them delivered within 24 hours across Noida & Greater Noida. <br className="hidden sm:block" />
          <strong>₹99 delivery on orders up to ₹999. FREE delivery above ₹999.</strong>
        </p>

        {/* Big CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            id="final-whatsapp-primary-cta"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-base sm:text-xl font-extrabold px-9 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-xl shadow-[#25D366]/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] uppercase tracking-wide text-center"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white shrink-0" />
            <span>CONNECT ON WHATSAPP NOW</span>
          </a>

          {/* Location & Speed & Number */}
          <div className="flex flex-col items-center gap-1 text-xs sm:text-sm text-[#7F613D] pt-3">
            <span className="font-bold text-[#291D11] text-base">{WHATSAPP_DISPLAY_PHONE}</span>
            <span className="font-medium text-[#61482D]">Noida & Greater Noida • Delivery Within 24 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
