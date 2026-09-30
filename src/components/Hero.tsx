import React from 'react';
import { MessageCircle, CheckCircle2, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';
import heroImg from '../assets/images/hero_moving_cartons_1788167557985.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] to-[#F3ECE1]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Meta Ad Continuity Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E6D8C5] text-[#42301D] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full mb-4 sm:mb-5 border border-[#D4BEA1]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span>Delivering across Noida & Greater Noida</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#291D11] tracking-tight leading-[1.12] mb-4 sm:mb-5 font-display">
              Moving House? <br className="hidden sm:block" />
              <span className="text-[#A07E54]">Get Your Cartons</span> Delivered.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#61482D] leading-relaxed mb-6 sm:mb-7 max-w-xl font-normal">
              Don't waste hours hunting for boxes. <strong>KARTONIQ</strong> delivers quality moving cartons to your doorstep across Noida & Greater Noida within 24 hours.
            </p>

            {/* Pricing Callout Card */}
            <div className="w-full sm:w-auto bg-white/90 backdrop-blur-sm border border-[#E6D8C5] rounded-2xl p-4 sm:p-5 mb-7 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#7F613D]">Starting Price</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#291D11]">
                  Cartons from <span className="text-[#25D366] font-display">₹69</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[#E6D8C5]"></div>
              <div className="bg-[#FAF7F2] border border-[#D4BEA1]/60 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#42301D] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Free delivery on orders above ₹999</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-2">
              <a
                id="hero-primary-cta"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-base sm:text-lg font-extrabold px-8 py-4 rounded-2xl shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] text-center uppercase tracking-wide"
              >
                <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
                <span>CONNECT ON WHATSAPP NOW</span>
              </a>

              {/* Phone display & Reassurance */}
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1.5 sm:gap-3 text-xs sm:text-sm text-[#7F613D] pt-1">
                <span className="font-bold text-[#291D11]">{WHATSAPP_DISPLAY_PHONE}</span>
                <span className="hidden sm:inline text-[#D4BEA1]">•</span>
                <a href="#customer-reviews" className="inline-flex items-center gap-1 font-semibold text-[#61482D] hover:text-[#291D11] transition-colors">
                  <span className="text-[#F59E0B] font-bold">★ 4.4/5</span>
                  <span className="underline decoration-[#D4BEA1]">(41+ Local Reviews)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Hero Visual Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E6D8C5]">
              <img
                src={heroImg}
                alt="Person and household preparing to move with sturdy KARTONIQ cardboard moving boxes in apartment"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11] transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating badges on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/40 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#25D366]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#291D11]">Ready-to-Pack Cartons</div>
                    <div className="text-[11px] text-[#7F613D]">Standard 3-Ply & Heavy 5-Ply</div>
                  </div>
                </div>
                <span className="bg-[#291D11] text-[#FAF7F2] text-[11px] font-bold px-2.5 py-1 rounded-md">
                  24h Dispatch
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
