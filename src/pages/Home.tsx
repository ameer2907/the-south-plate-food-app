import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { menuItems, categoryLabels } from '@/data/menuData';
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react';

export default function Home() {
  const popularItems = menuItems.filter((item) => item.isPopular);

  return (
    <MainLayout>
      {/* 1. HERO BANNER - Balanced White & Blue Style */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Subtle Brand Blue accent to break the white */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2874f0]/5 rounded-l-full hidden lg:block"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 mb-6 tracking-tighter italic leading-tight">
                AUTHENTIC FLAVORS, <br />
                <span className="text-[#2874f0]">DELIVERED TO YOU.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
                Experience luxury South Indian dining. Prepared with premium ingredients 
                and delivered fresh to your doorstep in Chennai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="xl" className="bg-[#ff9f00] hover:bg-[#f39700] text-white font-black px-12 rounded-sm uppercase tracking-widest shadow-xl transition-transform hover:scale-105">
                  <Link to="/products">Order Now</Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="border-slate-200 text-slate-600 font-black px-12 rounded-sm uppercase tracking-widest">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* OG Premium Badge - Blue Circle Mix */}
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#2874f0] flex flex-col items-center justify-center text-center shadow-2xl border-8 border-white animate-fade-in">
                <Award className="h-16 w-16 text-[#ff9f00] mb-2 drop-shadow-lg" />
                <span className="block font-black text-white text-3xl uppercase tracking-tighter">Premium</span>
                <span className="text-xs text-white/80 font-bold tracking-widest uppercase">Luxury Quality</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-slate-100">
                <span className="text-[#ff9f00] font-black text-xl italic">20% OFF</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">First Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FEATURES BAR - Minimalist Professional */}
      <div className="bg-[#f8fafc] border-y border-slate-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureItem icon={<Truck />} title="Free Delivery" desc="Above ₹499" />
            <FeatureItem icon={<Clock />} title="Fast Delivery" desc="30-45 Mins" />
            <FeatureItem icon={<Shield />} title="100% Veg" desc="Pure Kitchen" />
            <FeatureItem icon={<Award />} title="Top Rated" desc="Luxury Dining" />
          </div>
        </div>
      </div>

      {/* 3. CATEGORIES SECTION */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Explore Menu</h2>
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

      {/* 4. BEST SELLERS SECTION */}
      <div className="bg-slate-50 py-24">
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

      {/* 5. CTA BANNER - Premium Midnight Navy */}
      <div className="bg-[#0B1F33] py-24 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2874f0]/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-[900] text-white mb-6 tracking-tighter uppercase italic">
            Hungry? Order Now!
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Get <span className="text-[#ff9f00] underline">20% OFF</span> on your first luxury meal. <br />
            Use Code: <span className="text-white border-b-2 border-[#ff9f00] ml-2">FIRST20</span>
          </p>
          <Button asChild size="xl" className="bg-[#ff9f00] hover:bg-[#f39700] text-white font-black rounded-sm px-16 py-8 text-xl shadow-2xl transition-transform hover:scale-105 uppercase tracking-[0.2em]">
            <Link to="/products">Browse Menu</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left group">
      <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-[#2874f0] group-hover:text-white transition-all text-[#2874f0]">
        {icon}
      </div>
      <div>
        <p className="font-black text-slate-900 text-xs uppercase tracking-widest">{title}</p>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{desc}</p>
      </div>
    </div>
  );
}
