import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { menuItems, categoryLabels } from '@/data/menuData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const locations = [
  'Bangalore, Karnataka',
  'Chennai, Tamil Nadu',
  'Hyderabad, Telangana',
  'Mumbai, Maharashtra',
  'Delhi, NCR',
  'Pune, Maharashtra',
  'Coimbatore, Tamil Nadu',
  'Mysore, Karnataka',
];

export function Navbar() {
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return menuItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      )
      .slice(0, 6);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchItemClick = (itemId: string) => {
    setSearchQuery('');
    setShowSearchResults(false);
    navigate(`/products?search=${itemId}`);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-5">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <h1 className="text-lg font-bold tracking-wide">Evolve Solutions</h1>
              <p className="text-[10px] text-primary-foreground/80">
                The South Plate
              </p>
            </Link>

            {/* Location */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex items-center gap-2 px-2 py-1 rounded hover:bg-primary-foreground/10 transition-colors">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {selectedLocation.length > 18
                      ? selectedLocation.slice(0, 18) + '...'
                      : selectedLocation}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {location}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <div ref={searchRef} className="flex-1 max-w-2xl relative">
              <div className="flex">
                <Input
                  placeholder="Search dosas, idlis, meals..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="rounded-r-none bg-card text-foreground border-0"
                />
                <Button className="rounded-l-none bg-accent text-accent-foreground hover:bg-accent/90">
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              {showSearchResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-50">
                  {searchResults.length ? (
                    searchResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSearchItemClick(item.id)}
                        className="w-full flex gap-3 p-3 hover:bg-secondary text-left"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            ₹{item.price}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="p-4 text-sm text-muted-foreground text-center">
                      No items found
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded hover:bg-primary-foreground/10 transition-colors">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    {isAuthenticated ? user?.name : 'Account'}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/cart')}>
                      Your Cart
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
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-primary-foreground/10 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-header-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <nav className="flex gap-4 py-2 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-primary-foreground/10">
                  <Menu className="h-4 w-4" />
                  Categories
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => navigate(`/products?category=${key}`)}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/" className="px-3 py-1 rounded hover:bg-primary-foreground/10">
              Home
            </Link>
            <Link to="/about" className="px-3 py-1 rounded hover:bg-primary-foreground/10">
              About
            </Link>
            <Link to="/contact" className="px-3 py-1 rounded hover:bg-primary-foreground/10">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
