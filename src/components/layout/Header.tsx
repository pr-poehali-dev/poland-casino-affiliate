import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Icon name="Sparkles" size={28} className="text-accent" />
          <span className="text-xl font-bold">PolskieKasyno</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-accent">
            Strona główna
          </Link>
          <Link to="/kasyna-online" className="transition-colors hover:text-accent">
            Kasyna online
          </Link>
          <Link to="/o-nas" className="transition-colors hover:text-accent">
            O nas
          </Link>
          <Link to="/kontakt" className="transition-colors hover:text-accent">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;