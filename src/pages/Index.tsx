import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { menuItems } from '@/data/menuData'; 
import { ArrowRight } from 'lucide-react';

export default function Index() {
  // 1. This variable looks for the 'isPopular' flag in your data
  const popularItems = menuItems.filter((item) => item.isPopular === true);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#2874f0] text-white py-16">
           {/* ... your Hero Banner code ... */}
        </div>

        {/* BEST SELLERS SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-[900] text-slate-900 uppercase italic tracking-tighter">
                Best Sellers
              </h2>
              <Link to="/products" className="text-[#2874f0] font-bold text-sm flex items-center gap-2">
                VIEW ALL <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* 2. Grid logic: If popularItems has data, it will show here */}
            {popularItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {popularItems.slice(0, 4).map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-sm">
                Updating our best sellers...
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Banner */}
        <div className="bg-[#0B1F33] py-20 text-center">
           {/* ... your Orange/Navy CTA code ... */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
