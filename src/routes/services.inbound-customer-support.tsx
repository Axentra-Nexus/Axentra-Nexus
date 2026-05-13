import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/services/inbound-customer-support")({
  head: () => ({
    meta: [
      { title: "Inbound Customer Support — Axentra" },
      { name: "description", content: "24/7 multilingual inbound customer support across voice, chat, email, and social channels." },
      { property: "og:title", content: "Inbound Customer Support — Axentra" },
      { property: "og:description", content: "Deliver exceptional customer experiences with Axentra's inbound support." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      label="Services"
      title="Inbound Customer Support"
      intro="Deliver exceptional customer experiences with 24/7, multilingual support across every channel — voice, chat, email, and social media."
      overview="Axentra's Inbound Customer Support services are built to handle the full spectrum of customer interactions with speed, empathy, and precision. Our trained professionals leverage advanced CRM integrations, AI-assisted routing, and real-time quality monitoring to ensure every interaction builds loyalty. Whether you need Level 1 helpdesk support or complex technical troubleshooting, we scale seamlessly with your business."
      features={[
        { title: "Omnichannel Support", desc: "Seamless customer engagement across voice, live chat, email, social media, and messaging apps — unified under a single SLA framework." },
        { title: "AI-Powered Routing", desc: "Intelligent call and ticket routing using NLP and predictive analytics to match customers with the right agent, reducing resolution times by up to 40%." },
        { title: "Multilingual Capability", desc: "Support in 15+ languages with native-speaking agents and AI-assisted translation for global coverage without compromising quality." },
        { title: "Real-Time Analytics", desc: "Live dashboards tracking CSAT, FCR, AHT, and NPS with automated alerts and weekly business intelligence reports." },
        { title: "Quality Assurance", desc: "100% call monitoring with AI-driven sentiment analysis, calibration sessions, and continuous coaching programs." },
        { title: "Scalable Operations", desc: "Ramp up or down within 48 hours with our flexible staffing model — from 10-seat pilots to 1,000+ agent deployments." },
      ]}
      benefits={[
        "Improve customer satisfaction scores by 20-35% within the first quarter",
        "Reduce average handling time through AI-assisted agent tools",
        "Achieve 99.5%+ SLA adherence across all channels",
        "Lower cost-per-interaction by 30-50% compared to in-house operations",
        "Access real-time visibility into performance metrics and customer insights",
        "Scale operations elastically to match seasonal demand",
      ]}
      ctaText="Elevate Your Customer Experience"
    />
  ),
});
