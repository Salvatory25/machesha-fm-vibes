import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import djProfile from "@/assets/dj-profile.jpg";

const DJs = () => {
  const djs = [
    {
      name: "Sarah Mwanga",
      role: "Morning Show Host",
      show: "Morning Wake-Up",
      time: "06:00 - 09:00",
      bio: "Sarah brings energy and positivity to your mornings with her vibrant personality and great music selection.",
      image: djProfile,
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Marcus Juma",
      role: "Midday Host",
      show: "Midday Mix",
      time: "12:00 - 14:00",
      bio: "Marcus keeps the afternoon alive with interactive sessions and the hottest tracks from around the world.",
      image: djProfile,
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "Linda Mwalimu",
      role: "Drive Time Host",
      show: "Drive Time",
      time: "17:00 - 19:00",
      bio: "Linda's smooth voice and perfect song choices make your evening commute a pleasure.",
      image: djProfile,
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      name: "James Msigwa",
      role: "Night Show Host",
      show: "Night Vibes",
      time: "20:00 - 24:00",
      bio: "James creates the perfect atmosphere for late-night relaxation with soulful music and meaningful conversations.",
      image: djProfile,
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section id="djs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">DJs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented voices behind Machesha FM. Get to know the personalities who bring you 
            entertainment, music, and information every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {djs.map((dj, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="relative">
                <img 
                  src={dj.image} 
                  alt={dj.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-primary-foreground font-medium">
                    {dj.show} • {dj.time}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {dj.name}
                </CardTitle>
                <CardDescription className="text-accent font-medium">
                  {dj.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dj.bio}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals who love music and connecting with people.
            </p>
            <Button variant="radio">
              <Mail className="h-4 w-4 mr-2" />
              Send Us Your Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJs;