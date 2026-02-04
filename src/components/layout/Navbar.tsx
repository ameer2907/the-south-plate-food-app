import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Search, ShoppingCart, ChevronDown, X } from 'lucide-react';
import { menuItems } from '@/data/menuData'; // Ensure this path is correct

const SOUTH_INDIAN_LOCATIONS = ["Chennai", "Bangalore", "Hyderabad", "Kochi", "Madurai", "Coimbatore"];

export function Navbar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Chennai, TN");
  const [showLocations, setShowLocations] = useState(false);
  
  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Live Search Logic: Filters while typing
  const filteredResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    return menuItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5); // Show top 5 matches
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* Branding: THE SOUTH PLATE (BIG) BY EVOLVE SOLUTIONS (small) */}
        <Link to="/" className="flex flex-col leading-none min-w-fit">
          <span className="font-[900] text-2xl md:text-3xl tracking-tighter italic text-[#2874f0]">
            THE SOUTH <span className="text-[#ff9f00]">PLATE</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-1">
            BY EVOLVE SOLUTIONS
          </span>
        </Link>

        {/* Dynamic Location Switcher */}
        <div className="relative">
          <button 
            onClick={() => setShowLocations(!showLocations)}
            className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-[#2874f0] font-bold transition-all px-3 py-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100"
          >
            <MapPin className="h-4 w-4 text-[#ff9f00]" />
            <span className="text-xs uppercase tracking-tight">{location}</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
          </button>
          
          {showLocations && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-md py-2 animate-fade-in z-[60]">
              {SOUTH_INDIAN_LOCATIONS.map(city => (
                <button 
                  key={city}
                  onClick={() => { setLocation(city); setShowLocations(false); }}
                  className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2874f0] font-medium"
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH BAR - Functional Live Search */}
        <div className="flex-1 max-w-xl relative" ref={searchRef}>
          <div className="relative group">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              placeholder="Search for luxury food, dosas, meals..." 
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#2874f0]/10 pl-10 pr-10 h-11 rounded-sm transition-all text-sm outline-none"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3"
              >
                <X className="h-5 w-5 text-slate-300 hover:text-slate-500" />
              </button>
            )}
          </div>

          {/* LIVE SEARCH RESULTS DROPDOWN */}
          {showResults && filteredResults.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-slate-100 shadow-2xl rounded-sm py-2 z-[100] animate-fade-in">
              {filteredResults.map(item => (
                <button 
                  key={item.id}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    setShowResults(false);
                    setSearchQuery('');
                  }}
                  className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-none"
                >
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-sm object-cover" />
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-slate-800">{item.name}</span>
                    <span className="text-xs text-[#2874f0] font-bold italic">₹{item.price}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#2874f0] text-white px-6 h-10 rounded-sm font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#1a5fcd] transition-all">Login</button>
          <div className="relative cursor-pointer group">
            <ShoppingCart className="h-6 w-6 text-slate-600 group-hover:text-[#2874f0] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#ff9f00] text-white text-[10px] font-black h-4 w-4 flex items-center justify-center rounded-full border border-white">0</span>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className="bg-[#f8fafc] border-b border-slate-100">
        <div className="container mx-auto px-4 flex gap-8 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <Link to="/" className="hover:text-[#2874f0] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#2874f0] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#2874f0] transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
