import coupleImage from "@/assets/why-la-couple.jpg";
import { Check } from "lucide-react";

const reasons = [
  "22 years of matchmaking expertise",
  "Hand-picked, verified profiles only",
  "Dedicated personal matchmaker",
  "87% marital success rate",
  "Confidential and discreet process",
  "Post-date feedback and coaching",
];

const WhyLunchActually = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <img
              src={coupleImage}
              alt="Happy couple"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-6">
              The Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Why Lunch Actually?
            </h2>
            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span className="font-sans text-sm text-foreground">{reason}</span>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 mt-10 hover:bg-primary/90 transition-colors duration-300"
            >
              Begin Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLunchActually;
