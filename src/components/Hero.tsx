import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/chibaneFZ.webp";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh pt-20">

      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-ping-slow" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-2xl animate-ping-slow" />

        {/* Particles (ok for performance) */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-bounce-slow" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full animate-bounce-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">

          {/* Profile Image - NO ANIMATION on LCP */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-60" />
            <div className="absolute inset-0 bg-gradient-rainbow rounded-full opacity-30 blur-md" />
            <img
              src={profileImage}
              alt="Fatima Ezzahra Chibane"
              className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-neon"
              loading="eager" /* important for LCP */
            />
          </div>

          {/* Name (static to boost LCP) */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Fatima Ezzahra </span>
              <span className="gradient-text">Chibane</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
              Développeuse Web Full Stack
            </h2>
          </div>

          {/* Description (static = fast LCP) */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionnée par la création d'expériences numériques modernes et élégantes,
            je transforme des idées en applications performantes et intuitives.
          </p>

          {/* CTA Buttons – animations OK */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow w-full sm:w-auto group"
            >
              <ArrowDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Voir mes projets
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Me contacter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              aria-label="Lien vers mon GitHub"
              href="https://github.com/fatima-ezzahra2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-glow-lg hover:scale-110 hover:-translate-y-1 group"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              aria-label="Lien vers mon profil LinkedIn"
              href="https://www.linkedin.com/in/fatima-ezzahra-chibane/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-glow-lg hover:scale-110 hover:-translate-y-1 group"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              aria-label="M'envoyer un email"
              href="mailto:fatimaezzahrachibane1@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-glow-lg hover:scale-110 hover:-translate-y-1 group"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
