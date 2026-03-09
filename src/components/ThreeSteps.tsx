import { Monitor, MessageSquareText, UtensilsCrossed, Zap, ShieldCheck, Wine } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Monitor,
    iconBg: "bg-primary",
    title: "Create Your Private Profile",
    description:
      "Start instantly. Your data stays private and secure while our algorithm learns about your unique values and preferences.",
    tag: "TAKES 2 MINUTES",
    tagIcon: Zap,
  },
  {
    step: "02",
    icon: MessageSquareText,
    iconBg: "bg-primary",
    title: "Meet Your Matchmaker",
    description:
      "Get paired with a professional consultant who hand-selects matches based on true compatibility, not just a swipe.",
    tag: "HUMAN-LED MATCHING",
    tagIcon: ShieldCheck,
  },
  {
    step: "03",
    icon: UtensilsCrossed,
    iconBg: "bg-gold",
    title: "Go on a Curated Date",
    description:
      "Skip the small talk. Enjoy a seamless experience at a hand-picked venue curated specifically for your first meeting.",
    tag: "PREMIUM VENUES",
    tagIcon: Wine,
  },
];

const ThreeSteps = () => {
  return (
    <section className="pt-24 md:pt-32 pb-[35px] bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6">
            THE FUTURE OF DATING
          </span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Three Easy Steps to Your
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif italic text-gold leading-tight">
            Next Great Date
          </h2>
        </div>
        <p className="text-center font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-20 leading-relaxed">
          We've combined the speed of digital profiles with the intuition of
          professional matchmakers to create a dating experience that actually works.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-background rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Icon + Step Number */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-12 h-12 ${step.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-serif text-muted/60 leading-none">
                    {step.step}
                  </span>
                </div>

                {/* Title + Description */}
                <h3 className="font-serif text-lg md:text-xl mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-6 border-t border-border">
                <span className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground">
                  {step.tag}
                  <step.tagIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
