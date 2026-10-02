import React from 'react';
import { MessageSquare, Layers, CreditCard, Truck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us',
      desc: 'Connect with KARTONIQ on WhatsApp.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Choose',
      desc: 'Tell us how many cartons and which sizes you need.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Pay',
      desc: 'Confirm your order with 100% advance payment through WhatsApp.',
      icon: CreditCard,
    },
    {
      num: '04',
      title: 'Receive',
      desc: 'Get your cartons delivered to your doorstep next day.',
      icon: Truck,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E6D8C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-2">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
            Getting Your Cartons Is Easy.
          </h2>
          
          {/* Visual flow pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FAF7F2] border border-[#E6D8C5] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#42301D] mt-2 flex-wrap justify-center">
            <span>WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A07E54]" />
            <span>Choose</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A07E54]" />
            <span>Pay</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A07E54]" />
            <span className="text-[#25D366] font-bold">Delivered</span>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 relative hover:border-[#D4BEA1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#A07E54] font-display">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E6D8C5] text-[#291D11] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#291D11] mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#61482D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
