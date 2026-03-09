import pressForbes from "@/assets/press-forbes.png";
import pressNyt from "@/assets/press-nyt.png";
import pressVogue from "@/assets/press-vogue.png";
import pressBloomberg from "@/assets/press-bloomberg.png";
import pressTatler from "@/assets/press-tatler.png";

const logos = [
  { src: pressForbes, alt: "Forbes" },
  { src: pressNyt, alt: "The New York Times" },
  { src: pressVogue, alt: "Vogue" },
  { src: pressBloomberg, alt: "Bloomberg" },
  { src: pressTatler, alt: "Tatler" },
];

const Press = () => {
  return (
    <section className="py-[35px] border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-muted-foreground text-center mb-12">
          The Premier Circle as Noted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-4 md:h-5 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
