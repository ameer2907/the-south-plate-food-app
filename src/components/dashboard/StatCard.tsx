import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

export function StatCard({ title, value, icon, trend, variant = 'default' }: StatCardProps) {
  const variants = {
    default: 'bg-card',
    primary: 'gradient-warm text-primary-foreground',
    secondary: 'gradient-leaf text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  const isColored = variant !== 'default';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1',
        variants[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={cn('text-sm font-medium', isColored ? 'opacity-80' : 'text-muted-foreground')}>
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold font-display">{value}</p>
          {trend && (
            <p className={cn('mt-2 text-sm font-medium', trend.isPositive ? 'text-secondary' : 'text-destructive')}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}% from yesterday
            </p>
          )}
        </div>
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl',
            isColored ? 'bg-white/20' : 'bg-muted'
          )}
        >
          {icon}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/10" />
    </div>
  );
}
