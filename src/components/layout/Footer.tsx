import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-white mt-auto border-t border-white/5">
      {/* Back to top - Industrial Clean Style */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full py-4 bg-white/5 hover:bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] transition-all border-b border-white/5"
      >
        Back to top
      </button>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* About Column */}
          <div>
            <h3 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-[#ff9f00]">
              THE SOUTH PLATE
            </h3>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">Luxury Dining Story</button>
              </li>
              <li className="text-xs pt-4 border-t border-white/5 opacity-50 uppercase tracking-tighter">Official Site of Evolve Solutions</li>
            </ul>
          </div>

          {/* Contact Column - UPDATED EMAIL */}
          <div>
            <h3 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-[#ff9f00]">
              Support
            </h3>
            <ul className="space-y-5 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-[#2874f0] transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>+91 90872 23978</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-sm group-hover:bg-[#2874f0] transition-colors">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-[11px] break-all">evolvesolution20@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-[#ff9f00]">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><button onClick={() => handleNavigation('/products')} className="hover:text-white transition-colors">Browse Menu</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Contact Support</button></li>
              <li><button onClick={() => handleNavigation('/cart')} className="hover:text-white transition-colors">My Cart</button></li>
            </ul>
          </div>

          {/* Visit Column - UPDATED ADDRESS */}
          <div>
            <h3 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-[#ff9f00]">
              Visit Us
            </h3>
            <ul className="space-y-5 text-sm text-slate-400 font-medium">
              <li className="flex gap-4">
                <Clock className="h-5 w-5 text-white/40 mt-0.5" />
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-tighter">Operating Hours</p>
                  <p className="text-[11px]">7:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-white/40 mt-0.5" />
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-tighter">HQ - Bangalore</p>
                  <p className="text-[11px]">100 Feet Rd, Koramangala, Bengaluru, KA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/5 py-10 text-center bg-black/40">
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">
          © 2026 Evolve Solutions - The South Plate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
