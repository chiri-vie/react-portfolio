import { useState } from "react";
import { Button } from "@/components/button";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-burgundy-200 w-full py-5 z-10">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-burgundy-700 font-bold text-xl tracking-tight"
        >
          CV.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="glass rounded-full px-4 py-2 flex gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link focus:text-primary focus:font-bold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button size="small">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <button
          className="group relative flex h-11 w-11 items-center justify-center rounded-full text-burgundy-800 transition-all duration-300 hover:bg-white/55 hover:backdrop-blur-md hover:shadow-soft cursor-pointer md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="relative block h-5 w-5">
            {/* Top bar */}
            <span
              className={`absolute left-0 top-1/3 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            {/* Middle bar */}
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "scale-0 opacity-0" : ""
              }`}
            />

            {/* Bottom bar */}
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-1.5"
              }`}
            />
          </span>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden glass-strong rounded-b-lg shadow-lg animate-fade-in">
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-primary-dark text-lg hover:text-burgundy-600 transition-colors duration-200 p-2"
                >
                  {link.label}
                </a>
              ))}
              <Button size="small">Contact Me</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};