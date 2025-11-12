const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up px-2">
          Quem Somos
        </h2>
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
            A GPhone é uma loja especializada em produtos Apple localizada em Belo Horizonte.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.2s" }}>
            Trabalhamos com iPhones, MacBooks, iPads e Apple Watchs novos e seminovos, 
            todos com garantia e procedência.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.3s" }}>
            Nosso objetivo é oferecer um atendimento personalizado, ágil e transparente — 
            do primeiro contato à entrega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
