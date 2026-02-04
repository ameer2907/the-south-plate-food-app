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
  const [selectedLocation, setSelectedLocation] = useState('Bangalore, KA');
  const searchRef = useRef<HTMLDivElement>(null);

  // ... (keep your existing useMemo and useEffect logic)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        
        {/* Logo Section - Professional Branding */}
        <Link to="/" className="flex flex-col group min-w-fit">
          <span className="font-black text-xl md:text-2xl tracking-tighter text-[#2874f0] leading-none italic">
            THE SOUTH <span className="text-[#ff9f00]">PLATE</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">
            By Evolve Solutions
          </span>
        </Link>

        {/* Location Picker */}
        <div className="hidden lg:flex items-center gap-2 text-slate-500 hover:text-[#2874f0] cursor-pointer transition-colors px-3 py-1.5 rounded-sm border border-transparent hover:border-slate-100 bg-slate-50/50">
          <MapPin className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-tight">{selectedLocation}</span>
          <ChevronDown className="h-3 w-3" />
        </div>

        {/* Search Bar - Professional Contrast */}
        <div className="flex-1 max-w-2xl relative" ref={searchRef}>
          <div className="relative group">
            <Input
              type="text"
              placeholder="Search for dosas, idlis, meals..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              className="w-full bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#2874f0]/20 pl-10 h-11 rounded-sm transition-all"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-[#2874f0]" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
             <Button variant="ghost" className="text-slate-700 font-bold text-sm hover:bg-slate-50">
               <User className="h-4 w-4 mr-2" />
               {user?.name.split(' ')[0]}
             </Button>
          ) : (
            <Button 
              onClick={() => navigate('/login')}
              className="bg-[#2874f0] hover:bg-[#1a5fcd] text-white font-black px-8 rounded-sm h-10 uppercase tracking-wider text-xs shadow-md"
            >
              Login
            </Button>
          )}

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-slate-700 hover:text-[#2874f0] hover:bg-slate-50"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff9f00] text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
