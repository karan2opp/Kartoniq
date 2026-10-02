import React, { useState } from 'react';
import { Package, MessageCircle, X, Phone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, CALL_PHONE_URL } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer id="main-footer" className="bg-[#291D11] text-[#FAF7F2] py-12 pb-24 md:pb-12 border-t border-[#42301D]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <Package className="w-5 h-5 text-[#25D366]" />
              <span className="text-2xl font-black tracking-tight font-display text-white">
                KARTONIQ
              </span>
            </div>
            <p className="text-xs text-[#D4BEA1]">
              Smart Packaging. Reliable Supply.
            </p>
            <p className="text-xs text-[#A07E54] mt-1 font-medium">
              Operated by TEAM KARTONIQ
            </p>
          </div>

          {/* Location & Contact */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-1.5">
            <p className="text-sm font-semibold text-white">
              Serving Noida & Greater Noida
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#25D366] hover:text-[#1EBE5D] font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <span className="text-white/30">•</span>
              <a
                href={CALL_PHONE_URL}
                className="inline-flex items-center gap-1.5 text-sm text-[#D4BEA1] hover:text-white font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                Contact: {WHATSAPP_DISPLAY_PHONE}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom minimal copyright & legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D4BEA1]/70">
          <p>© {new Date().getFullYear()} KARTONIQ. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => setModalContent('privacy')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setModalContent('terms')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Terms & Service
            </button>
          </div>
        </div>

      </div>

      {/* Clean Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] text-[#291D11] rounded-2xl max-w-lg w-full p-6 relative max-h-[85vh] overflow-y-auto shadow-2xl border border-[#E6D8C5]">
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E6D8C5] hover:bg-[#D4BEA1] flex items-center justify-center text-[#291D11] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {modalContent === 'privacy' ? (
              <div>
                <h3 className="text-xl font-bold mb-3 font-display text-[#291D11]">
                  Privacy Policy
                </h3>
                <div className="text-xs sm:text-sm text-[#61482D] space-y-2.5 leading-relaxed">
                  <p>
                    KARTONIQ respects your privacy. When you connect with us over WhatsApp, we only collect information necessary to fulfill your carton order and arrange local delivery in Noida and Greater Noida.
                  </p>
                  <p>
                    Your contact information, sector address, and relocation details are kept private and are never sold or shared with external third-party advertisers.
                  </p>
                  <p>
                    For any privacy inquiries, reach out directly to us on WhatsApp: {WHATSAPP_DISPLAY_PHONE}.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-3 font-display text-[#291D11]">
                  Terms of Service & Orders
                </h3>
                <div className="text-xs sm:text-sm text-[#61482D] space-y-2.5 leading-relaxed">
                  <p>
                    <strong>Delivery Area:</strong> KARTONIQ supplies cartons across Noida & Greater Noida. Delivery is scheduled next day after order and advance payment confirmation.
                  </p>
                  <p>
                    <strong>Payment:</strong> Orders require 100% advance payment via WhatsApp (UPI/Instant Transfer) prior to delivery dispatch.
                  </p>
                  <p>
                    <strong>Inspection & Damage Policy:</strong> Please inspect all cartons upon arrival before accepting delivery. If any carton is visibly damaged, KARTONIQ will replace it on the same day at no extra cost.
                  </p>
                  <p>
                    <strong>No-Returns:</strong> Once accepted and marked as delivered, cartons cannot be returned or exchanged. All accepted sales are final.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
