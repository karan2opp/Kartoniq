import React from 'react';
import { Truck, MapPin, Zap, CheckCircle2, MessageCircle, Calculator, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';

export const DeliveryOffer: React.FC = () => {
  return (
    <section id="delivery-offer" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E6D8C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E6D8C5]/70 text-[#42301D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Truck className="w-4 h-4 text-[#25D366]" />
            <span>Transparent Delivery Pricing</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
            Get Your Cartons Delivered to Your Door.
          </h2>

          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-[#61482D] flex-wrap mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#25D366]" />
              Noida & Greater Noida
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-[#25D366]" />
              Delivered Next Day
            </span>
          </div>
        </div>

        {/* Clear Offer Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          
          {/* Card 1: Up to 999 */}
          <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase font-bold text-[#7F613D] tracking-wider mb-1">
                Standard Orders
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#291D11] mb-2 font-display">
                Orders up to ₹999
              </div>
              <div className="text-3xl font-extrabold text-[#7F613D] mb-3">
                ₹99 <span className="text-sm font-medium text-[#61482D]">delivery fee</span>
              </div>
              <p className="text-sm text-[#61482D] leading-relaxed">
                Flat, transparent delivery charge across all sectors in Noida & Greater Noida.
              </p>
            </div>
          </div>

          {/* Card 2: Above 999 (Highlighted) */}
          <div className="bg-[#291D11] text-white border-2 border-[#25D366] rounded-2xl p-6 relative flex flex-col justify-between shadow-md">
            <div className="absolute -top-3 right-6 bg-[#25D366] text-[#291D11] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              BEST VALUE
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-[#D4BEA1] tracking-wider mb-1">
                Unlocked Offer
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-display">
                Orders Above ₹999
              </div>
              <div className="text-3xl font-extrabold text-[#25D366] mb-3">
                FREE DELIVERY
              </div>
              <p className="text-sm text-[#E6D8C5] leading-relaxed">
                Get your cartons, brown tapes, and bubble wrap delivered completely free to your doorstep next day.
              </p>
            </div>
          </div>

        </div>

        {/* Delivery Examples comparison (Encouraging Free Delivery) */}
        <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#291D11] mb-4 text-center sm:text-left font-display">
            Delivery Examples:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Example 1 */}
            <div className="bg-white p-5 rounded-xl border border-[#E6D8C5]">
              <div className="text-xs font-bold text-[#7F613D] uppercase tracking-wider mb-1">
                Example 1 (Standard)
              </div>
              <div className="text-base font-extrabold text-[#291D11] mb-3">
                10 Small Cartons
              </div>
              <div className="space-y-1.5 text-sm text-[#42301D] border-t border-[#F3ECE1] pt-3">
                <div className="flex justify-between">
                  <span>10 × ₹69</span>
                  <span className="font-semibold">₹690</span>
                </div>
                <div className="flex justify-between text-[#7F613D]">
                  <span>Delivery fee</span>
                  <span>₹99</span>
                </div>
                <div className="flex justify-between font-bold text-[#291D11] pt-2 border-t border-[#F3ECE1]">
                  <span>Total</span>
                  <span className="text-base font-extrabold">₹789</span>
                </div>
              </div>
            </div>

            {/* Example 2 (Smart upgrade with tape & boxes) */}
            <div className="bg-white p-5 rounded-xl border-2 border-[#25D366]/60 relative">
              <div className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-1">
                Example 2 (Smarter Choice)
              </div>
              <div className="text-base font-extrabold text-[#291D11] mb-3">
                12 Small Cartons + 3 Brown Tapes
              </div>
              <div className="space-y-1.5 text-sm text-[#42301D] border-t border-[#F3ECE1] pt-3">
                <div className="flex justify-between">
                  <span>Cartons + Tapes</span>
                  <span className="font-semibold">₹1,035</span>
                </div>
                <div className="flex justify-between text-[#25D366] font-semibold">
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between font-bold text-[#291D11] pt-2 border-t border-[#F3ECE1]">
                  <span>Total</span>
                  <span className="text-base font-extrabold text-[#25D366]">₹1,035</span>
                </div>
              </div>
              <div className="text-[11px] text-[#7F613D] mt-2 font-medium bg-[#FAF7F2] p-1.5 rounded text-center">
                💡 Free delivery unlocked with extra boxes and sealing tape instead of paying delivery charges!
              </div>
            </div>

          </div>
        </div>

        {/* Quick jump to Top Estimator & WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#291D11] text-white p-5 sm:p-6 rounded-2xl">
          <div>
            <div className="font-bold text-base sm:text-lg">Want to calculate your exact moving supplies total?</div>
            <div className="text-xs sm:text-sm text-[#D4BEA1]">Use the live Instant Order Estimator at the top of the page.</div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#order-estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border border-white/20 transition-all whitespace-nowrap"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Go to Estimator ↑</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
