import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fatima-ezzahra2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-hero hover:shadow-glow transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/fatima-ezzahra-chibane/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-hero hover:shadow-glow transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:fatimaezzahrachibane1@gmail.com"
              className="p-3 rounded-full bg-gradient-hero hover:shadow-glow transition-all hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              © {currentYear} <span className="font-semibold gradient-text">Fatima Ezzahra Chibane</span>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
