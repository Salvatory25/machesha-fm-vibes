import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mic, Music, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Morning Wake-Up",
      time: "06:00 - 09:00",
      description: "Start your day with energizing music and local news",
      host: "DJ Sarah",
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Midday Mix",
      time: "12:00 - 14:00",
      description: "Popular hits and interactive talk sessions",
      host: "DJ Marcus",
      icon: <Music className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Drive Time",
      time: "17:00 - 19:00",
      description: "Smooth tunes for your evening commute",
      host: "DJ Linda",
      icon: <Mic className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Night Vibes",
      time: "20:00 - 24:00",
      description: "Relaxing music and late-night conversations",
      host: "DJ James",
      icon: <Users className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Weekend Special",
      time: "Sat & Sun 14:00-16:00",
      description: "Special weekend programming with guest interviews",
      host: "Various Hosts",
      icon: <Music className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Community Hour",
      time: "Mon-Fri 10:00-11:00",
      description: "Local community news and announcements",
      host: "DJ Catherine",
      icon: <Users className="h-6 w-6" />,
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of shows designed to entertain, inform, and inspire our listeners throughout the day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${program.color} text-white`}>
                    {program.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{program.time}</div>
                    <div className="text-xs text-muted-foreground">Daily</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Hosted by {program.host}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Can't catch your favorite show?</h3>
            <p className="text-muted-foreground mb-6">
              Don't worry! We're working on bringing you podcast versions of all our popular shows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">24/7 Live Streaming</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Request Your Favorite Songs</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Interactive Live Shows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;