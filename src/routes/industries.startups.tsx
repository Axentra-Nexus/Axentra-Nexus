import { createFileRoute } from "@tanstack/react-router";
import { IndustryDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/industries/startups")({
  head: () => ({
    meta: [
      { title: "Startup Solutions — Axentra" },
      { name: "description", content: "Flexible, cost-effective BPO solutions designed to scale with fast-growing startups." },
      { property: "og:title", content: "Startup Solutions — Axentra" },
      { property: "og:description", content: "BPO solutions built for startup speed and scale." },
    ],
  }),
  component: () => (
    <IndustryDetailPage
      label="Industries"
      title="Startups — Built for Speed & Scale"
      intro="Move fast without breaking things. Axentra's startup-friendly BPO solutions give you enterprise-grade operations without the enterprise overhead."
      challenges={[
        "Limited budgets requiring maximum operational efficiency from day one",
        "Unpredictable growth trajectories demanding elastic, scalable operations",
        "Need to deliver premium customer experiences to build brand trust and loyalty",
        "Founders and core teams stretched thin across too many operational functions",
        "Investor pressure to demonstrate operational scalability and unit economics",
        "Rapidly evolving products and processes requiring agile support teams",
      ]}
      solutions={[
        { title: "Flexible Engagement Models", desc: "Start with as few as 5 agents and scale to 500+ as you grow. No long-term contracts, no minimum commitments — pure operational flexibility." },
        { title: "Startup-Speed Onboarding", desc: "Go live in as little as 2 weeks with our accelerated onboarding program, pre-built tech stack integrations, and dedicated launch managers." },
        { title: "Full-Stack Support", desc: "Customer support, sales, back-office, and tech support in one engagement — so you don't need to manage multiple vendors as you scale." },
        { title: "Growth Analytics", desc: "Real-time dashboards tracking unit economics, customer lifetime value, support costs, and operational metrics that matter to founders and investors." },
      ]}
      benefits={[
        "Launch customer operations in 2 weeks with zero CAPEX investment",
        "Reduce operational costs by 50-70% compared to in-house hiring",
        "Scale teams elastically — up or down — with 48-hour flexibility",
        "Free up founder time to focus on product, fundraising, and strategy",
        "Access enterprise-grade quality and compliance from day one",
        "Demonstrate operational scalability and unit economics to investors",
      ]}
    />
  ),
});
