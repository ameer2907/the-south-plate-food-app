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

  // Filter menu items based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return menuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    ).slice(0, 6); // Limit to 6 results
  }, [searchQuery]);

  // Close search results when clicking outside
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
      {/* Main Header */}
      <div className="bg-header text-primary-foreground">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Logo - Text Only */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div>
                <h1 className="text-xl font-bold leading-tight">The South Plate</h1>
                <p className="text-[10px] opacity-80">Taste the Tradition</p>
              </div>
            </Link>

            {/* Delivery Location */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex items-center gap-1 text-sm cursor-pointer hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded p-1">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <p className="text-[10px] opacity-70">Deliver to</p>
                    <p className="font-medium flex items-center gap-1">
                      {selectedLocation.length > 15 
                        ? selectedLocation.substring(0, 15) + '...' 
                        : selectedLocation}
                      <ChevronDown className="h-3 w-3" />
                    </p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover">
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={selectedLocation === location ? 'bg-accent' : ''}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {location}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar with Results */}
            <div className="flex-1 max-w-2xl relative" ref={searchRef}>
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search for dosas, idlis, vadas..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="rounded-r-none bg-white text-foreground border-0 focus-visible:ring-accent"
                />
                <Button className="rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground px-4">
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSearchItemClick(item.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-accent/10 transition-colors text-left"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground truncate">{item.name}</p>
                            <p className="text-sm text-muted-foreground truncate">
                              {item.description}
                            </p>
                            <p className="text-sm font-semibold text-primary">₹{item.price}</p>
                          </div>
                        </button>
                      ))}
                      <Link
                        to={`/products?search=${searchQuery}`}
                        onClick={() => setShowSearchResults(false)}
                        className="block p-3 text-center text-sm text-primary hover:bg-accent/10 border-t border-border"
                      >
                        See all results for "{searchQuery}"
                      </Link>
                    </>
                  ) : (
                    <div className="p-4 text-center text-muted-foreground">
                      No items found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
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
              <DropdownMenuContent align="end" className="w-48 bg-popover">
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
            {/* All Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-1 hover:outline hover:outline-1 hover:outline-primary-foreground/50 rounded whitespace-nowrap">
                  <Menu className="h-4 w-4" />
                  All Categories
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover">
                <DropdownMenuItem onClick={() => navigate('/products')}>
                  <span className="mr-2">📋</span>
                  Full Menu
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
