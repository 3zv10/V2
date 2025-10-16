import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 px-4 relative scroll-animate">
      <div className="container mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30 text-center shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-intense)] transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Squad Up?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join our Discord server to find teammates, share clips, participate in tournaments, 
            and stay updated on server news and events.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
            <Users className="mr-2 h-5 w-5" />
            Join Discord Server
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Community;
