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
      <div className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2874f0]/5 rounded-l-full hidden lg:block"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              {/* Size reduced to text-5xl for a professional professional look */}
              <h1 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-6 tracking-tighter italic leading-[1.1]">
                AUTHENTIC FLAVORS, <br />
                <span className="text-[#2874f0]">DELIVERED TO YOU.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed font-medium">
                Experience luxury South Indian dining. Prepared with premium ingredients 
                and delivered fresh to your doorstep in Chennai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-[#ff9f00] hover:bg-[#f39700] text-white font-black px-10 rounded-sm uppercase tracking-widest shadow-lg transition-transform hover:scale-105">
                  <Link to="/products">Order Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-200 text-slate-600 font-black px-10 rounded-sm uppercase tracking-widest">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* OG Premium Badge - Blue Circle Mix */}
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#2874f0] flex flex-col items-center justify-center text-center shadow-2xl border-8 border-white animate-fade-in">
                <Award className="h-14 w-14 text-[#ff9f00] mb-2 drop-shadow-lg" />
                <span className="block font-black text-white text-2xl uppercase tracking-tighter">Premium</span>
                <span className="text-xs text-white/80 font-bold tracking-widest uppercase">Luxury Quality</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-lg shadow-lg border border-slate-100">
                <span className="text-[#ff9f00] font-black text-lg italic">20% OFF</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">First Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FEATURES BAR */}
      <div className="bg-[#f8fafc] border-y border-slate-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureItem icon={<Truck />} title="Free Delivery" desc="Above ₹499" />
            <FeatureItem icon={<Clock />} title="Fast Delivery" desc="30-45 Mins" />
            <FeatureItem icon={<Shield />} title="100% Veg" desc="Pure Kitchen" />
            <FeatureItem icon={<Award />} title="Top Rated" desc="Luxury Dining" />
          </div>
        </div>
      </div>

      {/* [Keep your existing Categories and Best Sellers code here] */}

      {/* 5. CTA BANNER - Midnight Navy */}
      <div className="bg-[#0B1F33] py-20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2874f0]/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-[900] text-white mb-4 tracking-tighter uppercase italic">
            Hungry? Order Now!
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto font-bold uppercase tracking-widest leading-relaxed">
            Get <span className="text-[#ff9f00] underline">20% OFF</span> on your first luxury meal. <br />
            Use Code: <span className="text-white border-b-2 border-[#ff9f00] ml-2">FIRST20</span>
          </p>
          <Button asChild size="lg" className="bg-[#ff9f00] hover:bg-[#f39700] text-white font-black rounded-sm px-14 py-7 text-lg shadow-2xl transition-transform hover:scale-105 uppercase tracking-[0.2em]">
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
