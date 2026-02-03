import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-header text-primary-foreground mt-auto">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full py-3 bg-header-secondary hover:bg-header-secondary/80 text-sm text-center transition-colors"
      >
        ↑ Back to top
      </button>

      {/* Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Get to Know Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <button 
                  onClick={() => handleNavigation('/about')} 
                  className="hover:underline hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')} 
                  className="hover:underline hover:opacity-100 transition-opacity"
                >
                  Our Story
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Connect with Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="hover:underline hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +91 9876543210
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@thesouthplate.com" 
                  className="hover:underline hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  contact@thesouthplate.com
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Let Us Help You</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <button 
                  onClick={() => handleNavigation('/products')} 
                  className="hover:underline hover:opacity-100 transition-opacity"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="hover:underline hover:opacity-100 transition-opacity"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/cart')} 
                  className="hover:underline hover:opacity-100 transition-opacity"
                >
                  Your Cart
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Visit Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Mon - Sun: 7AM - 11PM</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Koramangala, Bangalore</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-bold text-xl">The South Plate</span>
          </div>
          <p className="text-sm opacity-70">
            © 2024 The South Plate. Where Every Bite Tells a Story.
          </p>
        </div>
      </div>
    </footer>
  );
}
