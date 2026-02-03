import { useNavigate } from 'react-router-dom';
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
        className="w-full py-3 bg-header-secondary hover:bg-header-secondary/90 text-sm tracking-wide transition-colors"
      >
        ↑ Back to top
      </button>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-base tracking-wide">
              Get to Know Us
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <button onClick={() => handleNavigation('/about')} className="hover:text-accent transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/about')} className="hover:text-accent transition-colors">
                  Our Story
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-base tracking-wide">
              Connect with Us
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                contact@thesouthplate.com
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4 text-base tracking-wide">
              Let Us Help You
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <button onClick={() => handleNavigation('/products')} className="hover:text-accent transition-colors">
                  Our Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/contact')} className="hover:text-accent transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/cart')} className="hover:text-accent transition-colors">
                  Your Cart
                </button>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-semibold mb-4 text-base tracking-wide">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2">
                <Clock className="h-4 w-4 text-accent mt-0.5" />
                Mon – Sun: 7:00 AM – 11:00 PM
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                Koramangala, Bengaluru
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/15 py-6 text-center">
        <p className="text-sm text-primary-foreground/70">
          © 2024 The South Plate · Where Every Bite Tells a Story
        </p>
      </div>
    </footer>
  );
}
