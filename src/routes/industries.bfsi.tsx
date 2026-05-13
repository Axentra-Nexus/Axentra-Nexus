import { createFileRoute } from "@tanstack/react-router";
import { IndustryDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/industries/bfsi")({
  head: () => ({
    meta: [
      { title: "BFSI Solutions — Axentra" },
      { name: "description", content: "Banking, financial services, and insurance BPO solutions with compliance-first operations." },
      { property: "og:title", content: "BFSI Solutions — Axentra" },
      { property: "og:description", content: "Compliance-first BPO solutions for banking and insurance." },
    ],
  }),
  component: () => (
    <IndustryDetailPage
      label="Industries"
      title="BFSI — Banking, Financial Services & Insurance"
      intro="Navigate the complexities of financial services with Axentra's compliance-first BPO solutions designed for banks, NBFCs, insurance companies, and fintech firms."
      challenges={[
        "Stringent regulatory compliance requirements (RBI, IRDAI, SEBI) demanding constant vigilance and audit readiness",
        "Rising customer expectations for seamless digital experiences across channels",
        "Increasing pressure to reduce operational costs while maintaining service quality",
        "Growing fraud risks requiring sophisticated detection and prevention mechanisms",
        "Legacy system integration challenges hindering digital transformation efforts",
        "Talent acquisition and retention in specialized financial operations roles",
      ]}
      solutions={[
        { title: "Compliance-First Operations", desc: "Purpose-built processes with embedded regulatory controls, automated audit trails, and dedicated compliance officers for RBI, IRDAI, and SEBI mandates." },
        { title: "Customer Lifecycle Management", desc: "End-to-end management from onboarding and KYC to servicing, cross-sell, and retention — delivering seamless omnichannel experiences." },
        { title: "Claims Processing", desc: "Accelerated insurance claims adjudication with AI-powered document verification, fraud detection, and automated settlement workflows." },
        { title: "Collections & Recovery", desc: "Empathetic, regulation-compliant collections across NPA buckets with predictive analytics for prioritization and skip tracing." },
      ]}
      benefits={[
        "Achieve 100% regulatory compliance with built-in controls and audit trails",
        "Reduce claims processing time by 50% through intelligent automation",
        "Improve collections recovery rates by 20-30% with data-driven strategies",
        "Lower operational costs by 40-55% compared to in-house operations",
        "Enhance customer satisfaction with faster turnaround and personalized service",
        "Scale operations rapidly to meet seasonal or regulatory-driven demand spikes",
      ]}
    />
  ),
});
