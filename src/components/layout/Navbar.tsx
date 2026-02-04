import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, ShoppingCart, ChevronDown } from 'lucide-react';

const SOUTH_INDIAN_LOCATIONS = ["Chennai", "Bangalore", "Hyderabad", "Kochi", "Madurai", "Coimbatore"];

export function Navbar() {
  const [location, setLocation] = useState("Chennai, TN");
  const [showLocations, setShowLocations] = useState(false);

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
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-md py-2 animate-fade-in">
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

        {/* Search Bar - Professional White/Gray */}
        <div className="flex-1 max-w-xl relative">
          <input 
            type="text" 
            placeholder="Search for luxury food, dosas, meals..." 
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#2874f0]/10 pl-10 pr-4 h-11 rounded-sm transition-all"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#2874f0] text-white px-6 h-10 rounded-sm font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#1a5fcd]">Login</button>
          <ShoppingCart className="h-6 w-6 text-slate-600 cursor-pointer hover:text-[#2874f0]" />
        </div>
      </div>

      {/* Secondary Navigation (Home, About, Contact) */}
      <nav className="bg-[#f8fafc] border-b border-slate-100">
        <div className="container mx-auto px-4 flex gap-8 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <Link to="/" className="hover:text-[#2874f0]">Home</Link>
          <Link to="/about" className="hover:text-[#2874f0]">About</Link>
          <Link to="/contact" className="hover:text-[#2874f0]">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
