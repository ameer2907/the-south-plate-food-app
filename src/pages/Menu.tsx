import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { MenuCard } from '@/components/menu/MenuCard';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/menuData';
import { MenuCategory } from '@/types/hotel';
import { useOrders } from '@/hooks/useOrders';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState(1);

  const { cartItems, addToCart, updateCartQuantity, removeFromCart, placeOrder } = useOrders();

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      description: `₹${item.price}`,
    });
  };

  const handlePlaceOrder = (table: number) => {
    placeOrder(table);
    setIsCartOpen(false);
    toast.success('Order placed successfully!', {
      description: `Table ${table} - Your order is being prepared`,
    });
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Layout title="Menu" subtitle="Authentic South Indian delicacies">
      {/* Floating Cart Button */}
      <Button
        variant="warm"
        size="lg"
        className="fixed bottom-8 right-8 z-30 rounded-full h-16 w-16 shadow-lg animate-pulse-glow"
        onClick={() => setIsCartOpen(true)}
      >
        <div className="relative">
          <ShoppingBag className="h-6 w-6" />
          {cartTotal > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
              {cartTotal}
            </span>
          )}
        </div>
      </Button>

      {/* Category Tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Menu Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <MenuCard item={item} onAddToOrder={handleAddToCart} />
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onPlaceOrder={handlePlaceOrder}
        tableNumber={tableNumber}
        onTableChange={setTableNumber}
      />
    </Layout>
  );
}
