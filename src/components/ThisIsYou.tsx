import maleImage from "@/assets/client-male.jpg";
import femaleImage from "@/assets/client-female.jpg";

const ThisIsYou = () => {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Female photo — offset down, spans 3 cols */}
          <div className="md:col-span-3 md:mt-32">
            <img
              src={femaleImage}
              alt="Client No. 042"
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <p className="text-[9px] font-sans uppercase tracking-[0.25em] text-muted-foreground mt-3">
              Client No. 042
            </p>
          </div>

          {/* Male photo — aligned top, spans 3 cols */}
          <div className="md:col-span-3 md:col-start-5">
            <img
              src={maleImage}
              alt="Client No. 087"
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <p className="text-[9px] font-sans uppercase tracking-[0.25em] text-muted-foreground mt-3">
              Client No. 087
            </p>
          </div>

          {/* Text content — spans 4 cols, vertically centered */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center">
            <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.9] tracking-tight">
              This is
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif italic leading-[0.9] tracking-tight mt-2 mb-10">
              You
            </h2>
            <p className="font-serif text-foreground/70 text-base md:text-lg leading-relaxed mb-10">
              Intelligent, successful, and sincere. You have
              built a life of achievement, and now you seek a
              partner of equal stature.
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
