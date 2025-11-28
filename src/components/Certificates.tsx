import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, MapPin } from "lucide-react";
import agileManagement from "@/assets/agileManagement.webp";
import introToIa from "@/assets/introToIa.webp";
import webScraping from "@/assets/webScraping.webp";

const Certificates = () => {
  const certificates = [
    {
      title: "Agile Project Management",
      organization: "HP Life",
      date: "2024-11",
      image: agileManagement,
      link: "https://www.life-global.org/certificate/7344a686-d1be-43c3-b042-86c5a245ca05",
    },
    {
      title: "Intro to AI",
      organization: "365 Data Science",
      date: "2024-05",
      image: introToIa,
      link: "https://learn.365datascience.com/c/29c26bc560/",
    },
    {
      title: "Web Scraping ",
      organization: "365 Data Science",
      date: "2024-11",
      image: webScraping,
      link: "https://learn.365datascience.com/certificates/CC-272ED8275C/",
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  };

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-3">
            Formation continue et développement professionnel
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>El Jadida, Maroc</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={cert.title}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 p-2 bg-white/90 rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(cert.date)}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary/10"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir le certificat
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
