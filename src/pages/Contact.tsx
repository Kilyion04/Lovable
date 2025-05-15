
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <section id="contact-form" className="py-20 scroll-mt-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de la manière dont je peux vous aider.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                placeholder="Sujet de votre message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                placeholder="Votre message..."
              />
            </div>
            <Button type="submit" className="w-full">Envoyer le message</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
