import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 relative scroll-animate">
      <div className="container mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-primary/10 relative overflow-hidden shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-intense)] transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What is Project Replay?
            </h2>
            
            <div className="space-y-4 text-foreground/90 max-w-3xl mx-auto text-lg">
              <p>
                Project Replay is a passion project created by fans, for fans. We've meticulously 
                recreated Fortnite's Season 2 Chapter 2 experience on private servers, allowing 
                you to revisit one of the most beloved eras of the game.
              </p>
              
              <p>
                Remember dropping at The Rig? Landing at The Grotto? Those epic squad matches 
                that lasted until sunrise? We do too, and we wanted to bring that magic back.
              </p>
              
              <p>
                Our custom launcher connects you to our dedicated servers where you can play with 
                friends old and new, experiencing the game exactly as it was during its peak.
              </p>
              
              <p className="text-center text-xl font-semibold mt-8 text-primary">
                It's not just about playing a game—it's about reliving memories.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
