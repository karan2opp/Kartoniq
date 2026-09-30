import React from 'react';
import { MessageCircle, Check, Sparkles, Box, Shield } from 'lucide-react';
import { getWhatsAppUrl, SMALL_CARTON_MESSAGE, MEDIUM_CARTON_MESSAGE } from '../utils/whatsapp';
import smallImg from '../assets/images/small_carton_box_1788167578783.jpg';
import mediumImg from '../assets/images/medium_carton_box_1788167592391.jpg';

export const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-2">
            Straightforward Options
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
            Two Sizes. Simple Choice.
          </h2>
          <p className="text-base sm:text-lg text-[#61482D]">
            Choose the carton that fits what you're packing. Not sure? Just ask us on WhatsApp.
          </p>
        </div>

        {/* Two Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* SMALL CARTON CARD */}
          <div className="bg-white rounded-3xl border-2 border-[#E6D8C5] hover:border-[#D4BEA1] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
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
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                    Small
                  </h3>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                      ₹69
                    </span>
                    <span className="text-xs text-[#7F613D] block font-medium">/ carton</span>
                  </div>
                </div>

                <div className="inline-block bg-[#FAF7F2] text-[#42301D] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E6D8C5] mb-5">
                  📐 12 × 12 × 18 inches
                </div>

                {/* Recommended list */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#7F613D] block mb-3">
                    Recommended for:
                  </span>
                  <ul className="space-y-2 text-sm text-[#42301D]">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                      <span>Books & study material</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                      <span>Documents & files</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                      <span>Kitchen items & tableware</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                      <span>Smaller household belongings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E6D8C5] text-[#291D11] flex items-center justify-center text-xs shrink-0">✓</span>
                      <span>Heavier small items</span>
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
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#FAF7F2] hover:bg-[#25D366] text-[#291D11] hover:text-white border-2 border-[#291D11] hover:border-[#25D366] text-sm sm:text-base font-bold py-3.5 px-4 rounded-xl transition-all active:scale-[0.99] text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>ASK ABOUT SMALL CARTONS</span>
              </a>
            </div>
          </div>

          {/* MEDIUM CARTON CARD */}
          <div className="bg-white rounded-3xl border-2 border-[#291D11] shadow-lg relative flex flex-col justify-between">
            
            {/* POPULAR CHOICE BADGE */}
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
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] font-display">
                      Medium
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#25D366] font-display">
                      ₹149
                    </span>
                    <span className="text-xs text-[#7F613D] block font-medium">/ carton</span>
                  </div>
                </div>

                <div className="inline-block bg-[#FAF7F2] text-[#42301D] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E6D8C5] mb-5">
                  📐 24 × 18 × 18 inches
                </div>

                {/* Recommended list */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#7F613D] block mb-3">
                    Recommended for:
                  </span>
                  <ul className="space-y-2 text-sm text-[#42301D]">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                      <span className="font-medium">Clothes & wardrobe items</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                      <span className="font-medium">Household items & appliances</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                      <span className="font-medium">Larger belongings & pillows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                      <span className="font-medium">General packing & room boxes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#1EBE5D] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                      <span className="font-medium">Everyday moving requirements</span>
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
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white shrink-0" />
                <span>ASK ABOUT MEDIUM CARTONS</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
