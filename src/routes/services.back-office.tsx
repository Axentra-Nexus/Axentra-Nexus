import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/services/back-office")({
  head: () => ({
    meta: [
      { title: "Back Office Operations — Axentra" },
      { name: "description", content: "Scalable back-office operations including document processing, data management, and reconciliation services." },
      { property: "og:title", content: "Back Office Operations — Axentra" },
      { property: "og:description", content: "Streamline your back-office with enterprise-scale process management." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      label="Services"
      title="Back Office Operations"
      intro="Streamline your back-office with scalable, accurate, and compliant document processing, data management, and reconciliation services."
      overview="Axentra's back-office solutions eliminate operational bottlenecks by combining skilled processing teams with intelligent automation. From high-volume data entry and document indexing to complex financial reconciliation and compliance reporting, we deliver accuracy, speed, and cost savings at enterprise scale. Our Six Sigma–certified processes ensure consistent quality with error rates below 0.5%."
      features={[
        { title: "Document Processing", desc: "High-volume document indexing, classification, extraction, and archival using OCR, ICR, and AI-powered data capture technologies." },
        { title: "Data Entry & Management", desc: "Accurate, high-throughput data entry with multi-level validation, deduplication, and enrichment across structured and unstructured formats." },
        { title: "Financial Reconciliation", desc: "End-to-end reconciliation of accounts, transactions, and statements with exception handling and variance reporting." },
        { title: "Compliance Reporting", desc: "Automated regulatory report generation with audit trails, ensuring timely and accurate submissions across jurisdictions." },
        { title: "Order Fulfillment Support", desc: "Order processing, inventory updates, returns management, and vendor coordination to keep your supply chain running smoothly." },
        { title: "Quality Assurance", desc: "Six Sigma–certified processes with multi-tier quality checks, ensuring error rates consistently below 0.5%." },
      ]}
      benefits={[
        "Reduce back-office processing costs by 40-60%",
        "Achieve 99.5%+ accuracy with Six Sigma quality frameworks",
        "Accelerate turnaround times by 50% through automation + human expertise",
        "Free up internal teams to focus on strategic, revenue-generating activities",
        "Ensure full compliance with industry-specific regulatory requirements",
        "Scale operations seamlessly during peak periods",
      ]}
      ctaText="Optimize Your Back Office"
    />
  ),
});
