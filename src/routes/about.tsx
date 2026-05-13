import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, ArrowRight, Award, Sparkles, Users } from "lucide-react";
import leadershipTeam from "@/assets/leadership-team.jpg";
import partnership from "@/assets/partnership.jpg";
import bpoCallCenter from "@/assets/bpo-call-center.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Axentra Nexus — Vision, Mission & Leadership" },
      { name: "description", content: "Axentra Nexus is a premium BPO, lending and business solutions partner — built to scale enterprises with precision, speed and intelligence." },
      { property: "og:title", content: "About Axentra Nexus" },
      { property: "og:description", content: "Vision, mission and the people scaling enterprises with precision and intelligence." },
      { property: "og:image", content: leadershipTeam },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Excellence", desc: "Six Sigma rigor and a relentless pursuit of better — in every process, every day." },
  { icon: Sparkles, title: "Innovation", desc: "AI, automation and analytics embedded into operations — not bolted on." },
  { icon: Users, title: "People First", desc: "We invest in talent, training and culture to keep our delivery world-class." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        <div className="absolute inset-0 gradient-brand opacity-15" />
        <div className="container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            About Us
          </span>
          <h1 className="heading-1 text-white text-7xl">
            <span className="text-white">A premium operating partner for the</span> <span className="text-gradient-brand">modern enterprise</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-background/95">
            Axentra Nexus — a brand owned and operated by Dharitha Nexus LLP — is a next-generation business solutions company helping organizations scale efficiently across BPO, lending and customer experience.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" />
            <img src={leadershipTeam} alt="Axentra Nexus leadership team" width={1280} height={896} loading="lazy" className="relative w-full rounded-3xl object-cover shadow-xl" />
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="heading-2 mt-2">Built by operators, <span className="text-gradient-brand">for operators.</span></h2>
            <p className="body-text mt-4">
              Axentra Nexus — a unit of Dharitha Nexus LLP — was founded with a clear conviction: enterprises deserve an outsourcing partner that thinks like an owner. We bring together leaders from BFSI, fintech, e-commerce and customer experience to architect operating models that don't just cut cost — they create competitive advantage.
            </p>
            <p className="body-text mt-4">
              Operating under the stewardship of Dharitha Nexus LLP, we're built for high-growth brands and regulated enterprises with one playbook: premium talent, deep domain training, intelligent technology and an obsession with measurable outcomes — and we're ready to make your business our flagship engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding gradient-brand-soft">
        <div className="container-max grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-md">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="body-text mt-4">
              To empower enterprises with intelligent, technology-enabled operations — so they can focus on growth, innovation and the customers they serve.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-primary-foreground shadow-md">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="body-text mt-4">
              To be the most trusted operating partner for high-growth and regulated enterprises — globally recognized for precision, speed and intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              What Drives Us
            </span>
            <h2 className="heading-2 mt-2">Our <span className="text-gradient-brand">Core Values</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-hover">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="heading-3">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              );
            })}
            <div className="md:col-span-3 grid items-center gap-12 lg:grid-cols-2 lg:gap-20 mt-8">
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Our Culture
                </span>
                <h3 className="heading-2 mt-2">A <span className="text-gradient-brand">people-first</span> operating model</h3>
                <p className="body-text mt-4">
                  Our delivery quality starts with our people. We hire for ownership, train for depth and reward outcomes — building teams ready to run mission-critical operations from day one.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Inclusion, well-being and continuous learning at the core.</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-10 blur-2xl" />
                <img src={bpoCallCenter} alt="Axentra Nexus operations team" width={1280} height={896} loading="lazy" className="relative w-full rounded-3xl object-cover shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP / Trademark Notice */}
      <section className="bg-background pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Intellectual Property Notice
            </span>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              All trademarks, trade names, logos, brand identities, and marketing assets associated with the name <span className="font-semibold text-foreground">"Axentra Nexus"</span>, whether registered or unregistered, shall be the exclusive intellectual property of <span className="font-semibold text-foreground">DHARITHA NEXUS LLP</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={partnership} alt="Business partnership" width={1920} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-brand opacity-95" />
        <div className="container-max relative px-4 py-20 text-center text-primary-foreground sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Let's Build Something Great Together</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Discover how Axentra Nexus can transform your operations.</p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
