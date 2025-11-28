import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/chibaneFZ.webp";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-6 opacity-20" />
            <Card className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={profileImage}
                alt="Fatima Ezzahra Chibane"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </Card>
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              À propos <span className="gradient-text">de moi</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis une développeuse web passionnée par la conception de solutions digitales efficaces, 
                alliant design et performance. Mon parcours m'a permis d'acquérir une expertise solide en 
                développement full stack.
              </p>
              <p>
                Grâce à mon expérience diversifiée, j'aime relever des défis techniques tout en assurant 
                une expérience utilisateur fluide et intuitive. Chaque projet est pour moi une opportunité 
                d'apprendre et de créer des solutions innovantes.
              </p>
              <p>
                Mon approche combine créativité, rigueur technique et sens du détail pour transformer 
                des idées en applications concrètes et performantes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
                asChild
              >
                <a href="/CV_fatimaEzzahraChibane.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </a>
              </Button>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
