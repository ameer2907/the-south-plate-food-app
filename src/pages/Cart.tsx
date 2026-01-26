import { Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const deliveryFee = total >= 299 ? 0 : 40;
  const grandTotal = total + deliveryFee;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=checkout');
    } else {
      navigate('/checkout');
    }
  };

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-card rounded-lg border border-border">
              {items.map((item, index) => (
                <div
                  key={item.menuItem.id}
                  className={`flex gap-4 p-4 ${index !== items.length - 1 ? 'border-b border-border' : ''}`}
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center text-4xl shrink-0">
                    {item.menuItem.category === 'dosa' && '🥞'}
                    {item.menuItem.category === 'idli' && '🍚'}
                    {item.menuItem.category === 'vada' && '🍩'}
                    {item.menuItem.category === 'rice' && '🍛'}
                    {item.menuItem.category === 'curry' && '🍲'}
                    {item.menuItem.category === 'snacks' && '🥘'}
                    {item.menuItem.category === 'beverages' && '☕'}
                    {item.menuItem.category === 'desserts' && '🍮'}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground mb-1">{item.menuItem.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                      {item.menuItem.description}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      ₹{item.menuItem.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.menuItem.id)}
                      className="text-destructive hover:text-destructive/80 text-sm flex items-center gap-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium border-x border-border">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-card rounded-lg border border-border p-4 sticky top-32">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className={deliveryFee === 0 ? 'text-success font-medium' : 'font-medium'}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {total < 299 && (
                  <p className="text-xs text-muted-foreground bg-secondary p-2 rounded">
                    Add ₹{299 - total} more for free delivery
                  </p>
                )}
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <Button
                variant="accent"
                size="lg"
                className="w-full"
                onClick={handleCheckout}
              >
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Button>

              <Link
                to="/products"
                className="block text-center text-primary text-sm mt-3 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
