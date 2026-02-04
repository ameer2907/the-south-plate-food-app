import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { menuItems, categoryLabels } from '@/data/menuData';

export function Navbar() {
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Koramangala, Bengaluru');
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar: Brand Blue */}
      <div className="bg-[#2874f0] text-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-6">
          
          {/* Logo Section - THE SOUTH PLATE (BIG) */}
          <Link to="/" className="flex flex-col leading-none group min-w-fit">
            <span className="font-[900] text-2xl md:text-3xl tracking-tighter italic text-white">
              THE SOUTH <span className="text-[#ff9f00]">PLATE</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mt-1">
              BY EVOLVE SOLUTIONS
            </span>
          </Link>

          {/* Location Picker - OG Style */}
          <div className="hidden lg:flex items-center gap-1 text-white/90 hover:bg-white/10 cursor-pointer transition-colors px-3 py-2 rounded-sm">
            <MapPin className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-tight">{selectedLocation}</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          {/* Search Bar - Professional White Style */}
          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <div className="relative flex group">
              <Input
                type="text"
                placeholder="Search for luxury food, dosas, meals..."
                value={searchQuery}
                className="w-full bg-white border-none text-slate-900 focus:ring-0 pl-10 h-10 rounded-r-none rounded-l-sm transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <button className="bg-[#ff9f00] px-5 rounded-r-sm hover:bg-[#f39700] transition-colors">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
               <Button variant="ghost" className="text-white font-bold text-sm hover:bg-white/10">
                 <User className="h-4 w-4 mr-2" />
                 {user?.name.split(' ')[0]}
               </Button>
            ) : (
              <Button 
                onClick={() => navigate('/login')}
                className="bg-white text-[#2874f0] hover:bg-slate-100 font-black px-8 rounded-sm h-9 uppercase tracking-wider text-xs shadow-md"
              >
                Login
              </Button>
            )}

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-white hover:bg-white/10"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ff9f00] text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#2874f0] shadow-sm">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Nav Bar: Home, About, Contact */}
      <div className="bg-[#1a5fcd] border-t border-white/10 text-white">
        <div className="container mx-auto px-4 flex gap-8 py-2.5 text-xs font-bold uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-[#ff9f00] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#ff9f00] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#ff9f00] transition-colors">Contact</Link>
        </div>
      </div>
    </header>
  );
}
