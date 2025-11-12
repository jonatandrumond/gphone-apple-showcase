const AboutSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in-up px-2">
          Quem Somos
        </h2>
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
            A GPhone é uma loja especializada em produtos Apple localizada em Belo Horizonte.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.2s" }}>
            Trabalhamos com iPhones, MacBooks, iPads e Apple Watchs novos e seminovos, 
            todos com garantia e procedência.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.3s" }}>
            Nosso objetivo é oferecer um atendimento personalizado, ágil e transparente — 
            do primeiro contato à entrega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
