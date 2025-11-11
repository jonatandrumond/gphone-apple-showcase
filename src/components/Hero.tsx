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
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up drop-shadow-lg">
          Apple com atendimento especializado em BH
        </h2>
        <p className="text-lg md:text-2xl mb-10 text-balance max-w-2xl mx-auto opacity-95 animate-fade-in-up drop-shadow-md" style={{ animationDelay: "0.2s" }}>
          Encontre o iPhone, MacBook, iPad ou Apple Watch ideal para você
        </p>
        <div className="flex justify-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(142,198,103,0.6)] transition-all duration-500 hover:scale-110 animate-float"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
