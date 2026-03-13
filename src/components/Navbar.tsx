import logo from "@/assets/logo.png";

const Navbar = () => {
  const links = [
    { label: "The Methodology", href: "#methodology" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "The Collective", href: "#collective" },
    { label: "Membership Inquiry", href: "#apply" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex-shrink-0"
        >        
          <img src={logo} alt="Lunch Actually" className="h-8 md:h-10" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
