import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, CALL_PHONE_URL } from '../utils/whatsapp';

export const StickyBottomCta: React.FC = () => {
  return (
    <>
      {/* Mobile Sticky Bottom Bar (Visible on mobile & tablet) */}
      <aside
        id="mobile-sticky-whatsapp-bar"
        aria-label="Quick contact"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E6D8C5] p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]"
      >
        <div className="max-w-md mx-auto flex items-center gap-2">
          {/* Quick Call Button */}
          <a
            id="mobile-sticky-call-btn"
            href={CALL_PHONE_URL}
            className="inline-flex items-center justify-center gap-1.5 bg-[#291D11] hover:bg-[#42301D] text-white text-xs font-bold py-3.5 px-3 rounded-xl shadow-xs active:scale-95 transition-all shrink-0"
            aria-label={`Call ${WHATSAPP_DISPLAY_PHONE}`}
          >
            <Phone className="w-4 h-4 text-[#25D366]" />
            <span className="hidden xs:inline">Call</span>
          </a>

          {/* Primary WhatsApp Button */}
          <a
            id="mobile-sticky-btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-extrabold py-3.5 px-3 rounded-xl shadow-md active:scale-[0.98] transition-all uppercase tracking-wide truncate"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
            <span className="truncate">CONNECT ON WHATSAPP</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating WhatsApp Button (Visible on desktop md+) */}
      <aside
        id="desktop-floating-whatsapp-btn"
        aria-label="Floating WhatsApp contact"
        className="hidden md:block fixed bottom-6 right-6 z-50 group"
      >
        <div className="flex flex-col items-end gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-5 rounded-full shadow-xl shadow-[#25D366]/35 hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
            <span className="text-sm uppercase tracking-wide">CONNECT ON WHATSAPP</span>
          </a>
          <a
            href={CALL_PHONE_URL}
            className="text-[11px] font-bold text-[#42301D] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E6D8C5] shadow-xs hover:text-[#25D366] transition-colors"
          >
            Contact: {WHATSAPP_DISPLAY_PHONE}
          </a>
        </div>
      </aside>
    </>
  );
};
