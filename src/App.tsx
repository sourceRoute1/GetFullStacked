import { HeroSection } from "@/components/hero-section";
import { MethodSection } from "@/components/method-section";
import { CurriculumSection } from "@/components/curriculum-section";
// import { ProjectsSection } from "@/components/projects-section";
import { AudienceSection } from "@/components/audience-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Navigation } from "@/components/navigation";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="method">
        <MethodSection />
      </div>
      <div id="curriculum">
        <CurriculumSection />
      </div>
      {/* <div id="projects">
        <ProjectsSection />
      </div> */}
      <div id="audience">
        <AudienceSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection />
    </main>
  );
}
