import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";
import overlayBg from "@/assets/overlay-bg.png";

const ApplyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    age: "",
    residence: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/thank-you");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="apply" className="relative min-h-[700px] flex">
      {/* Left — background image + heading */}
      <div className="hidden md:flex w-1/2 relative items-end">
        <img
          src={overlayBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-12 pb-16">
          <h2 className="text-4xl lg:text-5xl font-serif leading-[1.15] text-white">
            The Singapore's most
            <br />
            <em className="italic">exclusive</em> circle of
            <br />
            eligible singles
          </h2>
          <div className="w-12 h-[3px] bg-white/60 mt-6" />
        </div>
      </div>

      {/* Right — form */}
      <div className="w-full md:w-1/2 bg-background flex items-center justify-center px-6 py-16 md:py-0">
        <div className="w-full max-w-md">
          <p
            className="text-[10px] font-sans uppercase tracking-[0.3em] mb-4"
            style={{ color: "hsl(var(--gold))" }}
          >
            Private Invitation
          </p>
          <h3 className="text-3xl md:text-4xl font-serif mb-3">
            Apply for Access
          </h3>
          <p className="font-sans text-sm text-muted-foreground mb-10 leading-relaxed max-w-sm">
            Our matchmaking experience is curated for discerning leaders who
            value privacy and unparalleled excellence.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              maxLength={100}
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full border-b border-border bg-transparent py-3 text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              maxLength={255}
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border-b border-border bg-transparent py-3 text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />

            {/* Mobile */}
            <input
              type="tel"
              placeholder="Private Mobile"
              maxLength={20}
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              className="w-full border-b border-border bg-transparent py-3 text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />

            {/* Gender + Age row */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <select
                  value={formData.gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  className="w-full border-b border-border bg-transparent py-3 text-sm font-sans text-muted-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <svg
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <input
                type="number"
                placeholder="Age"
                min={18}
                max={99}
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
                className="w-28 border-b border-border bg-transparent py-3 text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            {/* Primary Residence */}
            <div className="relative">
              <select
                value={formData.residence}
                onChange={(e) => handleChange("residence", e.target.value)}
                className="w-full border-b border-border bg-transparent py-3 text-sm font-sans text-muted-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Primary Residence
                </option>
                <option value="singapore">Singapore</option>
                <option value="hong-kong">Hong Kong</option>
                <option value="bangkok">Bangkok</option>
                <option value="taipei">Taipei</option>
                <option value="jakarta">Jakarta</option>
                <option value="kuala-lumpur">Kuala Lumpur</option>
                <option value="other">Other</option>
              </select>
              <svg
                className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 text-xs font-sans font-semibold uppercase tracking-[0.15em] transition-colors duration-300"
              style={{
                backgroundColor: "hsl(var(--gold))",
                color: "white",
              }}
            >
              Get Started
            </button>
          </form>

          <p className="text-[9px] font-sans uppercase tracking-[0.15em] text-muted-foreground text-center mt-6">
            Participation is by invitation
            <br />
            or approval only.
          </p>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-6 text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[9px] font-sans uppercase tracking-wider">
                Identity
                <br />
                Verified
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span className="text-[9px] font-sans uppercase tracking-wider">
                Encrypted
                <br />
                Secure
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-8 text-[9px] font-sans uppercase tracking-wider text-muted-foreground">
            <span>© MMXXVI</span>
            <span>Privacy Accord</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
