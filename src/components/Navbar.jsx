import { cn } from "@/lib/utils";
import { Menu, X, ExternalLink, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 font-sans backdrop-blur-lg",
        isScrolled
          ? "bg-background/90 border-b border-border py-3 shadow-sm"
          : "bg-background/40 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-4">
        {/* Top Left Brand */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight flex items-center gap-1"
        >
          <span className="text-primary">Sreeja</span>
          <span className="text-muted-foreground hidden sm:inline"> . </span>
          <span className="hidden sm:inline text-xs text-muted-foreground ml-1">
            / dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-wrap gap-4 md:gap-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 relative"
            >
              <span className="hover:underline underline-offset-4">
                {item.name}
              </span>
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition"
          >
            <FileText size={16} className="mr-2" /> Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-2 ml-auto">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-[99] flex flex-col items-center justify-center px-4",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ height: "100dvh" }}
      >
        <div className="flex flex-col space-y-8 text-xl w-full max-w-xs mx-auto">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-center text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex justify-center items-center gap-2 text-primary hover:underline"
          >
            <FileText size={20} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
