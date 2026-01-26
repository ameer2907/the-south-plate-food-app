import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { CheckCircle, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'upi'>('cod');

  const deliveryFee = total >= 299 ? 0 : 40;
  const grandTotal = total + deliveryFee;

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setOrderPlaced(true);
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (orderPlaced) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="h-20 w-20 text-success mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground mb-2">
              Thank you for your order. Your food will be delivered within 30-45 minutes.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Order ID: #ORD{Date.now().toString().slice(-6)}
            </p>
            <Button variant="accent" size="lg" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Delivery Details */}
            <div className="flex-1 space-y-6">
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="font-semibold text-lg mb-4">Delivery Address</h2>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your full address"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Enter PIN code"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={cn(
                      'w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-colors',
                      paymentMethod === 'cod'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-muted-foreground'
                    )}
                  >
                    <Banknote className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={cn(
                      'w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-colors',
                      paymentMethod === 'upi'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-muted-foreground'
                    )}
                  >
                    <Smartphone className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">UPI Payment</p>
                      <p className="text-sm text-muted-foreground">Pay via any UPI app</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={cn(
                      'w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-colors',
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-muted-foreground'
                    )}
                  >
                    <CreditCard className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">All cards accepted</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-80">
              <div className="bg-card rounded-lg border border-border p-4 sticky top-32">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

                {/* Items */}
                <div className="max-h-48 overflow-y-auto space-y-3 mb-4 pb-4 border-b border-border">
                  {items.map((item) => (
                    <div key={item.menuItem.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.quantity}x {item.menuItem.name}
                      </span>
                      <span className="font-medium">₹{item.menuItem.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className={deliveryFee === 0 ? 'text-success font-medium' : 'font-medium'}>
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : `Place Order • ₹${grandTotal}`}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
