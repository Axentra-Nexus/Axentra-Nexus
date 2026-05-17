import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Mail, ArrowRight, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import ashwini from "@/assets/team-ashwini_v2.jpg";
import saivijay from "@/assets/team-saivijay.jpg";
import nithin from "@/assets/team-nithin.jpg";
import rohith from "@/assets/team-rohith.jpg";
import leadershipTeam from "@/assets/leadership-team.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Founders & Directors | Axentra Nexus" },
      { name: "description", content: "Meet the founders and directors of Axentra Nexus — seasoned leaders with 40+ combined years across BPO, Banking, Fintech, E-commerce and Customer Experience." },
      { property: "og:title", content: "Meet Our Team — Axentra Nexus Leadership" },
      { property: "og:description", content: "The founders and directors building Axentra Nexus — decades of cross-industry expertise in BPO, lending, fintech and CX." },
      { property: "og:image", content: leadershipTeam },
      { name: "twitter:image", content: leadershipTeam },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  image: string;
  years: string;
  short: string;
  bio: string;
  expertise: string[];
  education?: string;
};

const founders: Member[] = [
 {
    name: "Nithin Rao",
    role: "Co-Founder",
    image: nithin,
    years: "14+ yrs",
    short: "Banking, Finance, E-commerce & BPO",
    bio: "An MBA in Systems & Operations Management, Nithin has spent over fourteen years building and leading large-scale operations across Banking, Financial Services, E-commerce and BPO. He has architected onshore and offshore delivery models, run multi-hundred-seat contact centers, and led digital transformation programs that combine process rigor with measurable cost-to-serve impact. His operating playbook — built on Six Sigma discipline, workforce analytics and customer-obsessed design — anchors how Axentra Nexus designs every engagement, from pilot to enterprise scale.",
    expertise: ["Banking & Financial Services", "BPO Operations", "E-commerce Support", "Six Sigma & Process Design", "Workforce Management", "Digital Transformation"],
    education: "MBA — Systems & Operations Management",
  },
  {
    name: "C Sai Vijay Rahul",
    role: "Co-Founder",
    image: saivijay,
    years: "8+ yrs",
    short: "Business Management & Project Delivery",
    bio: "Sai Vijay's career spans the music industry, hospitality business management and project management consulting. This unique blend gives him a sharp eye for client experience, brand-led storytelling and disciplined project execution — the cultural backbone of Axentra Nexus.",
    expertise: ["Business Management", "Hospitality Operations", "Project Management", "Brand & Culture", "Client Delivery"],
  },
];

const directors: Member[] = [
  {
    name: "Ashwini Holla",
    role: "Director",
    image: ashwini,
    years: "10+ yrs",
    short: "Customer Experience & Business Support",
    bio: "Ashwini brings over a decade of hands-on leadership in business support and customer experience operations. She has scaled CX programs across E-commerce, Apparel and Marketing — building teams that consistently deliver measurable improvements in CSAT, retention and operational efficiency.",
    expertise: ["E-commerce Operations", "Apparel & Retail", "Marketing Ops", "Customer Experience", "Team Scaling"],
  },
  {
    name: "Rohith C",
    role: "Director",
    image: rohith,
    years: "9+ yrs",
    short: "Banking & Fintech Strategy",
    bio: "An MBA from Italy with a global outlook, Rohith has spent nine years across Banking and Fintech — partnering with lenders, payment platforms and digital-first NBFCs to build scalable customer and risk operations. He brings international best practices and a sharp commercial lens to every Axentra engagement.",
    expertise: ["Retail & Digital Banking", "Fintech Operations", "Lending & Risk Ops", "International Best Practices", "Strategy & GTM"],
    education: "MBA — Italy",
  },
];

function MemberCard({ member }: { member: Member; featured?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* Photo */}
        <div className="relative shrink-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-card sm:h-32 sm:w-32">
            <img
              src={member.image}
              alt={`${member.name}, ${member.role} at Axentra Nexus`}
              width={256}
              height={256}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
            <Sparkles className="h-2.5 w-2.5" /> {member.years}
          </div>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{member.role}</div>
            <h3 className="mt-1 text-2xl font-bold leading-tight text-foreground">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{member.short}</p>
          </div>

          {member.education && (
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <GraduationCap className="h-3.5 w-3.5" /> {member.education}
            </div>
          )}

          <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              <Briefcase className="h-3.5 w-3.5 text-primary" /> Expertise
            </div>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href="mailto:business@axentra.co.in"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        <div className="absolute inset-0 gradient-brand opacity-15" />
        <div className="container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Our Team
          </span>
          <h1 className="heading-1 text-white text-7xl">
            <span className="text-white">The minds behind</span> <span className="text-gradient-brand">Axentra Nexus</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-background/95">
            A founding team with 40+ combined years across BPO, Banking, Fintech, E-commerce and Customer Experience — building Axentra Nexus, a unit of Dharitha Nexus LLP, to be the operating partner the modern enterprise deserves.
          </p>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { k: "40+", v: "Years combined" },
              { k: "4", v: "Industry verticals" },
              { k: "2", v: "MBAs on the board" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-background/15 bg-background/5 p-4 backdrop-blur">
                <div className="text-3xl font-extrabold text-background">{s.k}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-background/85">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Founders
            </span>
            <h2 className="heading-2 mt-2">The vision, the operators</h2>
            <p className="body-text mt-4">
              The founders set the tone for everything Axentra Nexus stands for — clarity in execution, obsession with client outcomes, and a culture built around the people who do the work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {founders.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding bg-secondary/40">
        <div className="container-max">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Directors
            </span>
            <h2 className="heading-2 mt-2">Senior leadership on the board</h2>
            <p className="body-text mt-4">
              Two seasoned directors with deep delivery experience across Banking, Fintech, E-commerce and BPO — the operating muscle behind every engagement we take on.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {directors.map((m) => (
              <MemberCard key={m.name} member={m} featured />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl bg-[oklch(0.16_0.02_260)] p-10 text-background shadow-xl sm:p-14">
            <div className="absolute inset-0 gradient-brand opacity-20" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold sm:text-4xl">Want to work directly with our founders?</h3>
                <p className="mt-3 text-background/95">
                  As a young, founder-led firm, every early client gets direct access to the leadership team — not a layered account hierarchy.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                Talk to the founders <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
