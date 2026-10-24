import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComputerVisionTransition } from './components/ComputerVisionTransition';
import { TechnologyPipeline } from './components/TechnologyPipeline';
import { MobilitySection } from './components/MobilitySection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { InteractiveCvDemo } from './components/InteractiveCvDemo';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { SoftwareSection } from './components/SoftwareSection';
import { DataSection } from './components/DataSection';
import { SolutionsSection } from './components/SolutionsSection';
import { VisionSection } from './components/VisionSection';
import { BrandManifesto } from './components/BrandManifesto';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-4quc7bnpiv5kzltxlyayhk-257785740476.us-east1.run.app';

  return (
    <div className="min-h-screen bg-white text-[#0E2A43] font-sans selection:bg-[#18C5BB]/20 selection:text-[#0E2A43]">
      <Header
        onOpenContactModal={handleScrollToContact}
        onOpenShareModal={() => setShareModalOpen(true)}
      />
      <main>
        <Hero />
        <ComputerVisionTransition />
        <TechnologyPipeline />
        <MobilitySection />
        <DifferentiatorSection />
        <InteractiveCvDemo />
        <CapabilitiesSection />
        <SoftwareSection />
        <DataSection />
        <SolutionsSection />
        <VisionSection />
        <BrandManifesto />
        <ContactCta />
      </main>
      <Footer onOpenShareModal={() => setShareModalOpen(true)} />

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        sharedUrl={currentUrl}
      />
    </div>
  );
}
