import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CasinoCardProps {
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  features: string[];
  url: string;
  badge?: string;
}

const CasinoCard = ({ name, logo, rating, bonus, features, url, badge }: CasinoCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">{logo}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < rating ? 'text-accent fill-accent' : 'text-muted'}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{rating}/5</span>
              </div>
            </div>
          </div>
          {badge && (
            <Badge className="bg-accent text-accent-foreground">{badge}</Badge>
          )}
        </div>

        <div className="bg-secondary/50 rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold mb-1">Bonus powitalny</p>
          <p className="text-lg font-bold text-accent">{bonus}</p>
        </div>

        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Icon name="Check" size={16} className="text-accent mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Graj teraz
          </a>
        </Button>
        <Button variant="outline" className="flex-1">
          Recenzja
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CasinoCard;
