import React from 'react';
import { CreditCard, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PaymentAndDelivery: React.FC = () => {
  return (
    <section id="payment-delivery" className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E6D8C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Payment Section */}
          <div className="bg-white border border-[#E6D8C5] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A07E54] flex items-center justify-center mb-5 border border-[#E6D8C5]">
                <CreditCard className="w-6 h-6 text-[#291D11]" />
              </div>
              
              <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-1">
                Transparent Process
              </span>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
                Simple & Secure Ordering
              </h3>

              <p className="text-sm sm:text-base text-[#61482D] leading-relaxed mb-4">
                Once your carton quantity and delivery details are confirmed, payment is made <strong>100% in advance through WhatsApp</strong>. Your order is then scheduled for immediate delivery dispatch.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-xl p-3.5 border border-[#E6D8C5] flex items-center gap-2.5 text-xs text-[#42301D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>UPI, QR & Instant Bank Transfer supported on WhatsApp</span>
            </div>
          </div>

          {/* Delivery Promise Section */}
          <div className="bg-white border border-[#E6D8C5] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A07E54] flex items-center justify-center mb-5 border border-[#E6D8C5]">
                <Clock className="w-6 h-6 text-[#291D11]" />
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-1">
                Speed & Reliability
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
                Delivered Within 24 Hours
              </h3>

              <p className="text-sm sm:text-base text-[#61482D] leading-relaxed mb-4">
                Currently serving <strong>Noida & Greater Noida</strong>. Once your order and payment are confirmed, KARTONIQ arranges delivery directly to your provided address within the next 24 hours.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-xl p-3.5 border border-[#E6D8C5] flex items-center gap-2.5 text-xs text-[#42301D] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Doorstep arrival handled smoothly so you can pack without delay</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
