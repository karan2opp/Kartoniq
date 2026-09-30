import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

export const StickyBottomCta: React.FC = () => {
  return (
    <>
      {/* Mobile Sticky Bottom Bar (Visible on mobile & tablet) */}
      <aside
        id="mobile-sticky-whatsapp-bar"
        aria-label="Quick contact"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E6D8C5] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      >
        <div className="max-w-md mx-auto flex items-center gap-2">
          <a
            id="mobile-sticky-btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-extrabold py-3.5 px-4 rounded-xl shadow-md active:scale-[0.98] transition-all uppercase tracking-wide"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
            <span>CONNECT ON WHATSAPP NOW</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating WhatsApp Button (Visible on desktop md+) */}
      <aside
        id="desktop-floating-whatsapp-btn"
        aria-label="Floating WhatsApp contact"
        className="hidden md:block fixed bottom-6 right-6 z-50 group"
      >
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-5 rounded-full shadow-xl shadow-[#25D366]/35 hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
          <span className="text-sm uppercase tracking-wide">CONNECT ON WHATSAPP</span>
        </a>
      </aside>
    </>
  );
};
