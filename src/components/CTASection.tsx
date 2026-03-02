const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-8">
            YOUR JOURNEY BEGINS HERE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
            A Grande Connection, Passion Redefined.
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
            Take the first step toward finding your life partner. Apply for a
            complimentary consultation with our senior matchmaker.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-xs font-semibold uppercase tracking-[0.2em] px-12 py-4 hover:bg-primary/90 transition-colors duration-300"
          >
            APPLY FOR SELECTION
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
