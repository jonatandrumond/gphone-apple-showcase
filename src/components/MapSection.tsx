import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const MapSection = () => {
  const address = "Rua Ilacir Pereira Lima, 195 S604 - Belo Horizonte/MG";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Ilacir+Pereira+Lima+195+S604+Belo+Horizonte+MG";

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-fade-in-up px-2">
          Onde Estamos
        </h2>
        
        <div className="max-w-xl sm:max-w-2xl mx-auto">
          <div className="aspect-video w-full rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-4 sm:mb-6 md:mb-8 animate-scale-in hover:scale-[1.02] transition-transform duration-500" style={{ animationDelay: "0.2s" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.234567890!2d-43.9!3d-19.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU0JzAwLjAiUyA0M8KwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização GPhone BH"
            />
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 md:mb-6 text-muted-foreground animate-fade-in px-2 leading-relaxed" style={{ animationDelay: "0.3s" }}>{address}</p>
            <div className="flex justify-center animate-scale-in px-3 sm:px-4" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
                asChild
              >
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
