import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">O nas</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Profesjonalny portal o kasynach online dla polskich graczy
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Kim jesteśmy?</h2>
              <p className="text-muted-foreground mb-6">
                PolskieKasyno to zespół ekspertów z wieloletnim doświadczeniem w branży hazardu online. 
                Nasza misja to pomoc polskim graczom w odnalezieniu najlepszych, bezpiecznych 
                i licencjonowanych kasyn online.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon name="Shield" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Bezpieczeństwo</h3>
                  <p className="text-sm text-muted-foreground">
                    Sprawdzamy licencje i certyfikaty każdego kasyna
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon name="Search" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Szczegółowe testy</h3>
                  <p className="text-sm text-muted-foreground">
                    Testujemy każdy aspekt kasyna przed rekomendacją
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon name="Heart" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Obiektywność</h3>
                  <p className="text-sm text-muted-foreground">
                    Niezależne opinie oparte na faktach
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Co robimy?</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="text-accent mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Testujemy kasyna online pod kątem bezpieczeństwa, uczciwości i jakości obsługi
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="text-accent mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Weryfikujemy licencje i certyfikaty wszystkich rekomendowanych kasyn
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="text-accent mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Negocjujemy ekskluzywne bonusy dla naszych użytkowników
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={20} className="text-accent mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Publikujemy szczegółowe recenzje i porównania kasyn online
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
