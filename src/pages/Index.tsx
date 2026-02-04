import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/menuData'; // This must be your full 27-35 item list
import { ArrowRight, Award } from 'lucide-react';

export default function Index() {
  // Filters items marked as popular for the Best Sellers section
  const popularItems = menuItems.filter((item) => item.isPopular);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION - Blue Theme */}
        <div className="bg-[#2874f0] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-[900] mb-6 italic tracking-tighter uppercase">
                AUTHENTIC FLAVORS,<br />DELIVERED TO YOU.
              </h1>
              <p className="text-lg md:text-xl font-bold opacity-90 mb-8 uppercase tracking-widest">
                Experience Luxury South Indian Dining.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-[#ff9f00] hover:bg-[#e68a00] text-white font-black px-10 rounded-sm shadow-xl">
                  <Link to="/products">ORDER NOW <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-black rounded-sm">
                  LEARN MORE
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex relative items-center justify-center">
              <div className="w-80 h-80 rounded-full border-8 border-white/20 flex flex-col items-center justify-center text-center">
                <Award className="h-16 w-16 text-[#ff9f00] mb-2" />
                <span className="block font-black text-2xl uppercase italic">Premium</span>
                <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Luxury Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* BEST SELLERS SECTION - Restored */}
        <div className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Best Sellers</h2>
              <Link to="/products" className="text-[#2874f0] font-black text-sm flex items-center gap-2 hover:underline">
                VIEW ALL <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* If popularItems is empty, ensure your menuData has isPopular: true for some items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularItems.slice(0, 4).map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA BANNER - Midnight Navy Style */}
        <div className="bg-[#0B1F33] py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-black text-white mb-4 italic uppercase">Hungry? Order Now!</h2>
            <p className="text-slate-400 font-bold mb-10 tracking-widest uppercase">
              Get <span className="text-[#ff9f00]">20% OFF</span> on your first luxury meal. Use Code: <span className="text-white border-b-2 border-[#ff9f00]">FIRST20</span>
            </p>
            <Button asChild className="bg-[#ff9f00] hover:bg-[#e68a00] text-white font-black px-16 py-8 text-xl shadow-2xl rounded-sm uppercase tracking-widest">
              <Link to="/products">Browse Menu</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
