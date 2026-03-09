import coupleImage from "@/assets/why-la-couple.jpg";
import { Award, Link, Lock, CalendarCheck, ShieldCheck, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Pioneer Brand",
    tag: "22 YEARS",
    description:
      "The first premium agency in Asia with 22 years of proven success. We understand the unique needs of high-achieving individuals in a global context.",
  },
  {
    icon: Link,
    title: "One-Stop Solution",
    description:
      "Our platform and services are meticulously tailored to reflect each client's unique preferences, values, and aspirations.",
  },
  {
    icon: Lock,
    title: "Privacy Guaranteed",
    description:
      "All personal information is handled with the highest level of confidentiality and discretion.",
  },
  {
    icon: CalendarCheck,
    title: "Busy Lifestyle Ready",
    description:
      "We take care of every detail — from thoughtful matching and venue reservations to seamless date coordination and reminders.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Verification",
    description:
      "Through identity verification and a thoughtful assessment process, we carefully curate a community of genuine, accomplished, and relationship-ready individuals.",
  },
  {
    icon: TrendingUp,
    title: "Highly Effective",
    description:
      "Our proprietary, extensively tested matching methodology has successfully united over 4,500 couples, achieving an exceptional 87% client satisfaction rate.",
  },
];

const WhyLunchActually = () => {
  return (
    <section className="pt-24 md:pt-32 pb-[35px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left — Image + Testimonial */}
          <div className="relative">
            <img
              src={coupleImage}
              alt="Professional couple"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/70 backdrop-blur-sm p-6">
              <p className="font-serif text-sm text-background italic leading-relaxed mb-2">
                "The transition from my online profile to meeting my matchmaker was so
                seamless. It felt professional and personal from day one."
              </p>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted">
                CLIENT NO. 842
              </span>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-10">
              Why Choose Our{" "}
              <span className="italic text-gold">Hybrid Approach?</span>
            </h2>

            <div className="space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mt-0.5">
                    <reason.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-sans text-sm font-bold">{reason.title}</h3>
                      {reason.tag && (
                        <span className="text-[9px] font-sans uppercase tracking-[0.15em] text-gold">
                          {reason.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLunchActually;
