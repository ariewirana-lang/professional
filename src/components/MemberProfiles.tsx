import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";

const members = [
  {
    image: member1,
    name: "Sarah L.",
    age: 29,
    profession: "Investment Banker",
    education: "MBA, INSEAD",
  },
  {
    image: member2,
    name: "James T.",
    age: 34,
    profession: "Tech Entrepreneur",
    education: "BSc, NUS",
  },
  {
    image: member3,
    name: "Michelle C.",
    age: 31,
    profession: "Corporate Lawyer",
    education: "LLB, King's College",
  },
];

const MemberProfiles = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
            Profiles of Our Members
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto">
            Our members are accomplished individuals from diverse professional backgrounds, 
            united by a desire for genuine, lasting partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg mb-1">{member.name}, {member.age}</h3>
              <p className="font-sans text-sm text-muted-foreground">{member.profession}</p>
              <p className="font-sans text-xs text-muted-foreground/70">{member.education}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberProfiles;
