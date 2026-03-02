import couple1 from "@/assets/success-couple-1.jpg";
import couple2 from "@/assets/success-couple-2.jpg";
import couple3 from "@/assets/success-couple-3.jpg";

const stories = [
  {
    image: couple1,
    names: "David & Rachel",
    quote:
      "Lunch Actually understood exactly what we were both looking for. From our very first date, we knew this was different.",
    year: "Married 2022",
  },
  {
    image: couple2,
    names: "Marcus & Priya",
    quote:
      "After years of unsuccessful dating apps, our matchmaker introduced us over lunch. It was the best decision we ever made.",
    year: "Married 2023",
  },
  {
    image: couple3,
    names: "Kevin & Jolene",
    quote:
      "The personal touch made all the difference. They didn't just match profiles — they matched personalities and life goals.",
    year: "Engaged 2024",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Real Connections, Real Love
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stories.map((story) => (
            <div key={story.names} className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg mb-2">{story.names}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3 italic">
                "{story.quote}"
              </p>
              <p className="font-sans text-xs text-muted-foreground/60 uppercase tracking-wider">
                {story.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
