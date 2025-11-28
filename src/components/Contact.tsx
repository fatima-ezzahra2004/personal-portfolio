import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgeyqwb"); // Ton ID Formspree

  // 🔥 Reset input après envoi + toast
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message envoyé avec succès !");
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) form.reset(); // vider les inputs
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contactez<span className="gradient-text">-moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-hero">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    fatimaezzahrachibane1@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-hero">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">0707485561</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-hero">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localisation</h3>
                  <p className="text-sm text-muted-foreground">
                    Casablanca, Maroc
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card
            className="lg:col-span-2 p-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="h-12"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  className="h-12"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  required
                  rows={6}
                  className="resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={state.submitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow disabled:opacity-50"
              >
                <Send className="mr-2 h-5 w-5" />
                {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
