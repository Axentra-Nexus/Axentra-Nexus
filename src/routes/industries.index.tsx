import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, ShoppingBag, Signal, HeartPulse, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import industriesHero from "@/assets/industries-hero.jpg";
import bfsiImg from "@/assets/industry-bfsi.jpg";
import ecommerceImg from "@/assets/industry-ecommerce.jpg";
import telecomImg from "@/assets/industry-telecom.jpg";
import healthcareImg from "@/assets/industry-healthcare.jpg";
import startupsImg from "@/assets/industry-startups.jpg";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries — Axentra Nexus Sector Expertise" },
      { name: "description", content: "Axentra Nexus delivers tailored BPO, lending, and CX solutions across BFSI, E-commerce, Telecom, Healthcare, and Startups." },
      { property: "og:title", content: "Industries — Axentra Nexus" },
      { property: "og:description", content: "Sector-specific BPO and digital transformation solutions." },
      { property: "og:image", content: industriesHero },
    ],
  }),
  component: IndustriesPage,
});

type Industry = {
  title: string;
  tagline: string;
  desc: string;
  highlights: string[];
  metric: { value: string; label: string };
  to: string;
  image: string;
  Icon: typeof Landmark;
};

const industries: Industry[] = [
  {
    title: "BFSI",
    tagline: "Banking, Financial Services & Insurance",
    desc: "Compliance-first operations across retail banking, NBFCs, insurance and capital markets — built for regulated environments where accuracy and security are non-negotiable.",
    highlights: ["KYC, AML & onboarding", "Loan & policy servicing", "Fraud & dispute management", "RBI / IRDAI-aligned controls"],
    metric: { value: "99.5%", label: "Process accuracy" },
    to: "/industries/bfsi",
    image: bfsiImg,
    Icon: Landmark,
  },
  {
    title: "E-commerce",
    tagline: "Online Retail & Marketplaces",
    desc: "Elastic customer support, order management and returns operations that scale 5–10x during sale events without breaking SLAs or experience quality.",
    highlights: ["24/7 omnichannel support", "Order & returns management", "Marketplace operations", "Cart abandonment recovery"],
    metric: { value: "10x", label: "Peak season scale" },
    to: "/industries/ecommerce",
    image: ecommerceImg,
    Icon: ShoppingBag,
  },
  {
    title: "Telecom",
    tagline: "Connectivity & Digital Services",
    desc: "Subscriber lifecycle, multi-tier technical support and revenue assurance for telcos navigating churn, outages and the shift to digital services.",
    highlights: ["Subscriber lifecycle management", "L1–L3 technical support", "Revenue assurance", "Outage surge handling"],
    metric: { value: "85%+", label: "First-call resolution" },
    to: "/industries/telecom",
    image: telecomImg,
    Icon: Signal,
  },
  {
    title: "Healthcare",
    tagline: "Patient-Centric Operations",
    desc: "HIPAA-aligned patient engagement, claims processing and revenue cycle support for hospitals, payers, pharma and healthtech innovators.",
    highlights: ["Patient engagement & scheduling", "Claims & denial management", "Revenue cycle management", "Provider credentialing"],
    metric: { value: "100%", label: "HIPAA compliance" },
    to: "/industries/healthcare",
    image: healthcareImg,
    Icon: HeartPulse,
  },
  {
    title: "Startups",
    tagline: "Built for Speed & Scale",
    desc: "Flexible engagement models that let early-stage and growth-stage companies launch enterprise-grade operations in weeks, not quarters.",
    highlights: ["2-week go-live", "5 to 500+ agent elasticity", "Full-stack support", "Founder-grade analytics"],
    metric: { value: "2 wks", label: "To go live" },
    to: "/industries/startups",
    image: startupsImg,
    Icon: Rocket,
  },
];

function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0">
          <img
            src={industriesHero}
            alt="Industries served by Axentra Nexus"
            className="h-full w-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-foreground/60" />
        </div>
        <div className="container-max relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <span className="mb-5 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Industries
          </span>
          <h1 className="heading-1 max-w-4xl text-white text-7xl">
            <span className="text-white">Sector-Specific Expertise,</span> <span className="text-gradient-brand bg-clip-text">Engineered for Outcomes</span>
          </h1>
          <p className="body-text mt-6 max-w-3xl text-background/95">
            Every industry has unique regulatory, operational and customer-experience demands. Axentra Nexus — a unit of Dharitha Nexus LLP — brings deep domain knowledge and tailored playbooks to BFSI, E-commerce, Telecom, Healthcare and high-growth Startups.
          </p>

          {/* Quick jump nav */}
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <a
                key={ind.title}
                href={`#${ind.title.toLowerCase()}`}
                className="group inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-medium text-background/90 backdrop-blur transition-all hover:border-background/40 hover:bg-background/10"
              >
                <ind.Icon className="h-4 w-4 text-primary" />
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-secondary">
        <div className="container-max grid grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { v: "5+", l: "Industries we serve" },
            { v: "Founder-Led", l: "Engagement model" },
            { v: "White-Glove", l: "Onboarding promise" },
            { v: "24/7", l: "Always-on coverage" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="text-3xl font-extrabold text-gradient-brand sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating industry rows */}
      <section className="section-padding">
        <div className="container-max space-y-24 lg:space-y-32">
          {industries.map((ind, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={ind.title}
                id={ind.title.toLowerCase()}
                className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_60px_-20px_rgba(15,23,42,0.25)]">
                    <img
                      src={ind.image}
                      alt={`${ind.title} industry — ${ind.tagline}`}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      width={1280}
                      height={896}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-transparent" />
                  </div>
                  {/* Floating metric card */}
                  <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
                    <div className="text-3xl font-extrabold text-gradient-brand">{ind.metric.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{ind.metric.label}</div>
                  </div>
                </div>

                {/* Content */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    <ind.Icon className="h-3.5 w-3.5" />
                    {ind.tagline}
                  </div>
                  <h2 className="heading-2 mt-4">{ind.title}</h2>
                  <p className="body-text mt-4">{ind.desc}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {ind.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={ind.to}
                    className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:gap-3 hover:bg-primary"
                  >
                    Explore {ind.title} solutions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="gradient-brand">
          <div className="container-max px-4 py-20 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Don't See Your Industry?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              We work across sectors — from logistics and EdTech to energy and SaaS. Let's design a tailored operations partnership for your business.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-foreground shadow-lg transition-all hover:gap-3 hover:shadow-xl"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
