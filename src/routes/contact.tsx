import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import partnership from "@/assets/partnership.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Axentra Nexus — Let's Talk Business" },
      { name: "description", content: "Talk to Axentra Nexus about BPO, lending operations and customer experience. Email business@axentra.co.in or call +91-9113513387." },
      { property: "og:title", content: "Contact Axentra Nexus" },
      { property: "og:description", content: "Reach our team for tailored business solutions." },
      { property: "og:image", content: partnership },
    ],
  }),
  component: ContactPage,
});

const RECIPIENT = "business@axentra.co.in";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        <div className="absolute inset-0 gradient-brand opacity-15" />
        <div className="container-max relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Contact Us
          </span>
          <h1 className="heading-1 text-white text-7xl">
            <span className="text-white">Let's</span> <span className="text-gradient-brand">start a conversation</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-background/95">
            Whether you're optimizing operations, launching a new product, or scaling a customer experience program — the Axentra Nexus team, a unit of Dharitha Nexus LLP, is ready to help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="heading-2">Get in Touch</h2>
            <p className="body-text mt-4">Fill out the form and our team will get back to you within 24 hours.</p>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${RECIPIENT}`} className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="mt-0.5 font-semibold text-foreground group-hover:text-primary">{RECIPIENT}</div>
                </div>
              </a>

              <a href="tel:+919113513387" className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</div>
                  <div className="mt-0.5 font-semibold text-foreground group-hover:text-primary">+91-9113513387</div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-brand text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Headquarters</div>
                  <div className="mt-0.5 font-semibold text-foreground">No 23,1st floor, 12th Main Rd,near BDA Complex, Above Punjab National Bank, HSR Layout, Bangalore 560102</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-md sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" />
                  <h3 className="mt-5 text-2xl font-bold text-foreground">Message Ready to Send</h3>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    Your email client should have opened with your message pre-filled to {RECIPIENT}. If not, please email us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">Full Name</label>
                    <input id="name" name="name" type="text" required className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">Phone</label>
                      <input id="phone" name="phone" type="tel" className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">Email</label>
                      <input id="email" name="email" type="email" required className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us about your business and what you'd like to explore..." />
                  </div>
                  <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.01]">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, your default email app will open a pre-filled message to {RECIPIENT}.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
