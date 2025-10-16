import { Card } from "@/components/ui/card";
import { Clock, Users, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Authentic Experience",
    description: "Play Season 2 Chapter 2 exactly as it was. Every weapon, every location, every memory preserved.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of players who share your nostalgia. Make new memories while reliving the old ones.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Our custom launcher ensures a safe, stable connection to our dedicated servers.",
  },
  {
    icon: Sparkles,
    title: "Regular Updates",
    description: "We maintain and improve the experience while keeping the authentic Season 2 feel.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 relative scroll-animate">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Project Replay?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bringing back the golden era of Fortnite, one match at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
