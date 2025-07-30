import { Button } from "@/components/ui/button";
import { Radio, Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/40 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Radio className="h-8 w-8 text-primary animate-float" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-radio-pulse rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Machesha FM</h3>
                  <p className="text-sm text-muted-foreground">97.7 MHz</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your premier radio station in Katavi, bringing you the best in music, 
                news, and entertainment 24/7. Connect with your community through the airwaves.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">BROADCASTING LIVE</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Programs", href: "#programs" },
                  { name: "Our DJs", href: "#djs" },
                  { name: "Latest News", href: "#news" },
                  { name: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Popular Shows</h4>
              <ul className="space-y-3">
                {[
                  { name: "Morning Wake-Up", time: "06:00 - 09:00" },
                  { name: "Midday Mix", time: "12:00 - 14:00" },
                  { name: "Drive Time", time: "17:00 - 19:00" },
                  { name: "Night Vibes", time: "20:00 - 24:00" },
                ].map((show) => (
                  <li key={show.name}>
                    <div className="text-muted-foreground">
                      <div className="font-medium text-foreground">{show.name}</div>
                      <div className="text-sm">{show.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    Main Street, Mpanda<br />
                    Katavi Region, Tanzania
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    +255 XXX XXX XXX
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    info@macheshafm.co.tz
                  </div>
                </div>
              </div>

              {/* Listen Live Button */}
              <Button variant="radio" className="mt-6 w-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                Listen Live
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Machesha FM Radio. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Broadcasting License No. TCRA/XXX/XXXX
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-red-500" />
                <span>in Katavi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;