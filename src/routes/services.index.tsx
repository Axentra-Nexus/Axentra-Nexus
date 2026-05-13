import { createFileRoute, Link } from "@tanstack/react-router";
import { Headphones, Banknote, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import bpoCallCenter from "@/assets/bpo-call-center.jpg";
import lendingFinance from "@/assets/lending-finance.jpg";
import cxAgent from "@/assets/cx-agent.jpg";
import salesGrowth from "@/assets/sales-growth.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Axentra Nexus BPO, Lending & Business Solutions" },
      { name: "description", content: "BPO, Lending & Financial Services Support, Customer Experience Management, and Sales & Collections — delivered with precision and scale." },
      { property: "og:title", content: "Services — Axentra Nexus" },
      { property: "og:description", content: "End-to-end BPO, lending, CX and sales solutions for the modern enterprise." },
      { property: "og:image", content: bpoCallCenter },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Business Process Outsourcing",
    desc: "Streamline operations across customer support, back office, document processing and compliance with our enterprise-grade BPO programs.",
    bullets: ["24×7 multilingual operations", "Voice, chat, email & social channels", "Document processing & data entry", "Quality and compliance frameworks"],
    icon: Headphones,
    image: bpoCallCenter,
    to: "/services/inbound-customer-support",
  },
  {
    title: "Lending & Financial Services Support",
    desc: "Purpose-built operations for banks, NBFCs and fintechs — from origination and underwriting support to KYC, servicing and collections.",
    bullets: ["Loan origination & underwriting support", "KYC, AML & verification", "Customer servicing & disbursal ops", "Early-stage and late-stage collections"],
    icon: Banknote,
    image: lendingFinance,
    to: "/services/lending",
  },
  {
    title: "Customer Experience Management",
    desc: "Omnichannel CX programs designed around your customer journey — measured by NPS, CSAT and lifetime value, not just call volumes.",
    bullets: ["Journey mapping & CX design", "Omnichannel contact center", "Voice of customer analytics", "AI-assisted agent workflows"],
    icon: Sparkles,
    image: cxAgent,
    to: "/services/digital-process",
  },
  {
    title: "Sales & Collections",
    desc: "Revenue and recovery operations powered by data, compliant outreach and high-performing teams trained for your products.",
    bullets: ["Inside sales & lead qualification", "Cross-sell & upsell programs", "Compliant collections operations", "Performance dashboards & reporting"],
    icon: TrendingUp,
    image: salesGrowth,
    to: "/services/outbound-sales",
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        <div className="absolute inset-0 gradient-brand opacity-20" />
        <div className="container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Our Services
          </span>
          <h1 className="heading-1 text-white text-7xl">
            <span className="text-white">Comprehensive</span> <span className="text-gradient-brand">Business Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-background/95">
            Four integrated practices, delivered by Axentra Nexus — a unit of Dharitha Nexus LLP — designed to scale your operations with precision, speed and intelligence.
          </p>
        </div>
      </section>

      {services.map((s, idx) => {
        const Icon = s.icon;
        const reverse = idx % 2 === 1;
        return (
          <section key={s.title} className={`section-padding ${idx % 2 === 0 ? "bg-background" : "gradient-brand-soft"}`}>
            <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={reverse ? "lg:order-2" : ""}>
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="heading-2">{s.title}</h2>
                <p className="body-text mt-4">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">✓</span>
                      <span className="text-base text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to={s.to} className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]">
                  Explore in detail <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
                <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" />
                <img src={s.image} alt={s.title} width={1280} height={896} loading="lazy" className="relative w-full rounded-3xl object-cover shadow-xl" />
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative overflow-hidden gradient-brand text-primary-foreground">
        <div className="container-max px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Need a Customized Solution?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">Our experts will design a tailored engagement model for your business.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]">
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
