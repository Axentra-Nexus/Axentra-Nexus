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

import { LazyVideo } from "@/components/LazyVideo";

import heroOffice from "@/assets/hero-office.jpg";
import bpoCallCenter from "@/assets/bpo-call-center.jpg";
import lendingFinance from "@/assets/lending-finance.jpg";
import cxAgent from "@/assets/cx-agent.jpg";
import salesGrowth from "@/assets/sales-growth.jpg";
import leadershipTeam from "@/assets/leadership-team.jpg";
import globalConnectivity from "@/assets/global-connectivity.jpg";
import partnership from "@/assets/partnership.jpg";

import aboutVideo from "@/assets/about-video.mp4.asset.json";
import bpoVideo from "@/assets/bpo-video.mp4.asset.json";
import lendingVideo from "@/assets/lending-video.mp4.asset.json";
import cxVideo from "@/assets/cx-video.mp4.asset.json";
import salesVideo from "@/assets/sales-video.mp4.asset.json";
import globalVideo from "@/assets/global-video.mp4.asset.json";
import partnershipVideo from "@/assets/partnership-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Axentra Nexus — Premium BPO, Lending & Business Solutions",
      },
      {
        name: "description",
        content:
          "Scaling businesses with precision, speed and intelligence. BPO, Lending, Customer Experience and Growth Solutions for the modern enterprise.",
      },
      {
        property: "og:title",
        content:
          "Axentra Nexus — Premium BPO, Lending & Business Solutions",
      },
      {
        property: "og:description",
        content:
          "BPO | Lending | Customer Experience | Growth Solutions",
      },
      {
        property: "og:image",
        content: heroOffice,
      },
      {
        name: "twitter:image",
        content: heroOffice,
      },
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
    video: bpoVideo.url,
    to: "/services/inbound-customer-support",
  },
  {
    title: "Lending & Financial Services",
    desc: "Specialized loan operations, underwriting support, KYC, and collections for banks, NBFCs and fintechs.",
    icon: Banknote,
    image: lendingFinance,
    video: lendingVideo.url,
    to: "/services/lending",
  },
  {
    title: "Customer Experience Management",
    desc: "Omnichannel CX programs that turn every customer interaction into a measurable loyalty moment.",
    icon: Sparkles,
    image: cxAgent,
    video: cxVideo.url,
    to: "/services/digital-process",
  },
  {
    title: "Sales & Collections",
    desc: "Compliant, data-driven outbound campaigns that grow revenue and accelerate recoveries.",
    icon: TrendingUp,
    image: salesGrowth,
    video: salesVideo.url,
    to: "/services/outbound-sales",
  },
] as const;

const industries = [
  {
    title: "BFSI",
    desc: "Banks, insurance & NBFCs",
    to: "/industries/bfsi",
  },
  {
    title: "E-commerce",
    desc: "D2C & marketplaces",
    to: "/industries/ecommerce",
  },
  {
    title: "Fintech",
    desc: "Lending & payments",
    to: "/industries/healthcare",
  },
  {
    title: "Telecom",
    desc: "Carriers & ISPs",
    to: "/industries/telecom",
  },
] as const;

const trust = [
  {
    icon: ShieldCheck,
    value: "Day 1",
    label: "Founder-Led Delivery",
  },
  {
    icon: Users,
    value: "Hand-Picked",
    label: "Premium Talent Pool",
  },
  {
    icon: Layers,
    value: "24×7",
    label: "Always-On Operations",
  },
  {
    icon: Cpu,
    value: "AI-First",
    label: "Tech-Driven Processes",
  },
] as const;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
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
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Premium Business Solutions Partner
            </span>

            <h1 className="heading-1 text-white text-7xl leading-[1.1] tracking-tight drop-shadow-md sm:text-5xl lg:text-7xl">
              <span className="text-white">
                Scaling Businesses with
              </span>{" "}
              <span className="text-gradient-brand">
                Precision, Speed
              </span>{" "}
              <span className="text-white">
                and Intelligence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/90 sm:text-xl">
              BPO <span className="mx-2 opacity-60">|</span>
              Lending <span className="mx-2 opacity-60">|</span>
              Customer Experience{" "}
              <span className="mx-2 opacity-60">|</span>
              Growth Solutions
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full gradient-brand px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
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

      {/* ABOUT */}
      <section className="section-padding bg-background">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              About Axentra Nexus
            </span>

            <h2 className="heading-2 mt-2">
              A next-generation business solutions company helping organizations{" "}
              <span className="text-gradient-brand">
                scale efficiently
              </span>
            </h2>

            <p className="body-text mt-6">
              Axentra Nexus — a unit of Dharitha Nexus LLP — partners with
              banks, fintechs, e-commerce leaders and high-growth enterprises
              to design, run and optimize the operations that power their
              business.
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
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" />

            <LazyVideo
              src={aboutVideo.url}
              poster={leadershipTeam}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding gradient-brand-soft">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              What We Do
            </span>

            <h2 className="heading-2 mt-2">
              Four pillars.{" "}
              <span className="text-gradient-brand">
                One growth engine.
              </span>
            </h2>

            <p className="body-text mt-4">
              Built for enterprises that demand precision, speed and intelligence at scale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
