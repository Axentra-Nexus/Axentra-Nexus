import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/services/lending")({
  head: () => ({
    meta: [
      { title: "Lending & Financial Services Support — Axentra Nexus" },
      { name: "description", content: "Specialized lending operations for banks, NBFCs and fintechs — origination, underwriting support, KYC, servicing and collections." },
      { property: "og:title", content: "Lending & Financial Services Support — Axentra Nexus" },
      { property: "og:description", content: "Purpose-built operations for the lending lifecycle." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      label="Lending & Financial Services"
      title="Lending Operations Built for Scale"
      intro="Specialized loan operations for banks, NBFCs and fintechs — from origination to collections, delivered with compliance-first rigor."
      overview="Axentra Nexus — a unit of Dharitha Nexus LLP — runs the operational backbone of modern lending businesses. Our trained teams handle origination, KYC and underwriting support, customer servicing, disbursal operations and the full collections lifecycle. We combine product training, regulatory know-how and analytics to drive better unit economics across your portfolio."
      features={[
        { title: "Loan Origination Support", desc: "Application processing, document verification and pre-underwriting checks." },
        { title: "KYC, AML & Verification", desc: "Digital and physical verification with regulator-aligned controls." },
        { title: "Underwriting Assistance", desc: "Bureau pulls, income assessment and policy-rule application support." },
        { title: "Customer Servicing", desc: "Account queries, statements, EMI changes and grievance handling." },
        { title: "Early & Late Collections", desc: "Bucket-wise recovery strategies with compliant outreach." },
        { title: "Portfolio Analytics", desc: "Dashboards on TAT, conversion, delinquency and recovery." },
      ]}
      benefits={[
        "Faster turnaround times across the loan lifecycle",
        "Lower cost per file with productivity-led pricing models",
        "Improved approval and recovery rates",
        "Audit-ready operations and regulator-aligned controls",
        "Scalable capacity to support seasonal or product launches",
      ]}
      ctaText="Build a Lending Operations Partnership"
    />
  ),
});
