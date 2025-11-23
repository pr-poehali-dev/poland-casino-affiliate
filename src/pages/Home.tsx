import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CasinoCard from '@/components/casino/CasinoCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  const scrollToCasinos = () => {
    const casinosSection = document.getElementById('top-casinos');
    if (casinosSection) {
      casinosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={scrollToCasinos}
                >
                  Zobacz top kasyna
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-background text-foreground hover:bg-background/90"
                  onClick={scrollToCasinos}
                >
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

        <section id="top-casinos" className="py-16 scroll-mt-20">
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

        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Polskie Kasyna Online 2025 – Kompletny Przewodnik</h2>
              
              <p className="text-muted-foreground text-lg mb-6">
                Witamy w najbardziej kompleksowym przewodniku po polskich kasynach online! 
                Nasz zespół ekspertów testuje i analizuje setki platform hazardowych, aby przedstawić 
                Ci tylko najlepsze, najbezpieczniejsze i najbardziej opłacalne kasyna dostępne dla polskich graczy.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="Trophy" size={24} className="text-accent mr-2" />
                  Czym jest kasyno online?
                </h3>
                <p className="text-muted-foreground mb-0">
                  Kasyno online to wirtualna platforma hazardowa, która oferuje szeroki wybór gier losowych 
                  dostępnych przez internet. Współczesne kasyna internetowe zapewniają setki automatów do gier, 
                  gry stołowe jak poker, ruletka, blackjack, a także live casino z prawdziwymi krupierami 
                  transmitowanymi na żywo.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-10">Jak wybrać najlepsze kasyno online w Polsce?</h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <Icon name="Shield" size={24} className="text-accent mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Licencja i bezpieczeństwo</h4>
                      <p className="text-sm text-muted-foreground">
                        Sprawdzaj licencje MGA, Curacao lub UK Gambling Commission. Najlepsze kasyna 
                        stosują szyfrowanie SSL 256-bit i są certyfikowane przez niezależne audyty jak eCOGRA.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <Icon name="Percent" size={24} className="text-accent mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Bonusy i promocje</h4>
                      <p className="text-sm text-muted-foreground">
                        Szukaj kasyn z atrakcyjnymi bonusami powitalnymi, niskimi wymaganiami obrotu (wagering) 
                        i regularnymi promocjami dla stałych graczy. Sprawdzaj zawsze regulamin bonusu!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <Icon name="Gamepad2" size={24} className="text-accent mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Wybór gier</h4>
                      <p className="text-sm text-muted-foreground">
                        Najlepsze kasyna oferują tysiące slotów od topowych dostawców (NetEnt, Microgaming, 
                        Pragmatic Play), gry stołowe, video poker i rozbudowane live casino.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <Icon name="CreditCard" size={24} className="text-accent mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Metody płatności</h4>
                      <p className="text-sm text-muted-foreground">
                        Sprawdź dostępność popularnych metod w Polsce: Blik, szybkie przelewy, karty Visa/Mastercard, 
                        e-portfele (Skrill, Neteller) oraz kryptowaluty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-10">Rodzaje bonusów w kasynach online</h3>
              
              <ul className="space-y-4 my-6">
                <li className="flex items-start">
                  <Icon name="Gift" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Bonus powitalny</strong>
                    <span className="text-muted-foreground"> – Najczęściej 100-200% pierwszego depozytu plus darmowe spiny. 
                    To najbardziej hojne oferty, które mogą sięgać nawet 5000 PLN.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Sparkles" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Bonus bez depozytu</strong>
                    <span className="text-muted-foreground"> – Darmowe środki lub spiny bez konieczności wpłaty. 
                    Idealny sposób na przetestowanie kasyna bez ryzyka.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="RotateCw" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Cashback</strong>
                    <span className="text-muted-foreground"> – Zwrot części przegranych pieniędzy, zwykle 5-25%. 
                    Zmniejsza ryzyko i pozwala grać dłużej.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Star" size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Program VIP</strong>
                    <span className="text-muted-foreground"> – Ekskluzywne nagrody dla lojalnych graczy: 
                    wyższe limity, szybsze wypłaty, dedykowany manager, luksusowe prezenty.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-xl my-10 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Icon name="Lightbulb" size={28} className="text-accent mr-3" />
                  Profesjonalne wskazówki dla graczy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-muted-foreground">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zawsze czytaj regulamin bonusów – zwracaj uwagę na wagering (obrót) i maksymalną wygraną</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zacznij od gier demo, aby poznać mechanikę bez ryzyka utraty pieniędzy</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Ustaw limity depozytów i czasu gry – odpowiedzialna gra to podstawa</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Wybieraj sloty z wysokim RTP (Return to Player) – powyżej 96% to dobry standard</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-10">Bezpieczne gry w kasynach online</h3>
              
              <p className="text-muted-foreground mb-4">
                Bezpieczeństwo to najważniejszy aspekt gry w kasynie internetowym. Wszystkie kasyna, 
                które rekomendujemy, przeszły rygorystyczne testy bezpieczeństwa i spełniają najwyższe 
                standardy branżowe. Sprawdzamy szyfrowanie danych, politykę prywatności, certyfikaty 
                uczciwości gier oraz opinie innych graczy.
              </p>

              <p className="text-muted-foreground mb-4">
                Pamiętaj, że legalne kasyna online działają zgodnie z międzynarodowymi regulacjami 
                i posiadają licencje wydane przez renomowane organy regulacyjne. Nigdy nie graj 
                w kasynach bez licencji – to gwarancja uczciwej gry i bezpiecznych transakcji.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <Icon name="AlertCircle" size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Odpowiedzialna gra – 18+</h2>
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