import { Order } from '@/types/hotel';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface RecentOrdersProps {
  orders: Order[];
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  preparing: 'bg-blue-100 text-blue-800 border-blue-200',
  ready: 'bg-green-100 text-green-800 border-green-200',
  served: 'bg-purple-100 text-purple-800 border-purple-200',
  completed: 'bg-gray-100 text-gray-800 border-gray-200',
};

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-semibold text-foreground">Recent Orders</h3>
        <span className="text-sm text-muted-foreground">Today</span>
      </div>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={cn(
              'flex items-center justify-between rounded-xl p-4 transition-all duration-300 hover:bg-muted animate-slide-up',
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-warm text-primary-foreground font-bold">
                #{order.tableNumber}
              </div>
              <div>
                <p className="font-medium text-foreground">Table {order.tableNumber}</p>
                <p className="text-sm text-muted-foreground">
                  {order.items.length} items • ₹{order.totalAmount}
                </p>
              </div>
            </div>

            <Badge className={cn('capitalize', statusColors[order.status])}>
              {order.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
