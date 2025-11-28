import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Stage PFE - Développeur Web Full Stack",
      company: "OCP (Office Chérifien des Phosphates)",
      duration: "2 mois",
      location: "Maroc",
      description: "Développement d'un site de réservation des salles de réunions",
      technologies: ["PHP", "JavaScript", "AJAX", "HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mon <span className="gradient-text">Expérience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mes réalisations professionnelles et projets de stage
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-scale-up border-2 hover:border-primary/30 group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shimmer-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-hero text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow">
                
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-hero rounded-full text-sm font-medium text-foreground/80 hover:bg-primary/20 hover:scale-110 hover:shadow-glow transition-all duration-300 cursor-default animate-fade-in"
                        style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
