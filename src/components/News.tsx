import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "New Community Health Center Opens in Mpanda",
      excerpt: "The newly constructed health center will serve over 15,000 residents in the Mpanda district, providing essential medical services.",
      category: "Health",
      author: "Machesha FM News Team",
      date: "2024-01-15",
      featured: true
    },
    {
      title: "Local Football Team Advances to Regional Championships",
      excerpt: "Katavi Warriors secured their spot in the regional finals after a thrilling 2-1 victory against Tabora United.",
      category: "Sports",
      author: "Sports Desk",
      date: "2024-01-14",
      featured: false
    },
    {
      title: "Agricultural Training Program Benefits Local Farmers",
      excerpt: "Over 200 farmers participated in the modern farming techniques workshop organized by the regional agricultural office.",
      category: "Agriculture",
      author: "Community Reporter",
      date: "2024-01-13",
      featured: false
    },
    {
      title: "Education Infrastructure Improvements Announced",
      excerpt: "The government has allocated funds for renovating three primary schools in the Katavi region.",
      category: "Education",
      author: "Education Correspondent",
      date: "2024-01-12",
      featured: false
    },
    {
      title: "Weather Update: Rainfall Expected This Week",
      excerpt: "Meteorological department forecasts moderate to heavy rainfall in the Katavi region starting Wednesday.",
      category: "Weather",
      author: "Weather Team",
      date: "2024-01-11",
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Health: "bg-green-500/20 text-green-400 border-green-500/30",
      Sports: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Agriculture: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      Education: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Weather: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <section id="news" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news and updates from Katavi region and beyond. 
            Your trusted source for local and regional information.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-card to-card/50">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured Story
                  </Badge>
                </div>
                <div className="p-8 md:p-12">
                  <div className="max-w-3xl">
                    <Badge className={getCategoryColor(featuredArticle.category)}>
                      {featuredArticle.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-foreground">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{formatDate(featuredArticle.date)}</span>
                      </div>
                    </div>
                    <Button variant="radio">
                      Read Full Story
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {regularArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="flex items-center space-x-1 text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <Button variant="ghost" className="text-primary hover:text-primary group-hover:translate-x-1 transition-transform p-0">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* News Footer */}
        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
            <div className="flex items-center justify-center mb-4">
              <Newspaper className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Stay Updated</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Get breaking news and updates delivered straight to your phone. 
              Follow us on social media or tune in to our news bulletins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Hourly News Updates</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Weather Reports</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Community Announcements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;