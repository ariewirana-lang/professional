import coupleImage from "@/assets/couple-exclusive.jpg";

const ExclusiveCircle = () => {
  return (
    <section className="relative bg-primary text-primary-foreground py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={coupleImage}
          alt="Exclusive couple"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary-foreground/60 mb-8">
          By Invitation Only
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight italic">
          The Singapore's most exclusive circle of eligible singles
        </h2>
      </div>
    </section>
  );
};

export default ExclusiveCircle;
