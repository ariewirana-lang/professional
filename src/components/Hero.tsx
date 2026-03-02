import heroImage from "@/assets/hero.png";

const Hero = () => {
  const locations = ["Singapore", "Hong Kong", "Bangkok", "Japan"];

  return (
    <section className="relative min-h-screen flex items-end md:items-center pt-20 overflow-hidden">
      {/* Hero image - right side */}
      <div className="absolute inset-0 md:left-[40%] md:right-0">
        <img
          src={heroImage}
          alt="Elegant couple"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:from-background md:via-background/40 md:to-transparent" />
      </div>

      {/* Content - left side */}
      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-0">
        <div className="max-w-xl">
          {/* Location tags */}
          <div className="flex flex-wrap gap-2 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {locations.map((loc) => (
              <span
                key={loc}
                className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                {loc}
                {loc !== locations[locations.length - 1] && <span className="ml-2">·</span>}
              </span>
            ))}
          </div>

          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Since 2004 · Deeply Curated
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.95] text-foreground mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Singapore's
            <br />
            Leading
            <br />
            Dating
            <br />
            Agency
          </h1>

          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-sm mb-10 opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: "0.5s" }}>
            An exclusive matchmaking circle for Singapore professionals seeking profound connections and shared legacies.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors duration-300"
            >
              Apply for Selection
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center font-sans text-xs font-semibold uppercase tracking-[0.15em] text-foreground px-4 py-4 hover:text-primary transition-colors duration-300"
            >
              Our Success Stories
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-muted border-2 border-background"
                />
              ))}
            </div>
            <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
              Trusted by over
              <br />
              10k professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
