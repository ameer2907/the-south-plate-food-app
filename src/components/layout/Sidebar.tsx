import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ClipboardList, 
  Armchair,
  ChefHat
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Menu', href: '/menu', icon: UtensilsCrossed },
  { name: 'Orders', href: '/orders', icon: ClipboardList },
  { name: 'Tables', href: '/tables', icon: Armchair },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r border-border shadow-card">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 px-6 border-b border-border">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-warm shadow-warm">
          <ChefHat className="h-7 w-7 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">Annapurna</h1>
          <p className="text-xs text-muted-foreground">South Indian Cuisine</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'gradient-warm text-primary-foreground shadow-warm'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
        <div className="rounded-xl bg-muted p-4 banana-leaf-pattern">
          <p className="text-xs text-muted-foreground text-center">
            🌿 Authentic South Indian
          </p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Pure Vegetarian
          </p>
        </div>
      </div>
    </aside>
  );
}
