import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" size={24} className="text-accent" />
              <span className="text-lg font-bold">PolskieKasyno</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Najlepsze polskie kasyna online z recenzjami i bonusami.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/kasyna-online" className="text-muted-foreground hover:text-accent transition-colors">
                  Kasyna online
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-muted-foreground hover:text-accent transition-colors">
                  O nas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informacje</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/polityka-prywatnosci" className="text-muted-foreground hover:text-accent transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-muted-foreground hover:text-accent transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Odpowiedzialna gra</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Graj odpowiedzialnie. 18+
            </p>
            <div className="flex space-x-2">
              <Icon name="ShieldCheck" size={32} className="text-muted-foreground" />
              <Icon name="Lock" size={32} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 PolskieKasyno. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
