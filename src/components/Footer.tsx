import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import luxuryImage from "@/assets/luxury-invitation.jpg";

const Footer = () => {
  return (
    <footer>
      {/* Two-column: Image + Form */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — Invitation Image + Quote */}
        <div className="relative min-h-[600px]">
          <img
            src={luxuryImage}
            alt="Luxury invitation"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Quote card overlay */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:max-w-xs">
            <div className="bg-background p-6 shadow-lg">
              <p className="font-serif italic text-sm leading-relaxed text-foreground mb-4">
                "True connection is the ultimate luxury in a world of digital noise."
              </p>
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-foreground" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  THE COLLECTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Request Entry Form */}
        <div className="bg-background px-8 md:px-16 py-16 flex flex-col justify-center">
          {/* Registry Capacity */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground font-semibold">
                REGISTRY CAPACITY
              </span>
              <span className="font-serif italic text-lg text-gold">92%</span>
            </div>
            <div className="w-full h-[2px] bg-muted">
              <div className="h-full bg-gold" style={{ width: "92%" }} />
            </div>
            <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-muted-foreground mt-2">
              SPRING INTAKE: FINAL 8 POSITIONS REMAINING
            </p>
          </div>

          {/* Form */}
          <h3 className="font-serif text-2xl md:text-3xl mb-2">Request Entry</h3>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Please provide your confidential details to begin the verification process.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground font-semibold block mb-2">
                FULL LEGAL NAME
              </label>
              <input
                type="text"
                placeholder="Alexander Sterling"
                className="w-full border-b border-border bg-transparent py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground font-semibold block mb-2">
                PRIVATE CONTACT (WHATSAPP)
              </label>
              <input
                type="text"
                placeholder="+65 ●●●● ●●●●●"
                className="w-full border-b border-border bg-transparent py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <button className="w-full bg-primary text-primary-foreground font-sans text-xs font-semibold uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors mb-10">
            INITIATE INQUIRY
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Trust badges */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground">
                  VETTING PROTOCOL
                </p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  Comprehensive financial and character verification for all candidates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground">
                  DISCRETION FIRST
                </p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  Non-disclosure agreements are standard for every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter IV section */}
      <div className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="inline-block text-[10px] font-sans uppercase tracking-[0.25em] text-gold mb-4">
              CHAPTER IV: THE ART OF CURATION
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Redefining the
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif italic text-gold leading-tight">
              Social Fabric
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              of Success.
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-lg mt-6 leading-relaxed">
              Exclusivity isn't about keeping people out; it's about bringing the
              right people together. Our private intake is a delicate orchestration
              of shared values, verified legacy, and unspoken understanding.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-border">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground mb-1">
                LUNCH ACTUALLY PTE LTD
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                SINGAPORE · HONG KONG · THAILAND · TAIWAN · INDONESIA · MALAYSIA
              </p>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="font-sans text-xs uppercase tracking-[0.1em] text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-xs uppercase tracking-[0.1em] text-foreground hover:text-primary transition-colors">
                Terms of Entry
              </a>
              <a href="#" className="font-sans text-xs uppercase tracking-[0.1em] text-foreground hover:text-primary transition-colors">
                Press
              </a>
              <span className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                <Lock className="w-3 h-3" />
                SECURE APPLICATION PORTAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
