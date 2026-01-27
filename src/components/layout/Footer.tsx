import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Careers</Link></li>
              <li><Link to="/about" className="hover:underline">Our Story</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect with Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/contact" className="hover:underline">Facebook</Link></li>
              <li><Link to="/contact" className="hover:underline">Instagram</Link></li>
              <li><Link to="/contact" className="hover:underline">Twitter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/contact" className="hover:underline">Partner with Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Franchise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/orders" className="hover:underline">Your Orders</Link></li>
              <li><Link to="/contact" className="hover:underline">Help</Link></li>
              <li><Link to="/contact" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-bold">The South Plate</span>
          </div>
          <p className="text-sm opacity-70">
            © 2024 The South Plate. Where Every Bite Tells a Story.
          </p>
        </div>
      </div>
    </footer>
  );
}
