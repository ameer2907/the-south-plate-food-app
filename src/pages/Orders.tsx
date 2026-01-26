import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { OrderCard } from '@/components/orders/OrderCard';
import { useOrders } from '@/hooks/useOrders';
import { Order } from '@/types/hotel';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const statusFilters: (Order['status'] | 'all')[] = [
  'all',
  'pending',
  'preparing',
  'ready',
  'served',
  'completed',
];

export default function Orders() {
  const { orders, updateOrderStatus } = useOrders();
  const [activeFilter, setActiveFilter] = useState<Order['status'] | 'all'>('all');

  const filteredOrders = activeFilter === 'all'
    ? orders
    : orders.filter((order) => order.status === activeFilter);

  const handleUpdateStatus = (orderId: string, status: Order['status']) => {
    updateOrderStatus(orderId, status);
    toast.success(`Order updated to ${status}!`);
  };

  return (
    <Layout title="Orders" subtitle="Manage and track all customer orders">
      {/* Status Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {statusFilters.map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 capitalize',
              activeFilter === status
                ? 'gradient-warm text-primary-foreground shadow-warm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            )}
          >
            {status === 'all' ? '📋 All Orders' : status}
          </button>
        ))}
      </div>

      {/* Orders Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredOrders.map((order, index) => (
          <div
            key={order.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <OrderCard order={order} onUpdateStatus={handleUpdateStatus} />
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No orders found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Orders will appear here when customers place them
          </p>
        </div>
      )}
    </Layout>
  );
}
