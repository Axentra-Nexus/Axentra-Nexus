const clients = [
  {
    name: "Shipradvik Corporation",
    industry: "Banking · KYC & Lending",
    icon: "🏦",
  },
  {
    name: "Free Mobile",
    industry: "Telecom · English Chat Support",
    icon: "📡",
  },
  {
    name: "Aeroitalia",
    industry: "Aviation · Complete Support Services",
    icon: "✈️",
  },
];

// Duplicate for seamless infinite scroll
const tickerItems = [...clients, ...clients, ...clients];

export default function ClientTicker() {
  return (
    <div className="w-full mt-10">
      {/* Header */}
      <p className="text-center text-sm text-white/50 uppercase tracking-widest mb-6 font-medium">
        Trusted by Global Clients · 170 Active Seats
      </p>

      {/* Ticker wrapper */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0a0f0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0a0f0a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-ticker w-max">
          {tickerItems.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4 min-w-[280px] backdrop-blur-sm"
            >
              <span className="text-3xl">{client.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">
                  {client.name}
                </p>
                <p className="text-white/50 text-xs mt-0.5">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
