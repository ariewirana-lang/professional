import logo from "@/assets/logo.png";

const Navbar = () => {
  const links = ["The Methodology", "Portfolio", "The Collective", "Membership Inquiry"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Lunch Actually" className="h-8 md:h-10" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
