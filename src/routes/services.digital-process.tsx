import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/DetailPage";

export const Route = createFileRoute("/services/digital-process")({
  head: () => ({
    meta: [
      { title: "Digital Process Management — Axentra" },
      { name: "description", content: "End-to-end workflow automation, RPA, AI analytics, and digital transformation solutions." },
      { property: "og:title", content: "Digital Process Management — Axentra" },
      { property: "og:description", content: "Transform your operations with intelligent digital process management." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      label="Services"
      title="Digital Process Management"
      intro="Transform your operations with intelligent workflow automation, robotic process automation, AI-powered analytics, and end-to-end digital solutions."
      overview="Axentra's Digital Process Management practice helps organizations reimagine their operations for the digital age. We combine deep process expertise with cutting-edge technologies — RPA, AI/ML, intelligent document processing, and low-code platforms — to automate repetitive tasks, eliminate manual errors, and unlock actionable insights. Our consultants work alongside your teams to design, implement, and continuously optimize digital workflows that deliver measurable ROI."
      features={[
        { title: "Robotic Process Automation", desc: "Design, deploy, and manage software bots that automate high-volume, rule-based tasks across your enterprise applications." },
        { title: "Intelligent Document Processing", desc: "AI-powered extraction, classification, and validation of unstructured documents — invoices, contracts, forms, correspondence." },
        { title: "Workflow Orchestration", desc: "End-to-end process design and orchestration using low-code platforms, connecting people, systems, and data into seamless workflows." },
        { title: "AI & Predictive Analytics", desc: "Machine learning models for demand forecasting, customer churn prediction, fraud detection, and operational optimization." },
        { title: "Process Mining", desc: "Data-driven discovery and analysis of your actual business processes, identifying bottlenecks, deviations, and automation opportunities." },
        { title: "Continuous Optimization", desc: "Ongoing process monitoring, A/B testing, and improvement cycles to ensure your digital operations keep getting better." },
      ]}
      benefits={[
        "Automate 60-80% of rule-based processes within 6 months",
        "Reduce manual errors by 95% through intelligent automation",
        "Achieve 200-400% ROI on automation investments within the first year",
        "Gain real-time visibility into process performance and bottlenecks",
        "Accelerate digital transformation with proven frameworks and methodologies",
        "Free up skilled employees for higher-value, strategic work",
      ]}
      ctaText="Start Your Digital Transformation"
    />
  ),
});
