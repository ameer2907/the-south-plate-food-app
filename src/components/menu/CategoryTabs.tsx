import { MenuCategory } from '@/types/hotel';
import { categoryLabels } from '@/data/menuData';
import { cn } from '@/lib/utils';

interface CategoryTabsProps {
  activeCategory: MenuCategory | 'all';
  onCategoryChange: (category: MenuCategory | 'all') => void;
}

const categories: (MenuCategory | 'all')[] = [
  'all',
  'dosa',
  'idli',
  'vada',
  'rice',
  'curry',
  'snacks',
  'beverages',
  'desserts',
];

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
            activeCategory === category
              ? 'gradient-warm text-primary-foreground shadow-warm'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          )}
        >
          {category === 'all' ? '🍽️ All Items' : categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}
