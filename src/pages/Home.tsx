import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { menuItems, categoryLabels } from '@/data/menuData';
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react';

export default function Home() {
  const popularItems = menuItems.filter((item) => item.isPopular);
  const dosas = menuItems.filter((item) => item.category === 'dosa').slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Banner - Using Brand Blue Gradient for High Impact */}
      <div className="bg-gradient-to-r from-[#2874f0] to-[#1a5fcd] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Authentic Flavors, <br />
                <span className="text-[#ff9f00]">Delivered to You.</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed font-medium">
                Experience the true taste of South India. From crispy dosas to 
                aromatic filter coffee—crafted fresh and delivered in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Contrast Button for CTA */}
                <Button asChild size="xl" className="bg-[#ff9f00] hover:bg-[#f39700] text-white rounded-sm px-10 shadow-xl transition-all border-none font-bold">
                  <Link to="/products" className="flex items-center gap-2">
                    Order Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-sm font-bold">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            {/* Visual Element */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 rounded-full border-4 border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                   <div className="text-center">
                     <Award className="h-16 w-16 text-[#ff9f00] mx-auto mb-2 drop-shadow-lg" />
                     <span className="block font-black text-white text-2xl uppercase tracking-tighter">Premium</span>
                     <span className="text-sm text-white/80 font-semibold tracking-wide">Quality Assured</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar - White & Blue Style */}
      <div className="bg-white border-b border-slate-200 py-10 shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left group">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-[#2874f0] transition-colors">
                <Truck className="h-8 w-8 text-[#2874f0] group-hover:text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">Free Delivery</p>
                <p className="text-xs text-slate-500 font-medium">Orders above ₹499</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left group">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-[#2874f0] transition-colors">
                <Clock className="h-8 w-8 text-[#2874f0] group-hover:text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">Fast Delivery</p>
                <p className="text-xs text-slate-500 font-medium">30-45 Minutes</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left group">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-[#2874f0] transition-colors">
                <Shield className="h-8 w-8 text-[#2874f0] group-hover:text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">100% Veg</p>
                <p className="text-xs text-slate-500 font-medium">Pure Kitchen</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left group">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-[#2874f0] transition-colors">
                <Award className="h-8 w-8 text-[#2874f0] group-hover:text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">Top Rated</p>
                <p className="text-xs text-slate-500 font-medium">4.5+ Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Explore Menu</h2>
          <div className="h-1 flex-1 bg-slate-100 mx-8 hidden sm:block rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Link
              key={key}
              to={`/products?category=${key}`}
              className="group flex flex-col items-center gap-4 p-6 bg-white rounded-md border border-slate-100 hover:border-[#2874f0] hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2874f0] shadow-inner transition-all">
                <span className="text-[#2874f0] group-hover:text-white font-black text-lg">{label.charAt(0)}</span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-[#2874f0] text-center">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Best Sellers</h2>
              <span className="bg-[#ff9f00] text-white text-[11px] font-black px-3 py-1 rounded-sm shadow-sm animate-pulse">HOT DEALS</span>
            </div>
            <Link to="/products" className="text-[#2874f0] text-sm font-black flex items-center gap-2 hover:translate-x-1 transition-transform group">
              VIEW ALL <ArrowRight className="h-5 w-5 bg-[#2874f0] text-white rounded-full p-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {popularItems.slice(0, 4).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner - Iconic Brand Orange Theme */}
      <div className="bg-[#ff9f00] py-20 relative overflow-hidden">
        {/* Geometric patterns for a professional look */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 border-[20px] border-white rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">Hungry? Order Now!</h2>
          <p className="text-white text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed bg-black/10 py-2 rounded-full">
            Get <span className="text-white font-black underline">20% OFF</span> on your first order. Use code: <span className="bg-white text-[#ff9f00] px-4 py-1 rounded-sm font-black ml-2">FIRST20</span>
          </p>
          <Button asChild size="xl" className="bg-[#2874f0] hover:bg-[#1a5fcd] text-white font-black rounded-sm px-16 py-8 text-xl shadow-2xl border-none uppercase tracking-widest transform hover:scale-105 transition-all">
            <Link to="/products">Browse Menu</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
