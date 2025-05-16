
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send, Contact } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Contactez-moi</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de la manière dont je peux vous aider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold flex items-center mb-6">
                <Contact className="mr-2 h-5 w-5 text-primary" />
                Informations de contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@monportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+33 6 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Localisation</h3>
                    <p className="text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Horaires</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lundi - Vendredi:</span>
                    <span>9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samedi:</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche:</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Send className="mr-2 h-5 w-5 text-primary" />
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                  <Input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Votre message..."
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
