import { useState } from 'react';
import { Table, TableStatus } from '@/types/hotel';
import { initialTables } from '@/data/tableData';

export function useTables() {
  const [tables, setTables] = useState<Table[]>(initialTables);

  const updateTableStatus = (tableId: string, status: TableStatus) => {
    setTables((prev) =>
      prev.map((table) => (table.id === tableId ? { ...table, status } : table))
    );
  };

  const getTableStats = () => {
    return {
      total: tables.length,
      available: tables.filter((t) => t.status === 'available').length,
      occupied: tables.filter((t) => t.status === 'occupied').length,
      reserved: tables.filter((t) => t.status === 'reserved').length,
      cleaning: tables.filter((t) => t.status === 'cleaning').length,
    };
  };

  return {
    tables,
    updateTableStatus,
    getTableStats,
  };
}
