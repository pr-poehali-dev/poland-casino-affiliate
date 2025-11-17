import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Regulamin</h1>
            <p className="text-xl opacity-90">
              Zasady korzystania z serwisu
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Postanowienia ogólne</h2>
                <p className="text-muted-foreground">
                  Niniejszy regulamin określa zasady korzystania z serwisu PolskieKasyno.pl, 
                  który dostarcza informacje o kasynach online oraz prowadzi działalność 
                  afiliacyjną.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Definicje</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Serwis</strong> - strona internetowa PolskieKasyno.pl</li>
                  <li><strong>Użytkownik</strong> - osoba korzystająca z serwisu</li>
                  <li><strong>Treści</strong> - artykuły, recenzje i materiały dostępne w serwisie</li>
                  <li><strong>Operator</strong> - właściciel serwisu PolskieKasyno</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Korzystanie z serwisu</h2>
                <p className="text-muted-foreground mb-4">
                  Użytkownik zobowiązuje się do:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Korzystania z serwisu zgodnie z prawem</li>
                  <li>Niepodejmowania działań szkodzących serwisowi</li>
                  <li>Poszanowania praw własności intelektualnej</li>
                  <li>Niepublikowania nielegalnych treści</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Linki afiliacyjne</h2>
                <p className="text-muted-foreground">
                  Serwis zawiera linki afiliacyjne do kasyn online. Kliknięcie w takie linki 
                  może skutkować otrzymaniem prowizji przez operatora serwisu. Nie wpływa to 
                  na obiektywność prezentowanych informacji.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Odpowiedzialność</h2>
                <p className="text-muted-foreground">
                  Serwis ma charakter informacyjny. Operator nie ponosi odpowiedzialności za:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Decyzje podejmowane przez użytkowników na podstawie treści</li>
                  <li>Działania kasyn online do których prowadzą linki</li>
                  <li>Straty poniesione w związku z grą w kasynach online</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Odpowiedzialna gra</h2>
                <p className="text-muted-foreground">
                  Serwis jest przeznaczony dla osób pełnoletnich (18+). Użytkownik zobowiązuje 
                  się do odpowiedzialnego podejścia do hazardu i korzystania z dostępnych 
                  mechanizmów kontroli.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Zmiany regulaminu</h2>
                <p className="text-muted-foreground">
                  Operator zastrzega sobie prawo do wprowadzania zmian w regulaminie. 
                  Aktualna wersja zawsze dostępna jest na stronie serwisu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Postanowienia końcowe</h2>
                <p className="text-muted-foreground">
                  W sprawach nieuregulowanych niniejszym regulaminem stosuje się przepisy 
                  prawa polskiego. Regulamin wchodzi w życie z dniem publikacji.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
