import { Button } from "@/components/ui/button";
import { Radio, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "DJs", href: "#djs" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Radio className="h-8 w-8 text-primary animate-float" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-radio-pulse rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Machesha FM</h1>
              <p className="text-xs text-muted-foreground">97.7 MHz</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Live Button */}
          <div className="hidden md:block">
            <Button variant="live" size="sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
              Listen Live
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="live" size="sm" className="self-start mt-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                Listen Live
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;