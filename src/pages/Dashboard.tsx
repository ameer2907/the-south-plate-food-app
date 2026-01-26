import { Layout } from '@/components/layout/Layout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentOrders } from '@/components/dashboard/RecentOrders';
import { PopularItems } from '@/components/dashboard/PopularItems';
import { useOrders } from '@/hooks/useOrders';
import { useTables } from '@/hooks/useTables';
import { menuItems } from '@/data/menuData';
import { 
  IndianRupee, 
  ClipboardList, 
  Armchair, 
  TrendingUp 
} from 'lucide-react';

export default function Dashboard() {
  const { orders } = useOrders();
  const { getTableStats } = useTables();
  const tableStats = getTableStats();

  const todayRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const activeOrders = orders.filter((o) => o.status !== 'completed').length;
  const popularItems = menuItems.filter((item) => item.isPopular);

  return (
    <Layout title="Dashboard" subtitle="Welcome back! Here's what's happening today.">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Today's Revenue"
          value={`₹${todayRevenue.toLocaleString()}`}
          icon={<IndianRupee className="h-6 w-6 text-primary" />}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total Orders"
          value={orders.length}
          icon={<ClipboardList className="h-6 w-6 text-secondary" />}
          variant="secondary"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Orders"
          value={activeOrders}
          icon={<TrendingUp className="h-6 w-6 text-accent-foreground" />}
          variant="accent"
        />
        <StatCard
          title="Available Tables"
          value={`${tableStats.available}/${tableStats.total}`}
          icon={<Armchair className="h-6 w-6 text-foreground" />}
        />
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentOrders orders={orders.slice(0, 5)} />
        <PopularItems items={popularItems} />
      </div>
    </Layout>
  );
}
