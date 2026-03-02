import maleImage from "@/assets/client-male.jpg";
import femaleImage from "@/assets/client-female.jpg";

const ThisIsYou = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
          {/* Female photo — offset down */}
          <div className="md:mt-24">
            <img
              src={femaleImage}
              alt="Client No. 042"
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <p className="text-[9px] font-sans uppercase tracking-[0.25em] text-muted-foreground mt-3">
              Client No. 042
            </p>
          </div>

          {/* Male photo — aligned top */}
          <div>
            <img
              src={maleImage}
              alt="Client No. 087"
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <p className="text-[9px] font-sans uppercase tracking-[0.25em] text-muted-foreground mt-3">
              Client No. 087
            </p>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-2">
              This is
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif italic leading-[0.95] mb-10">
              You
            </h2>
            <p className="font-serif text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
              Intelligent, successful, and sincere. You have
              built a life of achievement, and now you seek
              a partner of equal stature.
            </p>
            <div className="w-full h-px bg-border mb-8" />
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Access an{" "}
              <span className="text-foreground font-medium underline underline-offset-2">
                exclusive, verified database
              </span>{" "}
              of the most eligible
              elite singles across the continent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThisIsYou;
