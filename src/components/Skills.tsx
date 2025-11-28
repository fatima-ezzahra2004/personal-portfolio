import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Cpu, Globe, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "text-primary",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", ],
    },
    {
      title: "Backend",
      icon: Terminal,
      color: "text-secondary",
      skills: ["PHP", "Laravel", "Python","javafx" ],
    },
    {
      title: "Database",
      icon: Database,
      color: "text-accent",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Outils",
      icon: Code2,
      color: "text-primary-dark",
      skills: ["Git", "GitHub",  "VS Code", "Intellij idea","Figma"],
    },
    {
      title: "CMS",
      icon: Cpu,
      color: "text-secondary",
      skills: ["WordPress"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une stack technique moderne et complète pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover-lift animate-fade-in-up border-2 hover:border-primary/30 group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-hero ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <Icon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{category.title}</h3>
                    <div className="h-1 w-12 bg-gradient-primary rounded group-hover:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-hero rounded-full text-sm font-medium text-foreground/80 hover:bg-primary/20 hover:scale-110 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 cursor-default animate-fade-in group/skill relative overflow-hidden"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <span className="absolute inset-0 bg-gradient-primary opacity-0 group-hover/skill:opacity-30 transition-opacity duration-500" />
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
