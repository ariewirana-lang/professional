import couple1 from "@/assets/success-couple-1.jpg";
import couple2 from "@/assets/success-couple-2.jpg";
import couple3 from "@/assets/success-couple-3.jpg";

const stories = [
  {
    image: couple1,
    number: "I",
    names: "Michelle & Chris",
    year: "UNITED IN 2022",
  },
  {
    image: couple2,
    number: "II",
    names: "Mengwei & Cindy",
    year: "UNITED IN 2023",
  },
  {
    image: couple3,
    number: "III",
    names: "Alex & Ashley",
    year: "UNITED IN 2024",
  },
];

const SuccessStories = () => {
  return (
    <section id="collective" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6">
            THE PRIVATE COLLECTION
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-0">
            Success Stories
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-6 mb-6" />
          <p className="font-serif italic text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "Curated matches for those who understand that time is life's ultimate luxury."
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stories.map((story) => (
            <div key={story.number} className="text-center">
              <div className="overflow-hidden mb-5">
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <h3 className="font-serif italic text-base md:text-lg mb-1">
                {story.number}. {story.names}
              </h3>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground">
                {story.year}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#apply"
            className="inline-block bg-foreground text-background font-sans text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-foreground/90 transition-colors"
          >
            Connect with a Matchmaker
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
