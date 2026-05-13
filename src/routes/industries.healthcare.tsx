import { createFileRoute } from "@tanstack/react-router";
import { IndustryDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare Solutions — Axentra" },
      { name: "description", content: "HIPAA-compliant patient engagement, claims processing, and healthcare administration services." },
      { property: "og:title", content: "Healthcare Solutions — Axentra" },
      { property: "og:description", content: "Compliant healthcare BPO and patient experience solutions." },
    ],
  }),
  component: () => (
    <IndustryDetailPage
      label="Industries"
      title="Healthcare — Patient-Centric Operations"
      intro="Deliver compassionate, compliant healthcare support with Axentra's HIPAA-aligned BPO solutions for hospitals, insurers, pharma, and healthtech companies."
      challenges={[
        "Strict regulatory compliance requirements (HIPAA, NABH) with severe penalties for violations",
        "Rising patient expectations for accessible, empathetic, and timely support",
        "Complex claims processing and denial management affecting revenue cycles",
        "Provider network management and credentialing backlogs",
        "Integration challenges across disparate EMR/EHR systems",
        "Staff shortages and burnout in healthcare administrative roles",
      ]}
      solutions={[
        { title: "Patient Engagement", desc: "Compassionate, HIPAA-compliant patient support including appointment scheduling, prescription refills, billing inquiries, and post-discharge follow-ups." },
        { title: "Claims Processing", desc: "End-to-end claims adjudication, denial management, and appeals processing with AI-powered coding validation and error detection." },
        { title: "Revenue Cycle Management", desc: "Insurance verification, prior authorization, charge capture, billing, collections, and reporting to optimize your revenue cycle." },
        { title: "Provider Operations", desc: "Credentialing, network management, provider data maintenance, and contract management to keep your provider network running smoothly." },
      ]}
      benefits={[
        "Achieve 100% HIPAA compliance with certified processes and trained staff",
        "Reduce claims denial rates by 30-40% through AI-powered validation",
        "Improve patient satisfaction scores with empathetic, timely support",
        "Accelerate revenue cycles by 25-35% through streamlined processing",
        "Lower administrative costs by 40-55% compared to in-house operations",
        "Scale operations to handle enrollment periods and seasonal demand",
      ]}
    />
  ),
});
