import React from 'react';
import { Home, Clock, Tag, MapPin, ShieldCheck, Users } from 'lucide-react';

export const WhyKartoniq: React.FC = () => {
  return (
    <section id="why-kartoniq" className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E6D8C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-2">
            The Consumer Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
            Why KARTONIQ?
          </h2>
          <p className="text-sm sm:text-base text-[#61482D]">
            Purpose-built convenience for people relocating in Noida & Greater Noida.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          {/* Benefit 1 */}
          <div className="bg-white border border-[#E6D8C5] rounded-2xl p-6 hover:border-[#D4BEA1] transition-all flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#A07E54] flex items-center justify-center mb-4">
              <Home className="w-6 h-6 text-[#291D11]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#291D11] mb-2 font-display">
              Delivered to Your Door
            </h3>
            <p className="text-xs sm:text-sm text-[#61482D] leading-relaxed">
              No need to spend your day searching for cartons across different shops.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white border border-[#E6D8C5] rounded-2xl p-6 hover:border-[#D4BEA1] transition-all flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#A07E54] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#291D11]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#291D11] mb-2 font-display">
              Next Day Delivery
            </h3>
            <p className="text-xs sm:text-sm text-[#61482D] leading-relaxed">
              Get your cartons when you need them for your move without delay.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white border border-[#E6D8C5] rounded-2xl p-6 hover:border-[#D4BEA1] transition-all flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#A07E54] flex items-center justify-center mb-4">
              <Tag className="w-6 h-6 text-[#291D11]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#291D11] mb-2 font-display">
              Simple Pricing
            </h3>
            <p className="text-xs sm:text-sm text-[#61482D] leading-relaxed">
              Transparent, straightforward pricing: Small ₹69. Medium ₹149.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white border border-[#E6D8C5] rounded-2xl p-6 hover:border-[#D4BEA1] transition-all flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#A07E54] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#291D11]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#291D11] mb-2 font-display">
              Local & Accessible
            </h3>
            <p className="text-xs sm:text-sm text-[#61482D] leading-relaxed">
              Focused on Noida & Greater Noida so we can serve the area quickly.
            </p>
          </div>

        </div>

        {/* Team KARTONIQ Trust & Commitment Card */}
        <div className="bg-white border border-[#E6D8C5] rounded-3xl p-6 sm:p-8 shadow-xs max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#D4BEA1] shadow-xs bg-[#291D11] flex flex-col items-center justify-center text-center p-2">
              <Users className="w-7 h-7 text-[#25D366] mb-1" />
              <span className="text-[10px] font-black text-white tracking-wider uppercase font-display">
                TEAM KARTONIQ
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#25D366] text-white p-1 rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#A07E54] mb-1">
              Our Local Service Pledge
            </div>
            <blockquote className="text-sm sm:text-base text-[#42301D] italic mb-3 leading-relaxed">
              "When you're shifting homes, finding clean and sturdy cartons shouldn't be stressful. We ensure high-strength boxes reach your doorstep across Noida & Greater Noida on time."
            </blockquote>
            <div className="font-extrabold text-[#291D11] text-sm sm:text-base font-display">
              TEAM KARTONIQ
            </div>
            <div className="text-xs text-[#7F613D] font-medium">
              Dedicated Packaging & Delivery Team • Noida & Greater Noida
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
