import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-iphone.jpg";

const Hero = () => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos Apple da GPhone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-fade-in">
          Apple com atendimento especializado em BH
        </h2>
        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Encontre o iPhone, MacBook, iPad ou Apple Watch ideal para você
        </p>
        <Button
          size="lg"
          className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
          asChild
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
