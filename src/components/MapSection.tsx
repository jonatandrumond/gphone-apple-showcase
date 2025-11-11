import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const MapSection = () => {
  const address = "Rua Ilacir Pereira Lima, 195 S604 - Belo Horizonte/MG";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Ilacir+Pereira+Lima+195+S604+Belo+Horizonte+MG";

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Onde Estamos
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-6">
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
            <p className="text-lg mb-4 text-muted-foreground">{address}</p>
            <Button size="lg" variant="outline" asChild>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
