import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="https://wa.me/5531981068052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                (31) 98106-8052
              </a>
              <a
                href="mailto:gphonebh@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                gphonebh@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Endereço</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Ilacir+Pereira+Lima+195+S604+Belo+Horizonte+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Rua Ilacir Pereira Lima, 195 S604<br />Belo Horizonte/MG</span>
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4">CNPJ</h3>
            <p className="text-sm text-muted-foreground">
              42.328.946/0001-21
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="https://instagram.com/gphonebh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @gphonebh
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 GPhone BH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
