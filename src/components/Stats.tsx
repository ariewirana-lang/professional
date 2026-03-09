import { Sparkles, Heart } from "lucide-react";
import { type FC } from "react";

const InfinityIcon: FC<{ className?: string; strokeWidth?: number }> = ({ className }) => (
  <span className={className} style={{ fontSize: "1.5rem", lineHeight: 1 }}>∞</span>
);

const stats = [
  { icon: Sparkles, value: "22 Years", label: "Matchmaking Legacy" },
  { icon: InfinityIcon, value: "160,000+", label: "Curated Hand-Picked Dates" },
  { icon: Heart, value: "87%", label: "Marital Success Rate" },
];

const Stats = () => {
  return (
    <section className="py-[35px] border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center gap-4">
                <div className="text-gold">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <p className="text-4xl md:text-5xl font-serif text-foreground">{stat.value}</p>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
