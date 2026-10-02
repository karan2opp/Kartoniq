import React from 'react';
import { XCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section id="pain-points" className="py-12 sm:py-16 bg-white border-y border-[#E6D8C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-2">
            The Moving Struggle
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#291D11] tracking-tight mb-4 font-display">
            Moving Is Stressful Enough. <br className="hidden sm:block" />
            Finding Cartons Shouldn't Be.
          </h2>
          <p className="text-base sm:text-lg text-[#61482D] leading-relaxed">
            When you're shifting homes, the last thing you need is to spend hours visiting different shops, asking around for cartons or settling for whatever boxes you can find.
          </p>
        </div>

        {/* 3 Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          
          {/* Card 1 */}
          <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#D4BEA1] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#291D11] mb-2">
                No Running Around
              </h3>
              <p className="text-sm text-[#61482D] leading-relaxed">
                Find the cartons you need without visiting multiple shops or settling for weak second-hand boxes.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#D4BEA1] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#291D11] mb-2">
                No Last-Minute Search
              </h3>
              <p className="text-sm text-[#61482D] leading-relaxed">
                Order before your move and get fresh, sturdy cartons delivered to your door next day.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#D4BEA1] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#291D11] mb-2">
                No Unnecessary Hassle
              </h3>
              <p className="text-sm text-[#61482D] leading-relaxed">
                Tell us what you're packing and we'll help you choose the right carton sizes and quantities.
              </p>
            </div>
          </div>

        </div>

        {/* Transition Banner */}
        <div className="bg-[#291D11] text-[#FAF7F2] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-md">
          <div className="flex items-center justify-center gap-2 text-[#25D366] text-sm font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-4 h-4" />
            The KARTONIQ Promise
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-display text-white">
            You focus on your move. <br className="sm:hidden" />
            <span className="text-[#D4BEA1]">We'll handle the cartons.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
