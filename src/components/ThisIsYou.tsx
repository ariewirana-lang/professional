import maleImage from "@/assets/this-is-you-male.jpg";
import femaleImage from "@/assets/this-is-you-female.jpg";

const ThisIsYou = () => {
  return (
    <>
      {/* Male section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src={maleImage}
                alt="This is You"
                className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </div>
            <div className="order-1 md:order-2 max-w-lg">
              <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Our Ideal Member
              </p>
              <h2 className="text-5xl md:text-6xl font-serif mb-8">
                This is You
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                You're a discerning professional who values quality over quantity. 
                You've achieved success in your career but recognize that finding 
                a life partner deserves the same intentional approach.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                You believe in meaningful connections built on shared values, 
                mutual respect, and genuine compatibility — not algorithms.
              </p>
              <ul className="space-y-3 font-sans text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Established professionals aged 28–50
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  University-educated with strong values
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Seeking a serious, long-term relationship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Female section */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-7xl font-serif mb-2">
                This is
              </h2>
              <h2 className="text-5xl md:text-7xl font-serif italic text-primary mb-8">
                You
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                You're accomplished, vibrant, and ready for a meaningful chapter 
                in your life. You've grown tired of dating apps and superficial 
                encounters that lead nowhere.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                You want someone who truly understands your aspirations and 
                complements your journey — a partner selected with care, not chance.
              </p>
            </div>
            <div>
              <img
                src={femaleImage}
                alt="This is You"
                className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThisIsYou;
