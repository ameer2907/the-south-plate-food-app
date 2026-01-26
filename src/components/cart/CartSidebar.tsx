import { OrderItem } from '@/types/hotel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onPlaceOrder: (tableNumber: number) => void;
  tableNumber: number;
  onTableChange: (tableNumber: number) => void;
}

export function CartSidebar({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onPlaceOrder,
  tableNumber,
  onTableChange,
}: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-96 bg-card shadow-2xl z-50 transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-warm">
              <ShoppingBag className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold">Your Order</h2>
              <p className="text-sm text-muted-foreground">{items.length} items</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Table Selection */}
        <div className="p-6 border-b border-border">
          <label className="text-sm font-medium text-muted-foreground">Table Number</label>
          <Input
            type="number"
            min={1}
            max={20}
            value={tableNumber}
            onChange={(e) => onTableChange(parseInt(e.target.value) || 1)}
            className="mt-2"
          />
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(100vh-350px)]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add items from the menu</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.menuItem.id}
                className="flex items-center gap-4 rounded-xl bg-muted p-4"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.menuItem.name}</p>
                  <p className="text-sm text-muted-foreground">₹{item.menuItem.price} each</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive"
                    onClick={() => onRemoveItem(item.menuItem.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-card">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">₹{total}</span>
          </div>
          <Button
            variant="warm"
            size="lg"
            className="w-full"
            disabled={items.length === 0}
            onClick={() => onPlaceOrder(tableNumber)}
          >
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
}
