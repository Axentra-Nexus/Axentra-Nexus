import { createFileRoute } from "@tanstack/react-router";
import { IndustryDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/industries/telecom")({
  head: () => ({
    meta: [
      { title: "Telecom Solutions — Axentra" },
      { name: "description", content: "Subscriber lifecycle management, technical support, and revenue assurance for telecom operators." },
      { property: "og:title", content: "Telecom Solutions — Axentra" },
      { property: "og:description", content: "End-to-end telecom BPO and customer lifecycle management." },
    ],
  }),
  component: () => (
    <IndustryDetailPage
      label="Industries"
      title="Telecom — Connectivity & Digital Services"
      intro="Manage the full subscriber lifecycle with Axentra's telecom-specialized BPO solutions — from acquisition and activation to retention and win-back."
      challenges={[
        "High subscriber churn rates driven by intense market competition and number portability",
        "Complex technical support requirements across voice, data, broadband, and OTT services",
        "Revenue leakage from billing errors, fraud, and unoptimized pricing strategies",
        "Regulatory compliance across TRAI mandates, DND regulations, and data privacy requirements",
        "Managing massive contact volumes during network outages and service disruptions",
        "Evolving from connectivity provider to digital services platform",
      ]}
      solutions={[
        { title: "Subscriber Lifecycle Management", desc: "End-to-end management from acquisition and activation through servicing, upgrade, retention, and win-back — with churn prediction models." },
        { title: "Technical Support", desc: "Multi-tier technical helpdesk (L1-L3) for broadband, mobile, DTH, and enterprise services with remote diagnostic tools and escalation management." },
        { title: "Revenue Assurance", desc: "Billing verification, usage reconciliation, fraud detection, and dunning management to plug revenue leakage and optimize ARPU." },
        { title: "Outage Management", desc: "Dedicated surge teams and automated IVR solutions for handling mass contact volumes during network outages with real-time status updates." },
      ]}
      benefits={[
        "Reduce subscriber churn by 15-25% through predictive retention programs",
        "Improve first-call resolution rates to 85%+ for technical support",
        "Recover 2-5% of leaked revenue through assurance programs",
        "Handle 5x normal volumes during outages without service degradation",
        "Lower cost-per-subscriber for servicing by 35-50%",
        "Maintain full TRAI and DND compliance with automated controls",
      ]}
    />
  ),
});
