import React from 'react';
import { MessageCircle, Box, Shield, Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';
import { 
  getWhatsAppUrl, 
  SMALL_CARTON_MESSAGE, 
  MEDIUM_CARTON_MESSAGE, 
  BROWN_TAPE_MESSAGE, 
  BUBBLE_WRAP_MESSAGE 
} from '../utils/whatsapp';
import smallImg from '../assets/images/small_carton_box_1788167578783.jpg';
import mediumImg from '../assets/images/medium_carton_box_1788167592391.jpg';
import tapeImg from '../assets/images/brown_packaging_tape_1790923674713.jpg';
import bubbleImg from '../assets/images/bubble_wrap_roll_1790923686869.jpg';

export const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-2">
            Complete Moving Supply Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
            Moving Cartons & Packing Supplies
          </h2>
          <p className="text-base sm:text-lg text-[#61482D]">
            Order heavy-duty corrugated cartons, high-adhesion brown sealing tape, and shockproof bubble wrap with same-day order processing.
          </p>
        </div>

        {/* 1. MOVING CARTONS GRID */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
            <h3 className="text-lg font-bold text-[#291D11] uppercase tracking-wider text-xs">
              Corrugated Moving Boxes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            
            {/* SMALL CARTON CARD */}
            <div className="bg-white rounded-3xl border-2 border-[#E6D8C5] hover:border-[#D4BEA1] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                {/* Product Image */}
                <div className="relative h-56 sm:h-64 bg-[#F3ECE1] overflow-hidden border-b border-[#E6D8C5]">
                  <img
                    src={smallImg}
                    alt="Small 12x12x18 inch 3-ply moving carton box for books and kitchen items"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#291D11]/90 backdrop-blur-sm text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-[#D4BEA1]" />
                    <span>3 Ply Corrugated</span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                      Small Carton
                    </h4>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                        ₹69
                      </span>
                      <span className="text-xs text-[#7F613D] block font-medium">/ carton</span>
                    </div>
                  </div>

                  <div className="inline-block bg-[#FAF7F2] text-[#42301D] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E6D8C5] mb-4">
                    📐 12 × 12 × 18 inches
                  </div>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#7F613D] block mb-2.5">
                      Recommended for:
                    </span>
                    <ul className="space-y-1.5 text-sm text-[#42301D]">
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Books, study material & heavy papers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Kitchenware, dinner sets & glassware</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Heavy small items easy to carry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <a
                  id="ask-small-carton-cta"
                  href={getWhatsAppUrl(SMALL_CARTON_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#25D366] text-[#291D11] hover:text-white border-2 border-[#291D11] hover:border-[#25D366] text-sm sm:text-base font-bold py-3 px-4 rounded-xl transition-all active:scale-[0.99] text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>ASK ABOUT SMALL CARTONS</span>
                </a>
              </div>
            </div>

            {/* MEDIUM CARTON CARD */}
            <div className="bg-white rounded-3xl border-2 border-[#291D11] shadow-md relative flex flex-col justify-between">
              <div className="absolute -top-3.5 right-6 z-10 bg-[#291D11] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                <span>POPULAR CHOICE</span>
              </div>

              <div>
                {/* Product Image */}
                <div className="relative h-56 sm:h-64 bg-[#F3ECE1] overflow-hidden border-b border-[#E6D8C5]">
                  <img
                    src={mediumImg}
                    alt="Medium 24x18x18 inch 5-ply heavy duty moving carton box for clothes and household items"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#291D11]/90 backdrop-blur-sm text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>5 Ply Corrugated (Heavy Duty)</span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                      Medium Carton
                    </h4>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#25D366] font-display">
                        ₹149
                      </span>
                      <span className="text-xs text-[#7F613D] block font-medium">/ carton</span>
                    </div>
                  </div>

                  <div className="inline-block bg-[#FAF7F2] text-[#42301D] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E6D8C5] mb-4">
                    📐 24 × 18 × 18 inches
                  </div>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#7F613D] block mb-2.5">
                      Recommended for:
                    </span>
                    <ul className="space-y-1.5 text-sm text-[#42301D]">
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                        <span className="font-medium">Clothes, wardrobe & bed linen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                        <span className="font-medium">Small home appliances & electronics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                        <span className="font-medium">General room packing & pillows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <a
                  id="ask-medium-carton-cta"
                  href={getWhatsAppUrl(MEDIUM_CARTON_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
                  <span>ASK ABOUT MEDIUM CARTONS</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. PACKING ESSENTIALS: BROWN TAPE & BUBBLE WRAP */}
        <div className="mt-12 pt-10 border-t border-[#E6D8C5]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#291D11]"></span>
              <h3 className="text-lg font-bold text-[#291D11] uppercase tracking-wider text-xs">
                Essential Packing Materials (New Additions)
              </h3>
            </div>
            <a 
              href="#order-estimator" 
              className="text-xs font-bold text-[#25D366] hover:text-[#1EBE5D] hover:underline"
            >
              Estimate Order Total ↑
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            
            {/* BROWN PACKAGING TAPE */}
            <div className="bg-white rounded-3xl border-2 border-[#E6D8C5] hover:border-[#D4BEA1] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-64 bg-[#F3ECE1] overflow-hidden border-b border-[#E6D8C5]">
                  <img
                    src={tapeImg}
                    alt="Brown packaging tape 2 inch width 65m roll for corrugated cartons"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#291D11]/90 backdrop-blur-sm text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span>High-Adhesion BOPP</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#25D366] text-[#291D11] text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    NEW
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                      Brown Packaging Tape
                    </h4>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                        ₹69
                      </span>
                      <span className="text-xs text-[#7F613D] block font-medium">/ 65m roll</span>
                    </div>
                  </div>

                  <div className="inline-block bg-[#FAF7F2] text-[#42301D] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E6D8C5] mb-4">
                    📏 2 Inch Width × 65 Meters Length
                  </div>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#7F613D] block mb-2.5">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-sm text-[#42301D]">
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Commercial grade high shear adhesion</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Specially formulated for corrugated brown boxes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Resists moisture, splitting, and box popping</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <a
                  id="ask-brown-tape-cta"
                  href={getWhatsAppUrl(BROWN_TAPE_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#25D366] text-[#291D11] hover:text-white border-2 border-[#291D11] hover:border-[#25D366] text-sm sm:text-base font-bold py-3 px-4 rounded-xl transition-all active:scale-[0.99] text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>ORDER BROWN TAPE ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* BUBBLE WRAP */}
            <div className="bg-white rounded-3xl border-2 border-[#E6D8C5] hover:border-[#D4BEA1] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-64 bg-[#F3ECE1] overflow-hidden border-b border-[#E6D8C5]">
                  <img
                    src={bubbleImg}
                    alt="Protective bubble wrap roll for cushioning fragile crockery and electronics"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#291D11]/90 backdrop-blur-sm text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span>Air Cushion Protection</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#25D366] text-[#291D11] text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    NEW
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                      Protective Bubble Wrap
                    </h4>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                        ₹19
                      </span>
                      <span className="text-xs text-[#7F613D] block font-medium">/ meter</span>
                    </div>
                  </div>

                  <div className="inline-block bg-[#FAF7F2] text-[#42301D] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E6D8C5] mb-4">
                    🛡️ Shock-Absorbing Multi-Layer Air Cells
                  </div>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#7F613D] block mb-2.5">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-sm text-[#42301D]">
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Zero-breakage buffer for glass, chinaware & mirrors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Scratch protection for TV screens & high-gloss decor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                        <span>Custom cut per meter based on your move size</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <a
                  id="ask-bubble-wrap-cta"
                  href={getWhatsAppUrl(BUBBLE_WRAP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#25D366] text-[#291D11] hover:text-white border-2 border-[#291D11] hover:border-[#25D366] text-sm sm:text-base font-bold py-3 px-4 rounded-xl transition-all active:scale-[0.99] text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>ORDER BUBBLE WRAP ON WHATSAPP</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
