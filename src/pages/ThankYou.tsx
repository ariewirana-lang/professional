import { ShieldCheck, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    num: "01.",
    title: "PROFILE REVIEW",
    desc: "Our committee assesses each applicant's background and values for alignment.",
  },
  {
    num: "02.",
    title: "PERSONAL INTRODUCTION",
    desc: "Successful applicants are invited for a discreet consultation with our matchmakers.",
  },
  {
    num: "03.",
    title: "BESPOKE MATCHING",
    desc: "Curated introductions based on unparalleled emotional and lifestyle intelligence.",
  },
];

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Header */}
        <p
          className="text-[10px] font-sans uppercase tracking-[0.3em] mb-6"
          style={{ color: "hsl(var(--gold))" }}
        >
          Private Invitation Only
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-4">
          Thank You for Your Application
        </h1>
        <div className="w-12 h-[3px] bg-primary/40 mb-8" />
        <p className="font-sans text-sm md:text-base text-muted-foreground text-center max-w-lg leading-relaxed mb-16">
          Our membership committee is currently reviewing your profile to ensure
          the highest level of compatibility within our private circle.
        </p>

        {/* Journey steps */}
        <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-foreground mb-8">
          Your Journey Ahead
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full mb-16">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-border pt-6">
              <p
                className="text-xs font-sans mb-2"
                style={{ color: "hsl(var(--gold))" }}
              >
                {step.num}
              </p>
              <h3 className="text-sm font-sans font-semibold uppercase tracking-[0.1em] mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Return button */}
        <button
          onClick={() => navigate("/")}
          className="px-12 py-4 text-xs font-sans font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300"
          style={{ backgroundColor: "hsl(var(--gold))" }}
        >
          Return to Home
        </button>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-8 mt-12 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="text-[9px] font-sans uppercase tracking-wider">
              Identity Verified
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-[9px] font-sans uppercase tracking-wider">
              Encrypted Secure
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 md:px-12 py-8 text-[9px] font-sans uppercase tracking-wider text-muted-foreground">
        <span>© MMXXVI</span>
        <span>Privacy Accord</span>
      </div>
    </div>
  );
};

export default ThankYou;
