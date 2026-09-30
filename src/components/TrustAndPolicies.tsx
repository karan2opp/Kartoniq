import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, AlertCircle, RefreshCw } from 'lucide-react';

export const TrustAndPolicies: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <section id="policies" className="py-12 sm:py-16 bg-white border-b border-[#E6D8C5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Damage Policy Header Card */}
        <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-3xl p-6 sm:p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#291D11] text-[#FAF7F2] flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6 text-[#25D366]" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-1">
                Quality Assurance
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
                Received a Damaged Carton? We've Got You.
              </h2>
              <p className="text-sm sm:text-base text-[#61482D] leading-relaxed mb-4">
                Please check the cartons for visible damage before accepting the delivery. If any cartons arrive damaged, <strong>KARTONIQ will replace the damaged cartons on the same day at no additional cost.</strong>
              </p>
              <p className="text-xs sm:text-sm text-[#7F613D] leading-relaxed">
                Once the order has been accepted and marked as delivered, returns and exchanges are not available. <strong className="text-[#291D11]">All orders are final.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Expandable FAQ Item for Return Policy */}
        <div className="border border-[#E6D8C5] rounded-2xl overflow-hidden bg-[#FAF7F2] transition-all">
          <button
            type="button"
            onClick={() => setFaqOpen(!faqOpen)}
            className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#291D11] hover:bg-[#F3ECE1]/50 transition-colors"
            aria-expanded={faqOpen}
          >
            <span className="flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-[#A07E54] shrink-0" />
              Can I return unused cartons later?
            </span>
            {faqOpen ? (
              <ChevronUp className="w-5 h-5 text-[#7F613D] shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#7F613D] shrink-0" />
            )}
          </button>

          {faqOpen && (
            <div className="px-5 pb-6 pt-1 sm:px-6 text-sm text-[#61482D] leading-relaxed border-t border-[#E6D8C5] bg-white">
              <p className="pt-3">
                <strong>No.</strong> Orders are final and cartons cannot be returned or exchanged after delivery has been accepted. Please choose your quantity carefully. If cartons arrive damaged, report the damage before accepting the delivery so we can replace them the same day.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
