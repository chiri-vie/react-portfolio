import { useState } from "react";
import { Button } from "@/components/button";
import { Menu, X } from "lucide-react";

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
                className="text-burgundy-800 hover:text-burgundy-600 transition-colors duration-200 hover:font-bold focus:font-bold focus:text-burgundy-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button size="small">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-burgundy-800 transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden glass-strong rounded-b-lg shadow-lg">
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
              <Button size="small">
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};