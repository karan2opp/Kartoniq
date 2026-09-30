import React from 'react';
import { MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

export const HelpChoose: React.FC = () => {
  return (
    <section id="help-choose" className="py-12 sm:py-16 bg-[#F3ECE1] border-b border-[#E6D8C5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="w-12 h-12 rounded-2xl bg-[#291D11] text-[#D4BEA1] flex items-center justify-center mx-auto mb-4 shadow-sm">
          <HelpCircle className="w-6 h-6 text-[#25D366]" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-4 font-display">
          Not Sure Which Size You Need?
        </h2>

        <p className="text-base sm:text-lg text-[#61482D] max-w-2xl mx-auto leading-relaxed mb-8">
          That's completely fine. Tell us what you're packing and roughly how much you have. We'll help you decide whether you need small, medium or a combination of both.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            id="help-choose-whatsapp-cta"
            href={getWhatsAppUrl("Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida. I'm not sure which carton sizes and quantities I need. Can you please help me figure it out?")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-base font-bold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
            <span>CONNECT ON WHATSAPP NOW</span>
          </a>
        </div>

        <p className="text-xs text-[#7F613D] mt-3 font-medium">
          Direct assistance on WhatsApp • {WHATSAPP_DISPLAY_PHONE}
        </p>

      </div>
    </section>
  );
};
