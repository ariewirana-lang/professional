import heroImage from "@/assets/hero.png";

const Hero = () => {
  const locations = ["Singapore", "Hong Kong", "Bangkok", "Japan"];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero image - right side, full height, no overlay on image */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[55%]">
        <img
          src={heroImage}
          alt="Elegant couple"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle left-edge blend only */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent w-[30%]" />
      </div>

      {/* Content - left side */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-[480px]">
            {/* Location tags */}
            <div className="flex flex-wrap gap-1 mb-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {locations.map((loc, i) => (
                <span
                  key={loc}
                  className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {loc}{i < locations.length - 1 && <span className="mx-1.5">·</span>}
                </span>
              ))}
            </div>

            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Since 2004 · Deeply Curated
            </p>

            <h1 className="text-[3.2rem] md:text-[4.2rem] lg:text-[5.2rem] font-serif leading-[1] text-foreground mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Singapore's
              <br />
              Leading
              <br />
              Dating
              <br />
              Agency
            </h1>

            <p className="font-sans text-[15px] text-muted-foreground max-w-[340px] mb-10 opacity-0 animate-fade-up leading-[1.7]" style={{ animationDelay: "0.5s" }}>
              An exclusive matchmaking circle for Singapore
              professionals seeking profound connections
              and shared legacies.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-14 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-[10px] font-semibold uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-primary/90 transition-colors duration-300"
              >
                Apply for Selection
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground px-4 py-3.5 hover:text-primary transition-colors duration-300"
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
              <p className="text-[9px] font-sans uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">
                Trusted by over
                <br />
                10k professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
