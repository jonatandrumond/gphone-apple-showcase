const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Quem Somos
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A GPhone é uma loja especializada em produtos Apple localizada em Belo Horizonte.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Trabalhamos com iPhones, MacBooks, iPads e Apple Watchs novos e seminovos, 
            todos com garantia e procedência.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso objetivo é oferecer um atendimento personalizado, ágil e transparente — 
            do primeiro contato à entrega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
