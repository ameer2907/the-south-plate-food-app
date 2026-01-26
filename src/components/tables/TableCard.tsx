import { Table } from '@/types/hotel';
import { Button } from '@/components/ui/button';
import { Users, Clock, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TableCardProps {
  table: Table;
  onStatusChange: (tableId: string, status: Table['status']) => void;
}

const statusConfig = {
  available: {
    bg: 'bg-green-50 border-green-200',
    text: 'text-green-700',
    icon: Check,
    label: 'Available',
  },
  occupied: {
    bg: 'bg-orange-50 border-orange-200',
    text: 'text-orange-700',
    icon: Users,
    label: 'Occupied',
  },
  reserved: {
    bg: 'bg-blue-50 border-blue-200',
    text: 'text-blue-700',
    icon: Clock,
    label: 'Reserved',
  },
  cleaning: {
    bg: 'bg-purple-50 border-purple-200',
    text: 'text-purple-700',
    icon: Sparkles,
    label: 'Cleaning',
  },
};

export function TableCard({ table, onStatusChange }: TableCardProps) {
  const config = statusConfig[table.status];
  const StatusIcon = config.icon;

  return (
    <div
      className={cn(
        'relative rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1',
        config.bg
      )}
    >
      {/* Table number */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-warm text-primary-foreground font-display text-2xl font-bold shadow-warm">
          {table.number}
        </div>
        <div className={cn('flex items-center gap-1 text-sm font-medium', config.text)}>
          <StatusIcon className="h-4 w-4" />
          {config.label}
        </div>
      </div>

      {/* Capacity */}
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Users className="h-4 w-4" />
        <span className="text-sm">{table.capacity} Guests</span>
      </div>

      {/* Status buttons */}
      <div className="flex flex-wrap gap-2">
        {table.status === 'available' && (
          <Button
            size="sm"
            variant="warm"
            onClick={() => onStatusChange(table.id, 'occupied')}
            className="flex-1"
          >
            Seat Guests
          </Button>
        )}
        {table.status === 'occupied' && (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onStatusChange(table.id, 'cleaning')}
            className="flex-1"
          >
            Mark for Cleaning
          </Button>
        )}
        {table.status === 'cleaning' && (
          <Button
            size="sm"
            variant="leaf"
            onClick={() => onStatusChange(table.id, 'available')}
            className="flex-1"
          >
            Mark Available
          </Button>
        )}
        {table.status === 'reserved' && (
          <Button
            size="sm"
            variant="warm"
            onClick={() => onStatusChange(table.id, 'occupied')}
            className="flex-1"
          >
            Seat Guests
          </Button>
        )}
      </div>
    </div>
  );
}
