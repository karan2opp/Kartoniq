import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ProductSection } from './components/ProductSection';
import { HelpChoose } from './components/HelpChoose';
import { DeliveryOffer } from './components/DeliveryOffer';
import { WhyKartoniq } from './components/WhyKartoniq';
import { HowItWorks } from './components/HowItWorks';
import { WhatsAppConversion } from './components/WhatsAppConversion';
import { SalesFlowPreview } from './components/SalesFlowPreview';
import { PaymentAndDelivery } from './components/PaymentAndDelivery';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { TrustAndPolicies } from './components/TrustAndPolicies';
import { FinalCta } from './components/FinalCta';
import { StickyBottomCta } from './components/StickyBottomCta';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      
      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('https://wa.me/')) {
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead');
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#291D11] font-sans antialiased selection:bg-[#E6D8C5] selection:text-[#291D11]">
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <ProductSection />
        <HelpChoose />
        <DeliveryOffer />
        <WhyKartoniq />
        <HowItWorks />
        <WhatsAppConversion />
        <SalesFlowPreview />
        <CustomerReviewsSection />
        <PaymentAndDelivery />
        <TrustAndPolicies />
        <FinalCta />
      </main>
      <Footer />
      <StickyBottomCta />
    </div>
  );
}
