import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Polityka Prywatności</h1>
            <p className="text-xl opacity-90">
              Ostatnia aktualizacja: 2025
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Informacje ogólne</h2>
                <p className="text-muted-foreground">
                  Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych 
                  użytkowników serwisu PolskieKasyno.pl.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Administratorzy danych</h2>
                <p className="text-muted-foreground">
                  Administratorem danych osobowych zbieranych za pośrednictwem serwisu jest 
                  PolskieKasyno sp. z o.o.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Zbierane dane</h2>
                <p className="text-muted-foreground mb-4">
                  Podczas korzystania z serwisu możemy zbierać następujące dane:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Adres IP</li>
                  <li>Typ przeglądarki</li>
                  <li>Informacje o urządzeniu</li>
                  <li>Dane analityczne (poprzez cookies)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Cel przetwarzania danych</h2>
                <p className="text-muted-foreground mb-4">
                  Dane osobowe przetwarzane są w następujących celach:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Świadczenie usług dostępnych w serwisie</li>
                  <li>Analiza ruchu na stronie</li>
                  <li>Poprawa jakości usług</li>
                  <li>Kontakt z użytkownikami</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Prawa użytkowników</h2>
                <p className="text-muted-foreground mb-4">
                  Użytkownikom przysługują następujące prawa:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Prawo dostępu do swoich danych</li>
                  <li>Prawo do sprostowania danych</li>
                  <li>Prawo do usunięcia danych</li>
                  <li>Prawo do ograniczenia przetwarzania</li>
                  <li>Prawo do przenoszenia danych</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Pliki cookies</h2>
                <p className="text-muted-foreground">
                  Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania 
                  oraz analizy ruchu. Użytkownik może w każdej chwili zmienić ustawienia 
                  dotyczące cookies w swojej przeglądarce.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Kontakt</h2>
                <p className="text-muted-foreground">
                  W sprawach dotyczących ochrony danych osobowych prosimy o kontakt: 
                  kontakt@polskiekasyno.pl
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

export default PrivacyPolicy;
