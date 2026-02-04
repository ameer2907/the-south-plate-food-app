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
      {/* Hero Banner - Clean & Professional White/Light Gray */}
      <div className="bg-white border-b border-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
                Authentic Flavors, <br />
                <span className="text-[#2874f0]">Delivered to You.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                Experience the true taste of South India. From crispy dosas to 
                aromatic filter coffee—crafted fresh and delivered in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Flipkart Blue Primary Button */}
                <Button asChild size="xl" className="bg-[#2874f0] hover:bg-[#1a5fcd] text-white rounded-sm px-10 shadow-lg transition-all">
                  <Link to="/products" className="flex items-center gap-2">
                    Order Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50 rounded-sm">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            {/* Visual Element - Simple & High End */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#2874f0]/5 rounded-full blur-3xl"></div>
                <div className="relative w-64 h-64 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                   <div className="text-center">
                     <Award className="h-12 w-12 text-[#ff9f00] mx-auto mb-2" />
                     <span className="block font-bold text-slate-800 uppercase tracking-tighter">Premium</span>
                     <span className="text-xs text-slate-400">Quality Assured</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar - Subtle & Muted */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
              <Truck className="h-8 w-8 text-[#2874f0]" />
              <div>
                <p className="font-bold text-slate-800 text-sm">Free Delivery</p>
                <p className="text-xs text-slate-400">Orders above ₹499</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
              <Clock className="h-8 w-8 text-[#2874f0]" />
              <div>
                <p className="font-bold text-slate-800 text-sm">Fast Delivery</p>
                <p className="text-xs text-slate-400">30-45 Minutes</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
              <Shield className="h-8 w-8 text-[#2874f0]" />
              <div>
                <p className="font-bold text-slate-800 text-sm">100% Veg</p>
                <p className="text-xs text-slate-400">Pure Kitchen</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
              <Award className="h-8 w-8 text-[#2874f0]" />
              <div>
                <p className="font-bold text-slate-800 text-sm">Top Rated</p>
                <p className="text-xs text-slate-400">4.5+ Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories - Professional Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Explore Menu</h2>
          <div className="h-px flex-1 bg-slate-100 mx-6 hidden sm:block"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Link
              key={key}
              to={`/products?category=${key}`}
              className="group flex flex-col items-center gap-3 p-6 bg-white rounded-sm border border-slate-100 hover:border-[#2874f0] hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2874f0]/10 transition-colors">
                <span className="text-[#2874f0] font-bold text-sm">{label.charAt(0)}</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-[#2874f0]">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-slate-900">Best Sellers</h2>
              <span className="bg-[#ff9f00] text-white text-[10px] font-black px-2 py-1 rounded-sm tracking-tighter">TOP RATED</span>
            </div>
            <Link to="/products" className="text-[#2874f0] text-sm font-bold flex items-center gap-1 hover:underline">
              SEE ALL <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularItems.slice(0, 4).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner - Deep Navy Theme */}
      <div className="bg-[#0B1F33] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2874f0]/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">First time here?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Join the community of food lovers. Use code <span className="text-[#ff9f00] font-bold">FIRST20</span> to get 20% off your first meal.
          </p>
          <Button asChild size="xl" className="bg-[#ff9f00] hover:bg-[#f39700] text-white font-bold rounded-sm px-12 shadow-xl border-none">
            <Link to="/products">Browse the Menu</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
