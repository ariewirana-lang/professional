import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Redefining the
            <br />
            <span className="italic">Social Fabric</span>
            <br />
            of Success.
          </h2>
        </div>

        <div className="border-t border-primary-foreground/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <img src={logo} alt="Lunch Actually" className="h-8 brightness-0 invert mb-4" />
              <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
                Asia's premier matchmaking agency since 2004.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-4">Company</h4>
              <ul className="space-y-2 font-sans text-sm text-primary-foreground/60">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">The Methodology</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-4">Services</h4>
              <ul className="space-y-2 font-sans text-sm text-primary-foreground/60">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Matchmaking</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Date Coaching</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">The Collective</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-4">Contact</h4>
              <ul className="space-y-2 font-sans text-sm text-primary-foreground/60">
                <li>Singapore · Hong Kong</li>
                <li>Bangkok · Japan</li>
                <li className="pt-2"><a href="#" className="hover:text-primary-foreground transition-colors">hello@lunchactually.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-sans text-xs text-primary-foreground/40">
            © 2024 Lunch Actually Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
