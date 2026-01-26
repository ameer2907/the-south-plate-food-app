import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProductCard } from '@/components/products/ProductCard';
import { menuItems, categoryLabels } from '@/data/menuData';
import { MenuCategory } from '@/types/hotel';
import { cn } from '@/lib/utils';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as MenuCategory | null;
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>(categoryParam || 'all');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'popular'>('default');

  const handleCategoryChange = (category: MenuCategory | 'all') => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

    switch (sortBy) {
      case 'price-low':
        return [...items].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...items].sort((a, b) => b.price - a.price);
      case 'popular':
        return [...items].sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
      default:
        return items;
    }
  }, [activeCategory, sortBy]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-card rounded-lg border border-border p-4 sticky top-32">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <Filter className="h-5 w-5" />
                <h2 className="font-semibold">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                  Category
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                      activeCategory === 'all'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    )}
                  >
                    All Items ({menuItems.length})
                  </button>
                  {Object.entries(categoryLabels).map(([key, label]) => {
                    const count = menuItems.filter((i) => i.category === key).length;
                    return (
                      <button
                        key={key}
                        onClick={() => handleCategoryChange(key as MenuCategory)}
                        className={cn(
                          'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                          activeCategory === key
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-secondary'
                        )}
                      >
                        {label} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
                >
                  <option value="default">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Popularity</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">
                  {activeCategory === 'all' ? 'All Menu Items' : categoryLabels[activeCategory]}
                </h1>
                <p className="text-muted-foreground">
                  Showing {filteredItems.length} items
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No items found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
