import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /* Changed to custom footer-bg for a professional premium look */
    <footer className="bg-[#0B1F33] text-white mt-auto border-t border-white/5">
      {/* Back to top - Clean & Flat */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full py-3 bg-[#1F6FDB]/10 hover:bg-[#1F6FDB]/20 text-blue-400 text-xs font-medium uppercase tracking-widest transition-all"
      >
        Back to top
      </button>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">
              Get to Know Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">
                  Our Story
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">
              Connect with Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#FF8A00]" />
                +91 90872 23978
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#FF8A00]" />
                evolvesolutionpvtltd@gmail.com
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">
              Let Us Help You
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNavigation('/products')} className="hover:text-white transition-colors">
                  Our Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/cart')} className="hover:text-white transition-colors">
                  Your Cart
                </button>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">
              Visit Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <Clock className="h-4 w-4 text-[#FF8A00] mt-0.5" />
                Mon - Sun: 7:00 AM - 11:00 PM
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-[#FF8A00] mt-0.5" />
                Koramangala, Bengaluru
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/5 py-8 text-center bg-black/20">
        <p className="text-xs text-slate-500 uppercase tracking-widest">
          © 2026 Evolve Solutions - The South Plate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
