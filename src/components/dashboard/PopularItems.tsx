import { MenuItem } from '@/types/hotel';
import { Flame, TrendingUp } from 'lucide-react';

interface PopularItemsProps {
  items: MenuItem[];
}

export function PopularItems({ items }: PopularItemsProps) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-semibold text-foreground">Popular Items</h3>
        <TrendingUp className="h-5 w-5 text-primary" />
      </div>

      <div className="space-y-4">
        {items.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-muted animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">
              {item.category === 'dosa' && '🥞'}
              {item.category === 'idli' && '🍚'}
              {item.category === 'vada' && '🍩'}
              {item.category === 'rice' && '🍛'}
              {item.category === 'beverages' && '☕'}
              {item.category === 'desserts' && '🍮'}
              {item.category === 'snacks' && '🥘'}
              {item.category === 'curry' && '🍲'}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground">{item.name}</p>
                {item.isSpicy && <Flame className="h-4 w-4 text-destructive" />}
              </div>
              <p className="text-sm text-muted-foreground">₹{item.price}</p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              #{index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
