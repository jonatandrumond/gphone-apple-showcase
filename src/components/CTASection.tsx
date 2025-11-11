import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos da GPhone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
          Ainda em dúvida?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Fale com a GPhone agora mesmo
        </p>
        <div className="flex justify-center mb-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(142,198,103,0.7)] transition-all duration-500 hover:scale-110 animate-float"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-7 w-7" />
              Atendimento no WhatsApp
            </a>
          </Button>
        </div>
        <p className="text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Atendimento rápido e direto com nossa equipe
        </p>
      </div>
    </section>
  );
};

export default CTASection;
