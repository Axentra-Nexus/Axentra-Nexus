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
      { property: "og:image", content: heroOffice },
      { name: "twitter:image", content: heroOffice },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Business Process Outsourcing",
    desc:
      "End-to-end BPO services that streamline operations, reduce costs, and free your teams to focus on growth.",
    icon: Headphones,
    image: bpoCallCenter,
    video: bpoVideo.url,
    to: "/services/inbound-customer-support",
  },
  {
    title: "Lending & Financial Services",
    desc:
      "Specialized loan operations, underwriting support, KYC, and collections for banks, NBFCs and fintechs.",
    icon: Banknote,
    image: lendingFinance,
    video: lendingVideo.url,
    to: "/services/lending",
  },
  {
    title: "Customer Experience Management",
    desc:
      "Omnichannel CX programs that turn every customer interaction into a measurable loyalty moment.",
    icon: Sparkles,
    image: cxAgent,
    video: cxVideo.url,
    to: "/services/digital-process",
  },
  {
    title: "Sales & Collections",
    desc:
      "Compliant, data-driven outbound campaigns that grow revenue and accelerate recoveries.",
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
      <section className="relative min-h-screen overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">

        {/* Background Video */}
        <video
          src="/hero.mp4"
          poster={heroOffice}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-[1.02] opacity-60"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        {/* Glow Effects */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

        {/* Content */}
        <div className="container-max relative flex min-h-screen items-center px-6 py-32 lg:px-8">

          <div className="max-w-4xl animate-fade-up">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Premium Business Solutions Partner
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">

              <span className="block opacity-0 animate-[fadeInUp_0.8s_ease_forwards]">
                Scaling Businesses
              </span>

              <span className="mt-2 block text-gradient-brand opacity-0 animate-[fadeInUp_1s_ease_forwards]">
                With Precision,
              </span>

              <span className="mt-2 block opacity-0 animate-[fadeInUp_1.2s_ease_forwards]">
                Speed & Intelligence
              </span>

            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 opacity-0 animate-[fadeInUp_1.4s_ease_forwards] sm:text-xl lg:text-2xl">
              BPO <span className="mx-3 opacity-40">|</span>
              Lending <span className="mx-3 opacity-40">|</span>
              Customer Experience <span className="mx-3 opacity-40">|</span>
              Growth Solutions
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5 opacity-0 animate-[fadeInUp_1.6s_ease_forwards]">

              <Link
                to="/contact"
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-primary px-10 text-sm font-bold text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
              >
                Partner With Us
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex h-14 items-center rounded-full border border-white/20 bg-white/5 px-10 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Explore Services
              </Link>

            </div>

            {/* Metrics */}
            <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4 opacity-0 animate-[fadeInUp_1.8s_ease_forwards]">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white lg:text-3xl">
                  24×7
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  Operations
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white lg:text-3xl">
                  AI
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  Driven Processes
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white lg:text-3xl">
                  Global
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  Delivery Ready
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-white lg:text-3xl">
                  Premium
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  Talent Pool
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/30 p-2">
            <div className="h-3 w-1 rounded-full bg-white/80" />
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
              Axentra Nexus — a unit of Dharitha Nexus LLP — partners with banks,
              fintechs, e-commerce leaders and high-growth enterprises to design,
              run and optimize the operations that power their business.
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
    </>
  );
}

export default HomePage;
