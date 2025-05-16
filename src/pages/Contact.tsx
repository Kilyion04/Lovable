
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import MapComponent from "@/components/map/MapComponent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Locations for the map
  const locations = [
    {
      name: "Lens",
      coordinates: [2.8332, 50.4291],
      description: "Bureau principal"
    },
    {
      name: "Lille",
      coordinates: [3.0573, 50.6292],
      description: "Bureau secondaire"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend or email service
    alert("Message envoyé avec succès!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <section id="contact-hero" className="py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de la manière dont je peux vous aider.
        </p>
      </section>
      
      <section id="contact-info" className="py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informations de Contact</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-muted-foreground">123 Rue de l'Innovation, 75001 Paris, France</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:contact@example.com" className="text-primary">contact@example.com</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-primary">+33 1 23 45 67 89</a>
                  </div>
                </CardContent>
              </Card>
              
              <div className="pt-6">
                <h3 className="font-medium mb-4">Suivez-moi</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div id="contact-form">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-moi un Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  placeholder="Votre message..."
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">Envoyer le message</Button>
            </form>
          </div>
        </div>
      </section>
      
      <section id="map" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Me Localiser</h2>
        <MapComponent locations={locations} />
      </section>
    </Layout>
  );
};

export default Contact;
