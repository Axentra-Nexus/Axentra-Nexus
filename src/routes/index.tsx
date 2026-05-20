import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Headphones,
  Banknote,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Users,
  Layers,
  Cpu,
  Globe2,
  BarChart3,
} from "lucide-react";

// Static image assets (kept from original)
import heroOffice from "@/assets/hero-office.jpg";
import bpoCallCenter from "@/assets/bpo-call-center.jpg";
import lendingFinance from "@/assets/lending-finance.jpg";
import cxAgent from "@/assets/cx-agent.jpg";
import salesGrowth from "@/assets/sales-growth.jpg";
import leadershipTeam from "@/assets/leadership-team.jpg";
import globalConnectivity from "@/assets/global-connectivity.jpg";
import partnership from "@/assets/partnership.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axentra Nexus — Premium BPO, Lending & Business Solutions" },
      {
        name: "description",
        content:
          "Scaling businesses with precision, speed and intelligence. BPO, Lending, Customer Experience and Growth Solutions for the modern enterprise.",
      },
      {
        property: "og:title",
        content: "Axentra Nexus — Premium BPO, Lending & Business Solutions",
      },
      {
        property: "og:description",
        content: "BPO | Lending | Customer Experience | Growth Solutions",
      },
      { property: "og:image", content: heroOffice },
      { name: "twitter:image", content: heroOffice },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Business Process Outsourcing",
    desc: "End-to-end BPO services that streamline operations, reduce costs, and free your teams to focus on growth.",
    icon: Headphones,
    image: bpoCallCenter,
    to: "/services/inbound-customer-support",
  },
  {
    title: "Lending & Financial Services",
    desc: "Specialized loan operations, underwriting support, KYC, and collections for banks, NBFCs and fintechs.",
    icon: Banknote,
    image: lendingFinance,
    to: "/services/lending",
  },
  {
    title: "Customer Experience Management",
    desc: "Omnichannel CX programs that turn every customer interaction into a measurable loyalty moment.",
    icon: Sparkles,
    image: cxAgent,
    to: "/services/digital-process",
  },
  {
    title: "Sales & Collections",
    desc: "Compliant, data-driven outbound campaigns that grow revenue and accelerate recoveries.",
    icon: TrendingUp,
    image: salesGrowth,
    to: "/services/outbound-sales",
  },
] as const;

const industries = [
  { title: "BFSI", desc: "Banks, insurance & NBFCs", to: "/industries/bfsi" },
  { title: "E-commerce", desc: "D2C & marketplaces", to: "/industries/ecommerce" },
  { title: "Fintech", desc: "Lending & payments", to: "/industries/healthcare" },
  { title: "Telecom", desc: "Carriers & ISPs", to: "/industries/telecom" },
] as const;

const trust = [
  { icon: ShieldCheck, value: "Day 1", label: "Founder-Led Delivery" },
  { icon: Users, value: "Hand-Picked", label: "Premium Talent Pool" },
  { icon: Layers, value: "24×7", label: "Always-On Operations" },
  { icon: Cpu, value: "AI-First", label: "Tech-Driven Processes" },
] as const;

function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        {/* Hero video from public folder */}
        <video
          src="/hero.mp4"
          poster={heroOffice}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.02_260)] via-[oklch(0.16_0.02_260/0.85)] to-[oklch(0.16_0.02_260/0.45)]" />
        <div className="container-max relative px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-3xl animate-fade-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-background backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Premium
              Business Solutions Partner
            </span>
            <h1 className="heading-1 text-white leading-[1.1] tracking-tight drop-shadow-md sm:text-5xl lg:text-7xl">
              <span className="text-white">Scaling Businesses with</span>{" "}
              <span className="text-gradient-brand">Precision, Speed</span>{" "}
              <span className="text-white">and Intelligence</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/90 sm:text-xl">
              BPO <span className="mx-2 opacity-60">|</span> Lending{" "}
              <span className="mx-2 opacity-60">|</span> Customer Experience{" "}
              <span className="mx-2 opacity-60">|</span> Growth Solutions
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full gradient-brand px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                Partner With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center rounded-full border border-background/30 bg-background/5 px-8 text-sm font-semibold backdrop-blur transition-colors hover:bg-background/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              About Axentra Nexus
            </span>
            <h2 className="heading-2 mt-2">
              A next-generation business solutions company helping organizations{" "}
              <span className="text-gradient-brand">scale efficiently</span>
            </h2>
            <p className="body-text mt-6">
              Axentra Nexus — a unit of Dharitha Nexus LLP — partners with
              banks, fintechs, e-commerce leaders and high-growth enterprises to
              design, run and optimize the operations that power their business.
              We blend domain expertise, premium talent and intelligent
              automation to deliver outcomes that move the needle.
            </p>
            <p className="body-text mt-4">
              From customer experience to lending operations and back-office
              excellence — we partner with ambitious leadership teams ready to
              scale with confidence.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src={leadershipTeam}
                alt="Axentra Nexus leadership team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="section-padding gradient-brand-soft">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              What We Do
            </span>
            <h2 className="heading-2 mt-2">
              Four pillars.{" "}
              <span className="text-gradient-brand">One growth engine.</span>
            </h2>
            <p className="body-text mt-4">
              Built for enterprises that demand precision, speed and intelligence
              at scale.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.02_260/0.6)] to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/95 text-primary shadow-md backdrop-blur">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src={salesGrowth}
                alt="Sales and growth"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="heading-2 mt-2">
              Enterprise-grade outcomes,{" "}
              <span className="text-gradient-brand">
                delivered with discipline.
              </span>
            </h2>
            <p className="body-text mt-4">
              We don't just run processes — we engineer them. Every engagement
              is built on rigorous SLAs, premium talent and a tech-first
              operating model.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trust.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-brand-blue">
                        {t.value}
                      </div>
                      <div className="mt-0.5 text-sm text-muted-foreground">
                        {t.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="section-padding gradient-brand-soft">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Industries Served
            </span>
            <h2 className="heading-2 mt-2">
              Deep expertise across{" "}
              <span className="text-gradient-brand">
                regulated, fast-moving sectors.
              </span>
            </h2>
            <p className="body-text mt-4">
              We combine sector know-how with proven playbooks to deliver
              measurable impact from day one.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((ind) => (
                <Link
                  key={ind.title}
                  to={ind.to}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <div className="font-bold text-foreground group-hover:text-primary">
                      {ind.title}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {ind.desc}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-15 blur-2xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src={globalConnectivity}
                alt="Global connectivity"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-2xl ring-1 ring-border sm:block">
              <div className="flex items-center gap-3">
                <Globe2 className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-extrabold text-brand-blue">
                    Global
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Delivery-Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={partnership}
          alt="Partnership"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-brand opacity-95" />
        <div className="container-max relative px-4 py-20 text-center text-primary-foreground sm:px-6 sm:py-28 lg:px-8">
          <BarChart3 className="mx-auto mb-6 h-12 w-12 opacity-90" />
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Let's Build Scalable Operations Together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            Talk to our team about a tailored engagement model designed around
            your growth goals.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
