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
  component: HomePage,
});

const services = [/* unchanged */];
const industries = [/* unchanged */];
const trust = [/* unchanged */];

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
        Customer Experience <span className="mx-2 opacity-60">|</span>
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
      {/* KEEP REST OF YOUR PAGE EXACT SAME */}
    </>
  );
}

export default HomePage;
