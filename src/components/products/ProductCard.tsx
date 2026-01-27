import { MenuItem } from '@/types/hotel';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Star, Leaf, Flame, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface ProductCardProps {
  item: MenuItem;
}


export function ProductCard({ item }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setAdded(true);
    toast.success(`${item.name} added to cart!`);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col animate-fade-in">
      {/* Food Image */}
      <div className="rounded-lg h-40 mb-4 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-medium text-foreground leading-tight">{item.name}</h3>
          <div className="flex items-center gap-1 shrink-0">
            {item.isVeg && <Leaf className="h-4 w-4 text-success" />}
            {item.isSpicy && <Flame className="h-4 w-4 text-destructive" />}
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5 bg-success text-white text-xs font-medium px-1.5 py-0.5 rounded">
            4.{Math.floor(Math.random() * 5) + 1}
            <Star className="h-3 w-3 fill-current" />
          </div>
          <span className="text-xs text-muted-foreground">
            ({Math.floor(Math.random() * 500) + 100})
          </span>
          {item.isPopular && (
            <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium ml-auto">
              Bestseller
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-foreground">₹{item.price}</span>
          <span className="text-sm text-muted-foreground line-through">
            ₹{Math.round(item.price * 1.2)}
          </span>
          <span className="text-sm text-success font-medium">20% off</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant={added ? 'success' : 'accent'}
        className="w-full"
        onClick={handleAddToCart}
        disabled={added}
      >
        {added ? (
          <>
            <Check className="h-4 w-4" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </>
        )}
      </Button>
    </div>
  );
}
