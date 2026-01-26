import { Order } from '@/types/hotel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, ChefHat, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrderCardProps {
  order: Order;
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
}

const statusConfig = {
  pending: {
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    icon: Clock,
    nextStatus: 'preparing' as const,
    nextLabel: 'Start Preparing',
  },
  preparing: {
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: ChefHat,
    nextStatus: 'ready' as const,
    nextLabel: 'Mark Ready',
  },
  ready: {
    color: 'bg-green-100 text-green-800 border-green-200',
    icon: CheckCircle,
    nextStatus: 'served' as const,
    nextLabel: 'Mark Served',
  },
  served: {
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Utensils,
    nextStatus: 'completed' as const,
    nextLabel: 'Complete Order',
  },
  completed: {
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    icon: CheckCircle,
    nextStatus: null,
    nextLabel: null,
  },
};

export function OrderCard({ order, onUpdateStatus }: OrderCardProps) {
  const config = statusConfig[order.status];
  const StatusIcon = config.icon;

  return (
    <div className="rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-hover">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-warm text-primary-foreground font-bold text-lg">
            T{order.tableNumber}
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Order #{order.id.slice(-4)}
            </p>
            <p className="text-sm text-muted-foreground">
              {order.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
        <Badge className={cn('capitalize flex items-center gap-1', config.color)}>
          <StatusIcon className="h-3 w-3" />
          {order.status}
        </Badge>
      </div>

      {/* Items */}
      <div className="space-y-2 mb-4 pb-4 border-b border-border">
        {order.items.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-foreground">
              {item.quantity}x {item.menuItem.name}
            </span>
            <span className="text-muted-foreground">₹{item.menuItem.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Total Amount</p>
          <p className="text-2xl font-bold text-primary">₹{order.totalAmount}</p>
        </div>
        {config.nextStatus && (
          <Button
            variant="warm"
            onClick={() => onUpdateStatus(order.id, config.nextStatus!)}
          >
            {config.nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
