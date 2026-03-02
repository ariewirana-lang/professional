import { Briefcase, GraduationCap, Building } from "lucide-react";

const MemberProfiles = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-6">
            Profiles of Our Members
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            An exclusive community of accomplished, sophisticated singles seeking
            genuine connections and shared values.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mt-16">
          {/* Age Range */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto mb-6">
              <Briefcase size={24} className="text-gold" />
            </div>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold font-semibold mb-4">
              Age Range
            </p>
            <div className="flex items-center justify-center gap-6">
              <div>
                <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gold mb-1">Gentlemen</p>
                <p className="text-2xl md:text-3xl font-serif">25 – 65+</p>
              </div>
              <div>
                <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gold mb-1">Ladies</p>
                <p className="text-2xl md:text-3xl font-serif">23 – 45</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={24} className="text-gold" />
            </div>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold font-semibold mb-4">
              Education
            </p>
            <div className="w-28 h-28 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-serif">70%+</span>
            </div>
            <p className="font-serif italic text-sm text-foreground/70 leading-snug">
              Bachelor's Degree,<br />Masters and Above
            </p>
          </div>

          {/* Top Industries */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto mb-6">
              <Building size={24} className="text-gold" />
            </div>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold font-semibold mb-4">
              Top Industries
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-left max-w-[240px] mx-auto">
              {["Banking", "Engineering", "Finance", "Education", "Medical", "Technology", "Consulting", "Legal"].map((industry) => (
                <div key={industry} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
                  <span className="font-sans text-sm text-foreground/80">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#apply"
            className="inline-block bg-primary text-primary-foreground font-sans text-[11px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-primary/90 transition-colors"
          >
            Enquire About Membership
          </a>
        </div>
      </div>
    </section>
  );
};

export default MemberProfiles;
