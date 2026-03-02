const steps = [
  {
    step: "01",
    title: "Apply for Membership",
    description:
      "Complete a comprehensive application that helps us understand your values, lifestyle, and relationship aspirations.",
  },
  {
    step: "02",
    title: "Personalized Matching",
    description:
      "Our expert matchmakers curate hand-selected introductions based on deep compatibility — not algorithms.",
  },
  {
    step: "03",
    title: "Your Great Date",
    description:
      "Meet your match over a thoughtfully arranged lunch date at a curated venue. Natural, relaxed, and promising.",
  },
];

const ThreeSteps = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif">
            Three Easy Steps to Your
          </h2>
          <h2 className="text-3xl md:text-4xl font-serif italic text-primary">
            Next Great Date
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <span className="inline-block text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground border border-border px-4 py-2 mb-6">
                Step {step.step}
              </span>
              <h3 className="font-serif text-xl mb-4">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
