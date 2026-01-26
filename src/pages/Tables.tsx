import { Layout } from '@/components/layout/Layout';
import { TableCard } from '@/components/tables/TableCard';
import { useTables } from '@/hooks/useTables';
import { toast } from 'sonner';
import { Table } from '@/types/hotel';

export default function Tables() {
  const { tables, updateTableStatus, getTableStats } = useTables();
  const stats = getTableStats();

  const handleStatusChange = (tableId: string, status: Table['status']) => {
    updateTableStatus(tableId, status);
    const table = tables.find((t) => t.id === tableId);
    toast.success(`Table ${table?.number} is now ${status}!`);
  };

  return (
    <Layout title="Tables" subtitle="Manage restaurant seating">
      {/* Stats Summary */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm font-medium text-green-700">
            {stats.available} Available
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200 px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
          <span className="text-sm font-medium text-orange-700">
            {stats.occupied} Occupied
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-blue-50 border border-blue-200 px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-sm font-medium text-blue-700">
            {stats.reserved} Reserved
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-purple-50 border border-purple-200 px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-purple-500" />
          <span className="text-sm font-medium text-purple-700">
            {stats.cleaning} Cleaning
          </span>
        </div>
      </div>

      {/* Tables Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tables.map((table, index) => (
          <div
            key={table.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <TableCard table={table} onStatusChange={handleStatusChange} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
