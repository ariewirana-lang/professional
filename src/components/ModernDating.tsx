import { Clock, ShieldX, Ghost } from "lucide-react";

const issues = [
  {
    icon: Clock,
    title: "The Endless Swiping Fatigue",
    description:
      "Hours spent scrolling through profiles, only to end up with shallow conversations that go nowhere.",
  },
  {
    icon: ShieldX,
    title: "The Catfish Crisis",
    description:
      "Misleading photos, fabricated bios, and wasted evenings on dates that never match expectations.",
  },
  {
    icon: Ghost,
    title: "The Ghosting Epidemic",
    description:
      "Promising connections that vanish overnight, leaving you questioning what went wrong.",
  },
];

const ModernDating = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-4">
            Modern Dating is Exhausting.
            <br />
            <span className="italic">Let's Change the Narrative.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {issues.map((issue) => {
            const Icon = issue.icon;
            return (
              <div
                key={issue.title}
                className="bg-background p-8 border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-lg mb-3">{issue.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {issue.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernDating;
