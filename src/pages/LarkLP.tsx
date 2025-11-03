import LarkNavbar from "@/components/lark/LarkNavbar";
import LarkHero from "@/components/lark/LarkHero";
import LarkConcept from "@/components/lark/LarkConcept";
import LarkFeatures from "@/components/lark/LarkFeatures";
import LarkDemo from "@/components/lark/LarkDemo";
import LarkPricing from "@/components/lark/LarkPricing";
import LarkCaseStudy from "@/components/lark/LarkCaseStudy";
import LarkPhilosophy from "@/components/lark/LarkPhilosophy";
import LarkManagementScreen from "@/components/lark/LarkManagementScreen";
import LarkFAQ from "@/components/lark/LarkFAQ";
import LarkCTA from "@/components/lark/LarkCTA";
import LarkFooter from "@/components/lark/LarkFooter";

const LarkLP = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <LarkNavbar />
      <LarkHero />
      <LarkConcept />
      <LarkFeatures />
      <LarkDemo />
      <LarkPricing />
      <LarkCaseStudy />
      <LarkPhilosophy />
      <LarkManagementScreen />
      <LarkFAQ />
      <LarkCTA />
      <LarkFooter />
    </div>
  );
};

export default LarkLP;
