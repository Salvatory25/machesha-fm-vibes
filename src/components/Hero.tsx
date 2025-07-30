import { Button } from "@/components/ui/button";
import { Play, Radio, MapPin } from "lucide-react";
import heroImage from "@/assets/radio-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Sound Wave Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="flex items-end space-x-1">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-primary to-accent w-1 animate-wave-pulse"
              style={{
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">LIVE ON AIR</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            MACHESHA FM
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <Radio className="h-6 w-6 text-primary" />
              <span className="text-2xl md:text-3xl font-semibold text-accent">97.7 MHz</span>
            </div>
            <div className="w-1 h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-lg text-muted-foreground">Mpanda-Katavi</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your premier radio station bringing you the best music, news, and entertainment 
            from the heart of Katavi. Tune in for non-stop entertainment!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="radio" size="lg" className="text-lg px-8 py-4">
            <Play className="h-5 w-5 mr-2" />
            Listen Live Now
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            View Programs
          </Button>
        </div>

        {/* Station Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Non-Stop Broadcasting</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Popular Shows</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Daily Listeners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;