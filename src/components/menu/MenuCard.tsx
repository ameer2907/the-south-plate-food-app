import { MenuItem } from '@/types/hotel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Leaf, Plus, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
  onAddToOrder: (item: MenuItem) => void;
}

const categoryEmojis: Record<string, string> = {
  dosa: '🥞',
  idli: '🍚',
  vada: '🍩',
  rice: '🍛',
  curry: '🍲',
  snacks: '🥘',
  beverages: '☕',
  desserts: '🍮',
};

export function MenuCard({ item, onAddToOrder }: MenuCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card p-5 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
      {/* Popular badge */}
      {item.isPopular && (
        <div className="absolute -right-8 top-4 rotate-45 gradient-warm px-10 py-1">
          <Star className="h-3 w-3 text-primary-foreground inline mr-1" />
          <span className="text-xs font-medium text-primary-foreground">Popular</span>
        </div>
      )}

      {/* Category emoji */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {categoryEmojis[item.category]}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
          {item.isVeg && <Leaf className="h-4 w-4 text-secondary" />}
          {item.isSpicy && <Flame className="h-4 w-4 text-destructive" />}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between pt-2">
          <p className="text-2xl font-bold text-primary">₹{item.price}</p>
          <Button
            size="sm"
            variant="warm"
            onClick={() => onAddToOrder(item)}
            className="rounded-xl"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
