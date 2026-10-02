import React, { useState } from 'react';
import { 
  Calculator, 
  MessageCircle, 
  Phone, 
  Plus, 
  Minus, 
  Truck, 
  Check, 
  Layers, 
  Box 
} from 'lucide-react';
import { getOrderWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, CALL_PHONE_URL } from '../utils/whatsapp';

export const OrderEstimator: React.FC = () => {
  const [smallQty, setSmallQty] = useState<number>(8);
  const [mediumQty, setMediumQty] = useState<number>(6);
  const [tapeQty, setTapeQty] = useState<number>(2);
  const [bubbleWrapMeters, setBubbleWrapMeters] = useState<number>(10);

  // Pricing constants
  const SMALL_PRICE = 69;
  const MEDIUM_PRICE = 149;
  const TAPE_PRICE = 69;
  const BUBBLE_WRAP_PRICE = 19;
  const FREE_DELIVERY_THRESHOLD = 999;

  // Totals
  const smallTotal = smallQty * SMALL_PRICE;
  const mediumTotal = mediumQty * MEDIUM_PRICE;
  const tapeTotal = tapeQty * TAPE_PRICE;
  const bubbleWrapTotal = bubbleWrapMeters * BUBBLE_WRAP_PRICE;

  const itemsTotal = smallTotal + mediumTotal + tapeTotal + bubbleWrapTotal;
  const qualifiesForFreeDelivery = itemsTotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = qualifiesForFreeDelivery ? 0 : (itemsTotal > 0 ? 99 : 0);
  const grandTotal = itemsTotal + deliveryFee;
  const amountNeededForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - itemsTotal);
  const progressPercent = Math.min(100, Math.round((itemsTotal / FREE_DELIVERY_THRESHOLD) * 100));

  const handleManualChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(Math.max(0, value));
  };

  return (
    <section 
      id="order-estimator" 
      className="py-10 sm:py-14 bg-gradient-to-b from-[#F3ECE1]/70 via-white to-[#FAF7F2] border-y border-[#E6D8C5] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#291D11] text-[#25D366] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Instant Order Estimator & Move Calculator</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#291D11] tracking-tight font-display">
            Plan Your Moving Order & Calculate Total in Seconds
          </h2>
          <p className="text-sm sm:text-base text-[#61482D] mt-2 max-w-2xl mx-auto">
            Select your cartons, heavy-duty brown sealing tapes, and bubble wrap. Orders above ₹999 unlock <strong>FREE Next Day Doorstep Delivery</strong> across Noida & Greater Noida.
          </p>
        </div>

        {/* Main Interactive Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Item Selectors (8 columns on lg) */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* 1. Small Carton */}
            <div className="bg-white border border-[#E6D8C5] hover:border-[#D4BEA1] rounded-2xl p-4 sm:p-5 shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E6D8C5] flex items-center justify-center shrink-0 text-[#7F613D]">
                  <Box className="w-6 h-6 text-[#A07E54]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-[#291D11]">Small Moving Carton</h3>
                    <span className="bg-[#FAF7F2] border border-[#E6D8C5] text-[#7F613D] text-[10px] font-extrabold px-2 py-0.5 rounded">
                      3-PLY
                    </span>
                  </div>
                  <p className="text-xs text-[#61482D] mt-0.5">
                    12 × 12 × 18 inches • Books, documents, kitchen crockery
                  </p>
                  <div className="text-sm font-extrabold text-[#291D11] mt-1">
                    ₹69 <span className="text-xs font-normal text-[#7F613D]">/ carton</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F3ECE1]">
                <div className="flex items-center gap-2.5 bg-[#FAF7F2] border border-[#E6D8C5] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => handleManualChange(setSmallQty, smallQty - 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Decrease small cartons"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center font-extrabold text-base text-[#291D11]">
                    {smallQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleManualChange(setSmallQty, smallQty + 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Increase small cartons"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-right sm:w-20">
                  <span className="text-sm font-extrabold text-[#291D11]">₹{smallTotal}</span>
                </div>
              </div>
            </div>

            {/* 2. Medium Carton */}
            <div className="bg-white border-2 border-[#D4BEA1] hover:border-[#25D366] rounded-2xl p-4 sm:p-5 shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative">
              <div className="absolute -top-2.5 right-4 bg-[#291D11] text-[#25D366] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Heavy Duty 5-Ply
              </div>
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E6D8C5] flex items-center justify-center shrink-0 text-[#291D11]">
                  <Layers className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-[#291D11]">Medium Moving Carton</h3>
                    <span className="bg-[#25D366]/15 text-[#1EBE5D] text-[10px] font-extrabold px-2 py-0.5 rounded">
                      5-PLY HEAVY DUTY
                    </span>
                  </div>
                  <p className="text-xs text-[#61482D] mt-0.5">
                    24 × 18 × 18 inches • Clothes, wardrobe, appliances & toys
                  </p>
                  <div className="text-sm font-extrabold text-[#291D11] mt-1">
                    ₹149 <span className="text-xs font-normal text-[#7F613D]">/ carton</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F3ECE1]">
                <div className="flex items-center gap-2.5 bg-[#FAF7F2] border border-[#E6D8C5] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => handleManualChange(setMediumQty, mediumQty - 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Decrease medium cartons"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center font-extrabold text-base text-[#291D11]">
                    {mediumQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleManualChange(setMediumQty, mediumQty + 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Increase medium cartons"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-right sm:w-20">
                  <span className="text-sm font-extrabold text-[#291D11]">₹{mediumTotal}</span>
                </div>
              </div>
            </div>

            {/* 3. Brown Packaging Tape (NEW ITEM) */}
            <div className="bg-white border border-[#E6D8C5] hover:border-[#D4BEA1] rounded-2xl p-4 sm:p-5 shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E6D8C5] flex items-center justify-center shrink-0">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-[#291D11]">Brown Packaging Tape</h3>
                    <span className="bg-[#E6D8C5] text-[#291D11] text-[10px] font-extrabold px-2 py-0.5 rounded">
                      NEW ITEM
                    </span>
                  </div>
                  <p className="text-xs text-[#61482D] mt-0.5">
                    <strong>2 Inch Width × 65m Length</strong> • Heavy carton sealing high-tack tape
                  </p>
                  <div className="text-sm font-extrabold text-[#291D11] mt-1">
                    ₹69 <span className="text-xs font-normal text-[#7F613D]">/ 65m roll</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F3ECE1]">
                <div className="flex items-center gap-2.5 bg-[#FAF7F2] border border-[#E6D8C5] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => handleManualChange(setTapeQty, tapeQty - 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Decrease brown tape rolls"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center font-extrabold text-base text-[#291D11]">
                    {tapeQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleManualChange(setTapeQty, tapeQty + 1)}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Increase brown tape rolls"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-right sm:w-20">
                  <span className="text-sm font-extrabold text-[#291D11]">₹{tapeTotal}</span>
                </div>
              </div>
            </div>

            {/* 4. Protective Bubble Wrap (NEW ITEM) */}
            <div className="bg-white border border-[#E6D8C5] hover:border-[#D4BEA1] rounded-2xl p-4 sm:p-5 shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E6D8C5] flex items-center justify-center shrink-0">
                  <span className="text-xl">🫧</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-[#291D11]">Protective Bubble Wrap</h3>
                    <span className="bg-[#E6D8C5] text-[#291D11] text-[10px] font-extrabold px-2 py-0.5 rounded">
                      NEW ITEM
                    </span>
                  </div>
                  <p className="text-xs text-[#61482D] mt-0.5">
                    <strong>Per Meter Pricing</strong> • Shockproof air-cushioning for fragile glassware & gadgets
                  </p>
                  <div className="text-sm font-extrabold text-[#291D11] mt-1">
                    ₹19 <span className="text-xs font-normal text-[#7F613D]">/ meter</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F3ECE1]">
                <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E6D8C5] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => handleManualChange(setBubbleWrapMeters, bubbleWrapMeters - 5)}
                    className="px-2 py-1 rounded bg-white hover:bg-[#E6D8C5] text-[#291D11] text-xs font-bold transition-colors shadow-xs"
                    title="-5 meters"
                  >
                    -5m
                  </button>
                  <button
                    type="button"
                    onClick={() => handleManualChange(setBubbleWrapMeters, bubbleWrapMeters - 1)}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Decrease bubble wrap"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-10 text-center font-extrabold text-sm sm:text-base text-[#291D11]">
                    {bubbleWrapMeters}m
                  </span>
                  <button
                    type="button"
                    onClick={() => handleManualChange(setBubbleWrapMeters, bubbleWrapMeters + 1)}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-[#E6D8C5] text-[#291D11] flex items-center justify-center font-bold transition-colors shadow-xs"
                    aria-label="Increase bubble wrap"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleManualChange(setBubbleWrapMeters, bubbleWrapMeters + 5)}
                    className="px-2 py-1 rounded bg-white hover:bg-[#E6D8C5] text-[#291D11] text-xs font-bold transition-colors shadow-xs"
                    title="+5 meters"
                  >
                    +5m
                  </button>
                </div>
                <div className="text-right sm:w-20">
                  <span className="text-sm font-extrabold text-[#291D11]">₹{bubbleWrapTotal}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Live Order Summary & WhatsApp Checkout (5 columns on lg) */}
          <div className="lg:col-span-5 bg-[#291D11] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#42301D] sticky top-20">
            
            {/* Free Delivery Meter */}
            <div className="mb-5 pb-5 border-b border-white/10">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-[#D4BEA1]">
                  <Truck className="w-4 h-4 text-[#25D366]" />
                  <span>Free Delivery Status (₹999+)</span>
                </span>
                <span className={qualifiesForFreeDelivery ? 'text-[#25D366] font-bold' : 'text-[#D4BEA1]'}>
                  {progressPercent}%
                </span>
              </div>

              {/* Progress bar track */}
              <div className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden p-0.5">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    qualifiesForFreeDelivery ? 'bg-[#25D366]' : 'bg-gradient-to-r from-[#D4BEA1] to-[#25D366]'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              {qualifiesForFreeDelivery ? (
                <div className="flex items-center gap-1.5 text-xs text-[#25D366] font-bold mt-2.5 bg-[#25D366]/10 px-3 py-1.5 rounded-lg">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>🎉 FREE Next Day Doorstep Delivery unlocked!</span>
                </div>
              ) : (
                <div className="text-[12px] text-[#D4BEA1] mt-2 font-medium">
                  Add <strong className="text-white">₹{amountNeededForFree}</strong> more to unlock <strong className="text-[#25D366]">FREE delivery</strong> (Save ₹99)!
                </div>
              )}
            </div>

            {/* Itemized Calculation */}
            <div className="space-y-2 text-xs sm:text-sm text-[#E6D8C5] mb-5">
              {smallQty > 0 && (
                <div className="flex justify-between">
                  <span>{smallQty} × Small Cartons (₹69)</span>
                  <span className="font-semibold text-white">₹{smallTotal}</span>
                </div>
              )}
              {mediumQty > 0 && (
                <div className="flex justify-between">
                  <span>{mediumQty} × Medium Cartons (₹149)</span>
                  <span className="font-semibold text-white">₹{mediumTotal}</span>
                </div>
              )}
              {tapeQty > 0 && (
                <div className="flex justify-between">
                  <span>{tapeQty} × Brown Tape 2"x65m (₹69)</span>
                  <span className="font-semibold text-white">₹{tapeTotal}</span>
                </div>
              )}
              {bubbleWrapMeters > 0 && (
                <div className="flex justify-between">
                  <span>{bubbleWrapMeters}m × Bubble Wrap (₹19/meter)</span>
                  <span className="font-semibold text-white">₹{bubbleWrapTotal}</span>
                </div>
              )}

              <div className="flex justify-between pt-2 border-t border-white/10 text-xs">
                <span>Items Subtotal:</span>
                <span className="text-white font-bold">₹{itemsTotal}</span>
              </div>

              <div className="flex justify-between text-xs">
                <span>Doorstep Delivery:</span>
                <span className={qualifiesForFreeDelivery ? "text-[#25D366] font-bold" : "text-white font-semibold"}>
                  {qualifiesForFreeDelivery ? "FREE" : "₹99"}
                </span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4BEA1] block font-semibold">
                  Estimated Total
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-display">
                  ₹{grandTotal}
                </div>
              </div>

              <div className="text-right text-[11px] text-[#D4BEA1]">
                <div>Next Day Delivery</div>
                <div className="text-white font-medium">Noida & Gr. Noida</div>
              </div>
            </div>

            {/* 1-Click WhatsApp CTA */}
            <a
              id="estimator-whatsapp-order-cta"
              href={getOrderWhatsAppUrl(smallQty, mediumQty, grandTotal, qualifiesForFreeDelivery, tapeQty, bubbleWrapMeters)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-[#25D366]/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] uppercase tracking-wide text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
              <span>SEND ORDER ON WHATSAPP</span>
            </a>

            {/* Direct Contact Phone & Call Option */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#D4BEA1]">
              <span className="font-medium">Need immediate advice or custom bulk?</span>
              <a 
                href={CALL_PHONE_URL}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#25D366] font-bold underline transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Call {WHATSAPP_DISPLAY_PHONE}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
