import heroImage from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Right half - hero image, no overlay */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Elegant couple"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Left half - content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full md:w-1/2 px-10 md:px-16 lg:px-24 py-32">
          {/* Location tags - two rows */}
          <div className="mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Singapore&nbsp;&nbsp;&nbsp;Hong Kong&nbsp;&nbsp;&nbsp;Bangkok&nbsp;&nbsp;&nbsp;Taipei
            </span>
          </div>
          <div className="mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Jakarta&nbsp;&nbsp;&nbsp;Kuala Lumpur
            </span>
          </div>

          <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] font-serif leading-[1.05] text-foreground mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Singapore's
            <br />
            Leading
            <br />
            Dating
            <br />
            Agency
          </h1>

          <p className="font-sans text-[15px] text-muted-foreground max-w-[340px] mb-10 opacity-0 animate-fade-up leading-[1.7]" style={{ animationDelay: "0.4s" }}>
            An exclusive matchmaking circle for Singapore
            professionals seeking profound connections
            and shared legacies.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-[10px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              Apply for
              <br />
              Selection
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground px-4 py-4 hover:text-primary transition-colors duration-300 text-center"
            >
              Our Success
              <br />
              Stories
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-muted border-2 border-background"
                />
              ))}
            </div>
            <p className="text-[9px] font-sans uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">
              Trusted by over
              <br />
              170k professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
