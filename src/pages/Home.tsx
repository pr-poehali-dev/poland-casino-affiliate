import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CasinoCard from '@/components/casino/CasinoCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  const topCasinos = [
    {
      name: 'Royal Casino',
      logo: '👑',
      rating: 5,
      bonus: '2000 PLN + 200 darmowych spinów',
      features: [
        'Licencja MGA',
        'Szybkie wypłaty 24h',
        'Ponad 3000 gier',
        'Obsługa PL'
      ],
      url: '#',
      badge: 'TOP 1'
    },
    {
      name: 'Spin Palace',
      logo: '🎰',
      rating: 5,
      bonus: '1500 PLN + 150 free spinów',
      features: [
        'Bonus bez depozytu',
        'Kryptowaluty',
        'Live casino',
        'Program lojalnościowy'
      ],
      url: '#',
      badge: 'NOWE'
    },
    {
      name: 'Lucky Stars',
      logo: '⭐',
      rating: 4,
      bonus: '1000 PLN + 100 darmowych spinów',
      features: [
        'Weryfikacja 15 min',
        'Gry mobilne',
        'Turnieje codzienne',
        'Cashback 10%'
      ],
      url: '#'
    }
  ];

  const features = [
    {
      icon: 'ShieldCheck',
      title: 'Bezpieczne kasyna',
      description: 'Tylko licencjonowane i sprawdzone kasyna online'
    },
    {
      icon: 'Gift',
      title: 'Najlepsze bonusy',
      description: 'Ekskluzywne oferty i promocje dla naszych użytkowników'
    },
    {
      icon: 'Zap',
      title: 'Szybkie wypłaty',
      description: 'Kasyna z najszybszymi wypłatami na rynku'
    },
    {
      icon: 'Users',
      title: 'Opinie graczy',
      description: 'Prawdziwe recenzje od tysięcy polskich graczy'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Polskie Kasyno Online
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Najlepsze kasyna online w Polsce. Sprawdzone recenzje, ekskluzywne bonusy
                i bezpieczna gra dla polskich graczy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Zobacz top kasyna
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90">
                  Porównaj bonusy
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">
              Dlaczego wybieramy najlepsze kasyna
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Testujemy i analizujemy setki kasyn, aby przedstawić Ci tylko sprawdzone i bezpieczne opcje
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Top kasyna online 2025
                </h2>
                <p className="text-muted-foreground">
                  Najlepsze kasyna wybrane przez naszych ekspertów
                </p>
              </div>
              <Button variant="outline" asChild>
                <a href="/kasyna-online">
                  Zobacz wszystkie
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCasinos.map((casino, index) => (
                <CasinoCard key={index} {...casino} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <Icon name="AlertCircle" size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Odpowiedzialna gra</h2>
            <p className="max-w-2xl mx-auto mb-6 opacity-90">
              Pamiętaj, że hazard powinien być rozrywką. Graj tylko za pieniądze, 
              które możesz stracić. Jeśli czujesz, że masz problem z hazardem, 
              skorzystaj z pomocy specjalistów.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm opacity-75">
              <span>🔞 18+</span>
              <span>•</span>
              <span>Graj odpowiedzialnie</span>
              <span>•</span>
              <span>hazardsport.pl</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
