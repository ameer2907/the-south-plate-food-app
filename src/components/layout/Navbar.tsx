import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-header text-primary-foreground">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <span className="text-2xl">🍛</span>
              <div>
                <h1 className="text-xl font-bold leading-tight">Annapurna</h1>
                <p className="text-[10px] opacity-80">South Indian Food</p>
              </div>
            </Link>

            {/* Delivery Location */}
            <div className="hidden md:flex items-center gap-1 text-sm cursor-pointer hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded p-1">
              <MapPin className="h-4 w-4" />
              <div>
                <p className="text-[10px] opacity-70">Deliver to</p>
                <p className="font-medium">Select Location</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search for dosas, idlis, vadas..."
                  className="rounded-r-none bg-white text-foreground border-0 focus-visible:ring-accent"
                />
                <Button className="rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground px-4">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex items-center gap-1 text-sm hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded p-2">
                  <User className="h-5 w-5" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-70">
                      {isAuthenticated ? `Hello, ${user?.name}` : 'Hello, Sign in'}
                    </p>
                    <p className="font-medium flex items-center gap-1">
                      Account <ChevronDown className="h-3 w-3" />
                    </p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/orders')}>
                      Your Orders
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/login')}>
                      Sign In
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/register')}>
                      Create Account
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded p-2 relative"
            >
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline font-medium">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-header-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 py-2 text-sm overflow-x-auto">
            <Link to="/" className="flex items-center gap-1 px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              <Menu className="h-4 w-4" />
              All Categories
            </Link>
            <Link to="/products" className="px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              Menu
            </Link>
            <Link to="/products?category=dosa" className="px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              Dosas
            </Link>
            <Link to="/products?category=idli" className="px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              Idlis
            </Link>
            <Link to="/products?category=rice" className="px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              Rice Items
            </Link>
            <Link to="/about" className="px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              About Us
            </Link>
            <Link to="/contact" className="px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
