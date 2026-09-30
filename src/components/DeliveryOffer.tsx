import React, { useState } from 'react';
import { Truck, MapPin, Zap, CheckCircle2, MessageCircle, Plus, Minus, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, getOrderWhatsAppUrl } from '../utils/whatsapp';

export const DeliveryOffer: React.FC = () => {
  // Live quick estimation calculator
  const [smallQty, setSmallQty] = useState<number>(10);
  const [mediumQty, setMediumQty] = useState<number>(5);

  const smallPrice = 69;
  const mediumPrice = 149;
  const itemsTotal = smallQty * smallPrice + mediumQty * mediumPrice;
  const qualifiesForFreeDelivery = itemsTotal >= 999;
  const deliveryFee = qualifiesForFreeDelivery ? 0 : (itemsTotal > 0 ? 99 : 0);
  const grandTotal = itemsTotal + deliveryFee;
  const amountNeededForFree = 999 - itemsTotal;

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
              Delivered within 24 hours
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
                Get your cartons delivered completely free to your doorstep within 24 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Delivery Examples comparison (Encouraging Free Delivery) */}
        <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-[#291D11] mb-4 text-center sm:text-left font-display">
            Delivery Examples:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Example 1 */}
            <div className="bg-white p-5 rounded-xl border border-[#E6D8C5]">
              <div className="text-xs font-bold text-[#7F613D] uppercase tracking-wider mb-1">
                Example 1
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

            {/* Example 2 (Smart upgrade) */}
            <div className="bg-white p-5 rounded-xl border-2 border-[#25D366]/60 relative">
              <div className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-1">
                Example 2 (Smarter Choice)
              </div>
              <div className="text-base font-extrabold text-[#291D11] mb-3">
                15 Small Cartons
              </div>
              <div className="space-y-1.5 text-sm text-[#42301D] border-t border-[#F3ECE1] pt-3">
                <div className="flex justify-between">
                  <span>15 × ₹69</span>
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
                💡 5 extra cartons instead of spending on delivery!
              </div>
            </div>

          </div>
        </div>

        {/* Live Quantity Estimator & 1-Click WhatsApp Order */}
        <div className="bg-gradient-to-br from-[#291D11] to-[#42301D] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#25D366] block mb-1">
              Instant Order Estimator
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Estimate Your Move & Order in 1-Click
            </h3>
            <p className="text-xs sm:text-sm text-[#D4BEA1] mt-1">
              Adjust carton quantities to see your estimated total and unlock free delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
            
            {/* Small selector */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-white">Small Carton</div>
                <div className="text-xs text-[#D4BEA1]">12×12×18" • ₹69 each</div>
              </div>
              <div className="flex items-center gap-3 bg-white/20 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setSmallQty(Math.max(0, smallQty - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors font-bold text-base"
                  aria-label="Decrease small cartons"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-7 text-center font-bold text-base text-white">{smallQty}</span>
                <button
                  type="button"
                  onClick={() => setSmallQty(smallQty + 1)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors font-bold text-base"
                  aria-label="Increase small cartons"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Medium selector */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-white">Medium Carton</div>
                <div className="text-xs text-[#D4BEA1]">24×18×18" (5-Ply) • ₹149 each</div>
              </div>
              <div className="flex items-center gap-3 bg-white/20 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setMediumQty(Math.max(0, mediumQty - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors font-bold text-base"
                  aria-label="Decrease medium cartons"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-7 text-center font-bold text-base text-white">{mediumQty}</span>
                <button
                  type="button"
                  onClick={() => setMediumQty(mediumQty + 1)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors font-bold text-base"
                  aria-label="Increase medium cartons"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Calculator summary & WhatsApp button */}
          <div className="max-w-2xl mx-auto bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[#D4BEA1]">
                Total Cartons: <span className="text-white font-bold">{smallQty + mediumQty}</span> | Delivery: <span className={qualifiesForFreeDelivery ? "text-[#25D366] font-bold" : "text-white"}>{qualifiesForFreeDelivery ? "FREE" : "₹99"}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                ₹{grandTotal}{' '}
                <span className="text-xs font-normal text-[#D4BEA1]">estimated</span>
              </div>
              {!qualifiesForFreeDelivery && itemsTotal > 0 && (
                <div className="text-[11px] text-[#25D366] font-medium mt-0.5">
                  Add ₹{amountNeededForFree} more to unlock FREE delivery!
                </div>
              )}
            </div>

            <a
              id="calculator-whatsapp-cta"
              href={getOrderWhatsAppUrl(smallQty, mediumQty, grandTotal, qualifiesForFreeDelivery)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.99] whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
              <span>SEND THIS ORDER ON WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
