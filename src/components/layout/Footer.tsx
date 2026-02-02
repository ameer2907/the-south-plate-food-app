import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-header text-primary-foreground mt-auto">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full py-3 bg-header-secondary hover:bg-header-secondary/80 text-sm text-center"
      >
        Back to top
      </button>

      {/* Links */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/about" className="hover:underline">Our Story</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect with Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a 
                  href="https://wa.me/919087223978" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +91 9087223978
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ameermalikbahad07@gmail.com" 
                  className="hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  ameermalikbahad07@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/products" className="hover:underline">Our Menu</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/cart" className="hover:underline">Your Cart</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-bold text-lg">The South Plate</span>
          </div>
          <p className="text-sm opacity-70">
            © 2024 The South Plate. Where Every Bite Tells a Story.
          </p>
        </div>
      </div>
    </footer>
  );
}
