import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Sparkles, Phone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, CALL_PHONE_URL } from '../utils/whatsapp';

export const WhatsAppConversion: React.FC = () => {
  return (
    <section id="whatsapp-conversion" className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* High Conversion Banner Card */}
        <div className="bg-gradient-to-b from-[#291D11] to-[#1E150B] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden border border-[#42301D]">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#25D366]/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#A07E54]/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#25D366] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4" />
              <span>Fastest Way to Get Cartons & Supplies</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-display">
              Need Supplies for Your Move? <br />
              <span className="text-[#D4BEA1]">Let's Sort It Out.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E6D8C5] leading-relaxed mb-8 max-w-xl mx-auto">
              Tell us where you're shifting from in Noida/Greater Noida, when you're moving, and how many cartons, brown tapes, or bubble wrap meters you need. We'll help you figure out the rest.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col items-center gap-3">
              <a
                id="conversion-section-whatsapp-cta"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-base sm:text-xl font-extrabold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-xl shadow-[#25D366]/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] uppercase tracking-wide text-center"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white shrink-0" />
                <span>CONNECT ON WHATSAPP NOW</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-[#D4BEA1] tracking-wider pt-2">
                <span>Contact / WhatsApp:</span>
                <a 
                  href={CALL_PHONE_URL}
                  className="text-white hover:text-[#25D366] transition-colors underline decoration-dotted"
                >
                  {WHATSAPP_DISPLAY_PHONE}
                </a>
              </div>
            </div>

            {/* Reassurances */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-white/10 text-xs text-[#D4BEA1]">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>100% Genuine Supplies</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Noida & Greater Noida</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0"></span>
                <span>Replies within minutes</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
