import maleImage from "@/assets/this-is-you-male.jpg";

const ThisIsYou = () => {
  return (
    <section className="relative min-h-screen bg-[hsl(240,10%,8%)] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-24">
      {/* Background man image */}
      <img
        src={maleImage}
        alt="Professional man"
        className="absolute inset-0 w-full h-full object-contain object-center opacity-90 pointer-events-none"
      />

      {/* Content overlay */}
      <div className="relative z-10 max-w-md mx-auto">
        <p className="text-[9px] font-sans uppercase tracking-[0.35em] text-white/40 mb-6">
          Private · Curated · Purposeful
        </p>
        <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
          This <em className="italic">is</em> You
        </h2>
        <p className="font-serif text-white/70 text-sm md:text-base leading-relaxed mb-4 italic">
          Intelligent, successful, and sincere. You have built a life of
          achievement, and now you seek a partner to share it with.
        </p>
        <p className="font-sans text-white/50 text-xs md:text-sm leading-relaxed mb-10">
          As the region's premier matchmaking authority, we provide access
          to an <span className="text-white/80 font-medium">exclusive, verified database</span> of Singapore's most eligible singles.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-[10px] font-semibold uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:bg-primary/90 transition-colors duration-300"
        >
          Inquire for Membership
        </a>
        <p className="text-[8px] font-sans uppercase tracking-[0.2em] text-white/30 mt-6">
          By Invitation Only · Since 2004
        </p>
      </div>
    </section>
  );
};

export default ThisIsYou;
