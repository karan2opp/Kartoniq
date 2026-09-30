import React from 'react';
import { MessageSquareText, HelpCircle, Check, ArrowRight } from 'lucide-react';

export const SalesFlowPreview: React.FC = () => {
  const sampleQuestions = [
    {
      num: 'Q1',
      question: 'Which sector/area are you currently living in?',
      hint: 'e.g., Sector 62, Sector 137, Greater Noida West, etc.',
    },
    {
      num: 'Q2',
      question: 'Where are you shifting to?',
      hint: 'Local within Noida/Gr. Noida, Delhi, Gurgaon, or another city.',
    },
    {
      num: 'Q3',
      question: 'When are you planning to shift?',
      hint: 'Today, this weekend, or next week.',
    },
    {
      num: 'Q4',
      question: 'Approximately how many cartons do you need?',
      options: ['10–20', '20–30', '30–50', '50+', 'Not sure'],
    },
    {
      num: 'Q5',
      question: 'What are you mainly packing?',
      options: ['Clothes', 'Books', 'Kitchen', 'Household Items', 'Mixed'],
    },
  ];

  return (
    <section id="sales-flow" className="py-12 sm:py-16 bg-white border-b border-[#E6D8C5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#A07E54] block mb-2">
            What Happens Next
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291D11] tracking-tight mb-3 font-display">
            A Helpful, Personal Chat on WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-[#61482D]">
            No robots or complex forms. We will simply ask a few quick questions to recommend the right carton setup.
          </p>
        </div>

        {/* WhatsApp Chat Preview Mockup */}
        <div className="bg-[#FAF7F2] border border-[#E6D8C5] rounded-3xl p-5 sm:p-7 shadow-xs">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            
            {sampleQuestions.map((q, idx) => (
              <div key={q.num} className="bg-white rounded-2xl p-4 border border-[#E6D8C5]/80 shadow-2xs">
                <div className="flex items-start gap-3">
                  <span className="bg-[#291D11] text-[#FAF7F2] text-xs font-black px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                    {q.num}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-bold text-[#291D11]">
                      {q.question}
                    </p>
                    
                    {q.hint && (
                      <p className="text-xs text-[#7F613D] mt-1 italic">
                        {q.hint}
                      </p>
                    )}

                    {q.options && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {q.options.map((opt) => (
                          <span
                            key={opt}
                            className="text-xs font-semibold bg-[#FAF7F2] text-[#42301D] border border-[#E6D8C5] px-2.5 py-1 rounded-lg"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* If they don't know reassurance */}
            <div className="bg-[#F3ECE1] rounded-2xl p-4 border border-[#D4BEA1] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#A07E54] text-white flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-[#42301D] font-medium">
                <strong>Don't know the exact count?</strong> No problem! Tell us what you're packing and we'll estimate for you.
              </p>
            </div>

          </div>

          {/* Philosophy Banner */}
          <div className="mt-6 pt-6 border-t border-[#E6D8C5] text-center">
            <div className="text-xs uppercase tracking-wider font-bold text-[#7F613D] mb-2">
              Our WhatsApp Service Philosophy
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap text-xs sm:text-sm font-extrabold text-[#291D11]">
              <span className="text-[#A07E54]">Qualify</span>
              <span>→</span>
              <span className="text-[#A07E54]">Help</span>
              <span>→</span>
              <span className="text-[#A07E54]">Recommend</span>
              <span>→</span>
              <span className="text-[#A07E54]">Quote</span>
              <span>→</span>
              <span className="text-[#25D366]">Payment</span>
              <span>→</span>
              <span className="text-[#25D366]">Delivery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
