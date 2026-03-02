import { Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Top section — Chapter heading */}
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
    </footer>
  );
};

export default Footer;
