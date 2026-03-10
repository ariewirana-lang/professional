import heroImage from "@/assets/hero.png";
import avatar1 from "@/assets/trust-avatar-1.png";
import avatar2 from "@/assets/trust-avatar-2.png";
import avatar3 from "@/assets/trust-avatar-3.png";

const avatars = [avatar1, avatar2, avatar3];

const scrollToApply = () => {
  const el = document.getElementById("apply");
  el?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">

      {/* RIGHT SIDE IMAGE */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Elegant couple"
          className="w-full h-full object-cover object-top"
        />

        {/* MOBILE CTA */}
        <div className="absolute bottom-8 left-0 right-0 px-6 md:hidden">
          <div className="flex flex-wrap gap-4 mb-6">

            <button
              onClick={scrollToApply}
              className="bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full"
            >
              Apply for <br /> Selection
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("collective")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white text-[10px] font-semibold uppercase tracking-[0.15em]"
            >
              Our Success <br /> Stories
            </button>

          </div>

          {/* TRUST BADGE */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Member"
                  className="w-9 h-9 rounded-full border-2 border-background"
                />
              ))}
            </div>

            <p className="text-[9px] uppercase text-white/80">
              Trusted by over
              <br />
              170k professionals
            </p>
          </div>
        </div>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 min-h-screen flex items-end">
        <div className="w-full md:w-1/2 px-10 md:px-16 lg:px-24 pb-40">

          {/* LOCATIONS */}
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Singapore · Hong Kong · Bangkok · Taipei
            <br />
            Jakarta · Kuala Lumpur
          </p>

          {/* TITLE */}
          <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] font-serif leading-[1.05] mb-8">
            Singapore's
            <br />
            Leading
            <br />
            Dating
            <br />
            Agency
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[15px] text-muted-foreground max-w-[340px] mb-10 leading-[1.7]">
            An exclusive matchmaking circle for Singapore professionals seeking
            profound connections and shared legacies.
          </p>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex gap-4 mb-16">

            <button
              onClick={scrollToApply}
              className="bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full"
            >
              Apply for <br /> Selection
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("collective")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[10px] font-semibold uppercase tracking-[0.15em]"
            >
              Our Success <br /> Stories
            </button>

          </div>

          {/* TRUST BADGE */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Member"
                  className="w-9 h-9 rounded-full border-2 border-background"
                />
              ))}
            </div>

            <p className="text-[9px] uppercase text-muted-foreground">
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
