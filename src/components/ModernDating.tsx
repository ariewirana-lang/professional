import { MonitorSmartphone, Ghost, Cat, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import coupleImage from "@/assets/solution-couple.jpg";

const challenges = [
  {
    icon: MonitorSmartphone,
    title: "Fatiguing Swiping",
    description:
      "Endless swiping through hundreds of profiles, only to receive generic 'hello' messages or no response at all.",
  },
  {
    icon: Ghost,
    title: "Endless Ghosting",
    description:
      "Wasting weeks chatting with people who vanish without warning, leaving you wondering what went wrong.",
  },
  {
    icon: Cat,
    title: "Cat & Mouse Games",
    description:
      "Uncertainty and guessing games that drain your energy instead of building a real, lasting connection.",
  },
];

const solutions = [
  { icon: ShieldCheck, text: "100% Identity-Vetted Singles" },
  { icon: MapPin, text: "Human-Led Matchmaking" },
  { icon: Sparkles, text: "Curated High-Quality Matches" },
];

const ModernDating = () => {
  return (
    <section id="methodology" className="py-[35px] bg-background">
      {/* Header */}
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
            Modern Dating is Exhausting.
            <br />
            Let's Change the Narrative.
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
            Say goodbye to endless swiping and awkward moments. Experience a
            more elegant and convenient way to meet your potential partner.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left – The Challenge */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
            <span className="inline-block text-[10px] font-sans uppercase tracking-[0.2em] border border-border rounded-full px-4 py-1.5 mb-8 text-muted-foreground">
              The Challenge
            </span>
            <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-10">
              The Modern Dating
              <br />
              Dilemma
            </h3>
            <div className="space-y-8">
              {challenges.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg border border-border flex items-center justify-center">
                      <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right – The Solution */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground flex flex-col">
            <span className="inline-block text-[10px] font-sans uppercase tracking-[0.2em] border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-8 text-gold w-fit">
              The Solution
            </span>
            <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-10">
              The Lunch Actually Way
            </h3>
            <div className="space-y-4 mb-8">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl px-6 py-4"
                  >
                    <Icon className="w-5 h-5 text-gold shrink-0" strokeWidth={1.5} />
                    <span className="font-sans text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Couple image */}
            <div className="relative rounded-xl overflow-hidden mt-auto mb-8">
              <img
                src={coupleImage}
                alt="Happy couple at dinner"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-white/90 leading-snug">
                "Finally, a dating experience that values my time and my intentions."
              </p>
            </div>

            <a
              href="#apply"
              className="inline-block text-center bg-gold/20 border border-gold/40 text-primary-foreground font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-lg hover:bg-gold/30 transition-colors w-fit mx-auto"
            >
              Find Your Perfect Match
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center font-sans text-xs text-muted-foreground mt-12">
          Trusted by over 100,000 successful singles across Southeast Asia.
        </p>
      </div>
    </section>
  );
};

export default ModernDating;
