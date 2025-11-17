import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CasinoCard from '@/components/casino/CasinoCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const CasinosHub = () => {
  const [sortBy, setSortBy] = useState<'rating' | 'bonus'>('rating');

  const allCasinos = [
    {
      name: 'Royal Casino',
      logo: '👑',
      rating: 5,
      bonus: '2000 PLN + 200 FS',
      features: ['Licencja MGA', 'Wypłaty 24h', '3000+ gier', 'Obsługa PL'],
      url: '#',
      badge: 'TOP 1'
    },
    {
      name: 'Spin Palace',
      logo: '🎰',
      rating: 5,
      bonus: '1500 PLN + 150 FS',
      features: ['Bonus bez depozytu', 'Kryptowaluty', 'Live casino', 'Program VIP'],
      url: '#',
      badge: 'NOWE'
    },
    {
      name: 'Lucky Stars',
      logo: '⭐',
      rating: 4,
      bonus: '1000 PLN + 100 FS',
      features: ['Weryfikacja 15min', 'Gry mobilne', 'Turnieje', 'Cashback 10%'],
      url: '#'
    },
    {
      name: 'Diamond Club',
      logo: '💎',
      rating: 5,
      bonus: '2500 PLN + 250 FS',
      features: ['Ekskluzywne gry', 'VIP program', 'Limity wysokie', 'Manager osobisty'],
      url: '#'
    },
    {
      name: 'Vegas Palace',
      logo: '🎲',
      rating: 4,
      bonus: '800 PLN + 80 FS',
      features: ['Blik płatności', 'Gry Novomatic', 'Cashback tygodniowy', 'Live chat PL'],
      url: '#'
    },
    {
      name: 'Golden Wins',
      logo: '🏆',
      rating: 4,
      bonus: '1200 PLN + 120 FS',
      features: ['Mega Moolah', 'Jackpoty progresywne', 'Turnieje slotów', 'Reload bonus'],
      url: '#'
    }
  ];

  const sortedCasinos = [...allCasinos].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return parseInt(b.bonus) - parseInt(a.bonus);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Kasyno Online Opinie</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Szczegółowe recenzje i opinie o najlepszych kasynach online w Polsce. 
              Sprawdź oceny graczy, bonusy powitalne i funkcje każdego kasyna.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-background rounded-lg p-6 text-center border">
                <Icon name="Building2" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">{allCasinos.length}</div>
                <div className="text-sm text-muted-foreground">Sprawdzonych kasyn</div>
              </div>
              <div className="bg-background rounded-lg p-6 text-center border">
                <Icon name="Star" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">4.6</div>
                <div className="text-sm text-muted-foreground">Średnia ocena</div>
              </div>
              <div className="bg-background rounded-lg p-6 text-center border">
                <Icon name="Gift" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">10k+</div>
                <div className="text-sm text-muted-foreground">Bonusów PLN</div>
              </div>
              <div className="bg-background rounded-lg p-6 text-center border">
                <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Opinii graczy</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Wszystkie kasyna online</h2>
                <p className="text-muted-foreground">
                  Znajdź idealne kasyno dla siebie
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={sortBy === 'rating' ? 'default' : 'outline'}
                  onClick={() => setSortBy('rating')}
                  className={sortBy === 'rating' ? 'bg-accent text-accent-foreground' : ''}
                >
                  <Icon name="Star" size={16} className="mr-2" />
                  Najwyższe oceny
                </Button>
                <Button
                  variant={sortBy === 'bonus' ? 'default' : 'outline'}
                  onClick={() => setSortBy('bonus')}
                  className={sortBy === 'bonus' ? 'bg-accent text-accent-foreground' : ''}
                >
                  <Icon name="Gift" size={16} className="mr-2" />
                  Najlepsze bonusy
                </Button>
              </div>
            </div>

            <Tabs defaultValue="wszystkie" className="mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="wszystkie">Wszystkie</TabsTrigger>
                <TabsTrigger value="nowe">Nowe</TabsTrigger>
                <TabsTrigger value="polecane">Polecane</TabsTrigger>
                <TabsTrigger value="wysokie-bonusy">Wysokie bonusy</TabsTrigger>
              </TabsList>

              <TabsContent value="wszystkie" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCasinos.map((casino, index) => (
                    <CasinoCard key={index} {...casino} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nowe" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCasinos.filter(c => c.badge === 'NOWE').map((casino, index) => (
                    <CasinoCard key={index} {...casino} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="polecane" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCasinos.filter(c => c.rating === 5).map((casino, index) => (
                    <CasinoCard key={index} {...casino} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wysokie-bonusy" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCasinos.filter(c => parseInt(c.bonus) >= 1500).map((casino, index) => (
                    <CasinoCard key={index} {...casino} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Nie znalazłeś ideałnego kasyna?</h3>
              <p className="text-muted-foreground mb-6">
                Sprawdź nasze szczegółowe porównania lub skorzystaj z pomocy eksperta
              </p>
              <div className="flex gap-3 justify-center">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Icon name="GitCompare" size={18} className="mr-2" />
                  Porównaj kasyna
                </Button>
                <Button variant="outline">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Porozmawiaj z ekspertem
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasinosHub;
