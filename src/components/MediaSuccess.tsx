import thumb1 from "@/assets/video-thumb-1.jpg";
import thumb2 from "@/assets/video-thumb-2.jpg";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    image: thumb1,
    quote:
      "Thank you for bringing us together. It's the best decision I ever made.",
  },
  {
    image: thumb2,
    quote:
      "We are immensely grateful for finding the right one at the right time.",
  },
];

const MediaSuccess = () => {
  return (
    <section className="pt-[35px] pb-24 md:pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6">
            MEDIA & SUCCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight">
            Authentic Connections,
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight">
            Proven Authority
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-6 mb-6" />
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the stories of elite singles who found their perfect match through our
            bespoke consultancy and our recognized presence in international media.
          </p>
        </div>

        {/* Success Stories label + arrows */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif italic text-lg">Success Stories</h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video cards — show first 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.slice(0, 2).map((story, i) => (
            <div key={i} className="relative group overflow-hidden">
              <img
                src={story.image}
                alt="Success story"
                className="w-full aspect-video object-cover"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background/80 flex items-center justify-center">
                  <Play className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="bg-primary/80 backdrop-blur-sm px-5 py-4 rounded-sm">
                  <p className="font-sans text-sm text-primary-foreground leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSuccess;
