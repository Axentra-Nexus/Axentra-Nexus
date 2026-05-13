import { createFileRoute } from "@tanstack/react-router";
import { IndustryDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/industries/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-commerce Solutions — Axentra" },
      { name: "description", content: "Scalable customer support, order management, and fulfillment operations for online retailers." },
      { property: "og:title", content: "E-commerce Solutions — Axentra" },
      { property: "og:description", content: "Scale your e-commerce operations with Axentra." },
    ],
  }),
  component: () => (
    <IndustryDetailPage
      label="Industries"
      title="E-commerce — Online Retail & Marketplaces"
      intro="Scale your customer operations seamlessly with Axentra's e-commerce BPO solutions — from pre-sale inquiries to post-purchase support and returns management."
      challenges={[
        "Massive seasonal volume fluctuations (3-10x during sales events) demanding elastic operations",
        "Rising customer expectations for instant, multichannel support and rapid issue resolution",
        "Complex returns and refund processes that impact margins and customer satisfaction",
        "Marketplace compliance and seller management across multiple platforms",
        "Cart abandonment and churn requiring proactive engagement strategies",
        "Need for 24/7 global coverage across multiple time zones and languages",
      ]}
      solutions={[
        { title: "Elastic Customer Support", desc: "Rapidly scalable teams that ramp from 50 to 500+ agents within days, handling seasonal peaks across voice, chat, email, and social channels." },
        { title: "Order & Returns Management", desc: "End-to-end order processing, shipment tracking, returns authorization, refund processing, and seller dispute resolution." },
        { title: "Marketplace Operations", desc: "Catalog management, seller onboarding, listing optimization, and compliance monitoring across Amazon, Flipkart, and proprietary platforms." },
        { title: "Proactive Engagement", desc: "AI-driven cart abandonment recovery, post-purchase NPS surveys, loyalty program management, and win-back campaigns." },
      ]}
      benefits={[
        "Handle 3-10x volume spikes without compromising response times",
        "Reduce returns processing time by 60% with streamlined workflows",
        "Improve customer satisfaction scores by 25-40%",
        "Lower cost-per-contact by 35-50% compared to in-house teams",
        "Recover 15-20% of abandoned carts through proactive outreach",
        "Maintain consistent quality across all channels and time zones",
      ]}
    />
  ),
});
