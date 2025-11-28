import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educations = [
     {
      degree: "formation ",
      field: "Développement full-stack",
      institution: "JobInTech & ISEEM",
      year: "En cours",
      location: "El jadida",
    },
    {
      degree: "2ème année Cycle d'Ingénieur",
      field: "Génie Informatique - Systèmes d'Information",
      institution: "SUPMTI",
      year: "En cours",
      location: "Rabat",
    },
    {
      degree: "Diplôme de Technicien Spécialisé",
      field: "Développement Digital Option Web Full Stack",
      institution: "ISTA Hay El Matar",
      year: "2024",
      location: "El Jadida",
    },
    {
      degree: "Baccalauréat Sciences Mathématiques Option A",
      field: "",
      institution: "Lycée El Kods",
      year: "2022",
      location: "El Jadida",
    },
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ma <span className="gradient-text">Formation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educations.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-scale-up border-2 hover:border-secondary/30 group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-hero text-secondary group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-glow">
                  <GraduationCap className="h-6 w-6 group-hover:wiggle" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  {edu.field && (
                    <p className="text-foreground/80 mb-3">{edu.field}</p>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
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

export default Education;
