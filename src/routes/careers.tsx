import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

const jobs = [
  {
    title: "Customer Support Representative",
    location: "Remote / Bengaluru",
    type: "Full Time",
  },
  {
    title: "Customer Support Team Lead",
    location: "Bengaluru",
    type: "Full Time",
  },
  {
    title: "Quality Analyst",
    location: "Remote",
    type: "Night Shift",
  },
  {
    title: "Front End Developer Intern",
    location: "Remote",
    type: "Internship",
  },
];

function applyNow(jobTitle: string) {
  const subject = encodeURIComponent(
    `Application for ${jobTitle} - Axentra Nexus`
  );

  const body = encodeURIComponent(`
Full Name:
Phone Number:
Email Address:
Experience:

Applying For:
${jobTitle}

Resume Link:
(Paste Google Drive link here)
  `);

  window.location.href = `mailto:business@axentra.co.in?subject=${subject}&body=${body}`;
}

function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#020817] py-28">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative container-max px-6"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Build your career with{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Axentra Nexus
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Join a fast-growing BPO and customer experience company helping
            enterprises scale operations globally.
          </p>
        </motion.div>
      </section>

      {/* JOBS */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-border bg-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {job.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  Join Axentra Nexus and work with a passionate team delivering
                  customer experience excellence to global clients.
                </p>

                <button
                  onClick={() => applyNow(job.title)}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
