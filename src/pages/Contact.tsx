import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Masz pytania? Skontaktuj się z nami
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Napisz do nas</h2>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Imię i nazwisko</label>
                    <Input placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="jan@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Temat</label>
                    <Input placeholder="W czym możemy pomóc?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Wiadomość</label>
                    <Textarea placeholder="Twoja wiadomość..." rows={6} />
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Wyślij wiadomość
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Informacje kontaktowe</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">kontakt@polskiekasyno.pl</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="MessageCircle" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-muted-foreground">Dostępny 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Godziny pracy</h3>
                      <p className="text-muted-foreground">Pon-Pt: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Najczęściej zadawane pytania</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="ChevronRight" size={16} className="text-accent mr-2" />
                      <span className="text-muted-foreground">Jak wybrać najlepsze kasyno?</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="ChevronRight" size={16} className="text-accent mr-2" />
                      <span className="text-muted-foreground">Czy kasyna online są bezpieczne?</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="ChevronRight" size={16} className="text-accent mr-2" />
                      <span className="text-muted-foreground">Jak działa bonus powitalny?</span>
                    </li>
                    <li className="flex items-center">
                      <Icon name="ChevronRight" size={16} className="text-accent mr-2" />
                      <span className="text-muted-foreground">Jakie są metody płatności?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
