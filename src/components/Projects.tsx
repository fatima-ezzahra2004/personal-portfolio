import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react"; // ⬅ ExternalLink supprimé
import gestionSallesImg from "@/assets/gestiondesalledereunion.webp";
import gestionScolariteImg from "@/assets/gestiondescolarite.webp";
import stageConnectImg from "@/assets/gestiondesstagiaire.webp";

const Projects = () => {
  const projects = [
    {
      title: "Gestion des Salles de Réunions",
      description:
        "Site de réservation des salles de réunions à l'OCP développé lors de mon stage PFE. Permet la gestion complète des réservations avec calendrier interactif.",
      image: gestionSallesImg,
      technologies: ["PHP", "JavaScript", "AJAX", "HTML", "CSS", "Bootstrap"],
      github: "https://github.com/fatima-ezzahra2004",
    },
    {
      title: "Gestion de Scolarité",
      description:
        "Application complète de gestion de scolarité avec suivi des étudiants, notes, absences et emplois du temps.",
      image: gestionScolariteImg,
      technologies: ["Wordpress"],
      github: "https://github.com/fatima-ezzahra2004",
    },
    {
      title: "StageConnect",
      description:
        "Plateforme de connexion entre stagiaires et entreprises. Simplifie la recherche de stage avec un système de matching intelligent.",
      image: stageConnectImg,
      technologies: ["Javafx", "Mysql", "MVC"],
      github: "https://github.com/fatima-ezzahra2004",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus récentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-hero rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔥 SEUL bouton : Code GitHub */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
