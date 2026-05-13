import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Briefcase, MapPin, Clock, CheckCircle2, Send, X, Sparkles, Users, TrendingUp } from "lucide-react";
import { submitApplication } from "@/server/careers.functions";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Axentra Nexus — Join Our Team" },
      { name: "description", content: "Explore open roles at Axentra Nexus. Join a fast-growing BPO and business solutions team scaling enterprises with precision and intelligence." },
      { property: "og:title", content: "Careers at Axentra Nexus" },
      { property: "og:description", content: "Open positions in operations, customer support and team leadership." },
    ],
  }),
  component: CareersPage,
});

type Opening = {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const openings: Opening[] = [
  {
    id: "csr-email-chat",
    title: "Customer Support Representative (Email / Chat)",
    type: "Full-time",
    location: "Bengaluru, India / Hybrid",
    experience: "0 – 2 years",
    summary:
      "Be the first point of contact for our clients' customers across email and chat channels. Deliver empathetic, accurate and timely support that turns every interaction into a moment of trust.",
    responsibilities: [
      "Handle inbound customer queries over email and live chat with high quality and within defined SLAs.",
      "Investigate, troubleshoot and resolve product, account and transactional issues end-to-end.",
      "Maintain accurate records of conversations, resolutions and follow-ups in the CRM/ticketing tool.",
      "Collaborate with internal teams (operations, tech, billing) to escalate and close complex cases.",
      "Identify recurring issues and share insights to improve processes and customer experience.",
    ],
    requirements: [
      "Excellent written English with strong grammar, tone and structure.",
      "Comfortable typing 35+ WPM and managing multiple chats / tickets in parallel.",
      "Customer-first mindset with strong ownership and problem-solving skills.",
      "Basic familiarity with CRM, ticketing or helpdesk tools (Freshdesk, Zendesk, Zoho, etc.) is a plus.",
      "Willingness to work in rotational shifts including weekends as per process requirements.",
    ],
  },
  {
    id: "team-lead-ops",
    title: "Team Lead — Operations",
    type: "Full-time",
    location: "Bengaluru, India",
    experience: "3 – 6 years",
    summary:
      "Lead a team of 15–25 associates across voice / non-voice processes. Own daily performance, coaching and client deliverables while building a high-trust, high-performance culture.",
    responsibilities: [
      "Drive daily, weekly and monthly KPIs — SLA, AHT, CSAT, quality and shrinkage — for your team.",
      "Coach, mentor and develop associates through 1:1s, side-by-sides, audits and feedback huddles.",
      "Run shift briefings, manage rosters, leaves and real-time floor management.",
      "Be the primary point of contact for the client on operational reviews, escalations and action plans.",
      "Identify process gaps, drive RCA on misses and own improvement initiatives with measurable outcomes.",
      "Partner with Quality, Training and WFM to ensure readiness, calibration and continuous learning.",
    ],
    requirements: [
      "3+ years in BPO/contact center operations with at least 1 year as a Team Lead or SME handling a team.",
      "Strong people leadership, conflict resolution and stakeholder management skills.",
      "Hands-on with performance dashboards, MS Excel / Google Sheets and basic data analysis.",
      "Experience presenting in client / business reviews (WBR / MBR) is preferred.",
      "Graduate in any discipline; flexible to work in rotational shifts as per process needs.",
    ],
  },
  {
    id: "quality-analyst",
    title: "Quality Analyst — Customer Operations",
    type: "Full-time",
    location: "Bengaluru, India",
    experience: "2 – 4 years",
    summary:
      "Drive customer experience quality across voice, email and chat channels. Audit interactions, identify trends and partner with Operations and Training to lift CSAT, FCR and compliance scores.",
    responsibilities: [
      "Audit calls, emails and chats against defined quality and compliance frameworks.",
      "Publish daily, weekly and monthly quality dashboards with trends, fatal errors and improvement areas.",
      "Conduct calibration sessions with Operations, Training and Client teams to ensure scoring consistency.",
      "Deliver targeted feedback and coaching to associates and Team Leads on quality misses.",
      "Support RCA and CAPA for CSAT / NPS dips, escalations and compliance breaches.",
    ],
    requirements: [
      "2+ years as a Quality Analyst / Auditor in a BPO or customer operations environment.",
      "Strong understanding of quality frameworks (COPC, Six Sigma basics) and CSAT / NPS drivers.",
      "Excellent verbal and written communication; comfortable giving constructive feedback.",
      "Proficient in Excel / Google Sheets — pivots, charts and basic formulas.",
      "Graduate in any discipline; certifications in Quality / Lean Six Sigma are a plus.",
    ],
  },
];

function CareersPage() {
  const [activeRole, setActiveRole] = useState<Opening | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        <div className="absolute inset-0 gradient-brand opacity-15" />
        <div className="container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Careers
          </span>
          <h1 className="heading-1 text-white text-7xl">
            <span className="text-white">Build your career with</span> <span className="text-gradient-brand">Axentra Nexus</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-background/95">
            We're a fast-growing BPO and business solutions team scaling enterprises with precision, speed and intelligence. If you love solving real problems for real customers — you'll feel right at home here.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-max grid gap-8 sm:grid-cols-3">
          {[
            { icon: Sparkles, title: "Meaningful work", desc: "Own outcomes that move the needle for our clients and their customers." },
            { icon: Users, title: "People-first culture", desc: "Coaching, growth conversations and a leadership team that's actually accessible." },
            { icon: TrendingUp, title: "Career velocity", desc: "Clear progression from agent → SME → TL → Manager based on impact, not tenure." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="openings" className="section-padding bg-background">
        <div className="container-max">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Current Openings
            </span>
            <h2 className="heading-2 mt-2">Open Positions</h2>
            <p className="body-text mt-4">
              We're hiring across operations and customer experience. Find a role that fits and apply in under 2 minutes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {openings.map((role) => (
              <article key={role.id} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{role.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{role.type}</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{role.experience}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Key Responsibilities</h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      {role.responsibilities.slice(0, 3).map((r) => (
                        <li key={r} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{r}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">What We're Looking For</h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      {role.requirements.slice(0, 3).map((r) => (
                        <li key={r} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{r}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActiveRole(role)}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.02]"
                  >
                    Apply Now <Send className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeRole && <ApplyModal role={activeRole} onClose={() => setActiveRole(null)} />}
    </>
  );
}

function ApplyModal({ role, onClose }: { role: Opening; onClose: () => void }) {
  const submit = useServerFn(submitApplication);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      await submit({
        data: {
          position: role.title,
          fullName: String(fd.get("fullName") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          experience: String(fd.get("experience") || ""),
          location: String(fd.get("location") || ""),
          coverLetter: String(fd.get("coverLetter") || ""),
        },
      });
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Sorry, we couldn't submit your application. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl bg-card shadow-2xl sm:rounded-3xl">
        <div className="flex items-start justify-between border-b border-border bg-muted/40 px-6 py-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Apply for</div>
            <h3 className="mt-1 text-lg font-bold text-foreground">{role.title}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
          {done ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h4 className="mt-5 text-2xl font-bold text-foreground">Application received</h4>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Thanks for applying to <strong>{role.title}</strong>. Our team will review your details and get back to you shortly.
              </p>
              <button onClick={onClose} className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:bg-muted">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-foreground">Full Name</label>
                  <input id="fullName" name="fullName" type="text" required maxLength={120} className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">Email</label>
                  <input id="email" name="email" type="email" required maxLength={255} className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">Phone</label>
                  <input id="phone" name="phone" type="tel" required maxLength={30} className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="experience" className="mb-1.5 block text-sm font-semibold text-foreground">Total Experience</label>
                  <input id="experience" name="experience" type="text" required maxLength={60} className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. 2 years" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-foreground">Current Location</label>
                  <input id="location" name="location" type="text" maxLength={120} className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="City, State" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="coverLetter" className="mb-1.5 block text-sm font-semibold text-foreground">Why are you a good fit? <span className="font-normal text-muted-foreground">(optional)</span></label>
                  <textarea id="coverLetter" name="coverLetter" rows={4} maxLength={3000} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us briefly about your relevant experience..." />
                </div>
              </div>

              {error && <p className="text-sm font-medium text-destructive">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : <>Submit Application <Send className="h-4 w-4" /></>}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted by our recruitment team about this role.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
