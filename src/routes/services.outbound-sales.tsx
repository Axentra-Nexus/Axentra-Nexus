import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/services/outbound-sales")({
  head: () => ({
    meta: [
      { title: "Outbound Sales & Collections — Axentra" },
      { name: "description", content: "Data-driven outbound sales, lead generation, and collections services with full regulatory compliance." },
      { property: "og:title", content: "Outbound Sales & Collections — Axentra" },
      { property: "og:description", content: "Revenue-focused outbound campaigns that deliver measurable ROI." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      label="Services"
      title="Outbound Sales & Collections"
      intro="Drive revenue growth with compliant, data-driven outbound campaigns that convert prospects into customers and recover outstanding receivables."
      overview="Axentra's outbound solutions combine skilled sales professionals with advanced predictive dialers, CRM automation, and compliance frameworks to maximize contact rates and conversion. From B2B lead generation and appointment setting to consumer collections and win-back programs, our campaigns are designed around your revenue goals with transparent reporting and performance-based pricing options."
      features={[
        { title: "Predictive Dialing", desc: "AI-optimized dialing algorithms that increase agent talk time by 300% while maintaining compliance with TCPA, DNC, and local regulations." },
        { title: "Lead Qualification", desc: "Multi-touch lead scoring and qualification using BANT/MEDDIC frameworks, delivering sales-ready leads directly to your pipeline." },
        { title: "Collections Management", desc: "Empathetic, compliance-first collections across early-stage, mid-stage, and late-stage receivables with skip tracing and payment plan negotiation." },
        { title: "Campaign Analytics", desc: "Real-time campaign dashboards tracking conversion rates, cost-per-acquisition, revenue per call, and agent performance metrics." },
        { title: "Regulatory Compliance", desc: "Built-in compliance with TCPA, FDCPA, GDPR, and industry-specific regulations with automated audit trails and call recording." },
        { title: "Win-Back Programs", desc: "Targeted re-engagement campaigns for churned customers using behavioral data and personalized offers to recover lost revenue." },
      ]}
      benefits={[
        "Increase qualified lead pipeline by 40-60% within 90 days",
        "Achieve 15-25% improvement in collections recovery rates",
        "Reduce cost-per-acquisition through optimized campaign management",
        "Maintain 100% regulatory compliance across all outbound activities",
        "Access transparent, real-time performance reporting",
        "Flexible pricing models including performance-based compensation",
      ]}
      ctaText="Accelerate Your Revenue Growth"
    />
  ),
});
