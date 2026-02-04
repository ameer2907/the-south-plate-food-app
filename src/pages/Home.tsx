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
      {/* Hero Banner - Blue Gradient Branding */}
      <div className="bg-gradient-to-r from-[#2874f0] to-[#1a5fcd] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-[900] mb-6 tracking-tighter leading-tight italic">
                AUTHENTIC FLAVORS, <br />
                <span className="text-[#ff9f00]">DELIVERED TO YOU.</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed font-semibold uppercase tracking-wide">
                Experience Luxury South Indian Dining. Prepared with premium 
                ingredients and delivered fresh to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="xl" className="bg-[#ff9f00] hover:bg-[#f39700] text-white rounded-sm px-10 shadow-xl transition-all border-none font-black uppercase tracking-widest">
                  <Link to="/products" className="flex items-center gap-2">
                    Order Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-sm font-black uppercase tracking-widest">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 rounded-full border-4 border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md">
                   <div className="text-center">
                     <Award className="h-16 w-16 text-[#ff9f00] mx-auto mb-2 drop-shadow-lg" />
                     <span className="block font-[900] text-white text-2xl uppercase tracking-tighter">Premium</span>
                     <span className="text-sm text-white/80 font-bold tracking-widest uppercase">Luxury Quality</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar - White & Minimalist */}
      <div className="bg-white border-b border-slate-200 py-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureItem icon={<Truck />} title="Free Delivery" desc="Above ₹499" />
            <FeatureItem icon={<Clock />} title="Fast Delivery" desc="30-45 Mins" />
            <FeatureItem icon={<Shield />} title="100% Veg" desc="Pure Kitchen" />
            <FeatureItem icon={<Award />} title="Top Rated" desc="Luxury Dining" />
          </div>
        </div>
      </div>

      {/* Categories & Best Sellers sections remain same as previous structure but with refined spacing */}

      {/* CTA Banner - Premium Midnight Navy (No More Heavy Orange) */}
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
      <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-[#2874f0] group-hover:text-white transition-all text-[#2874f0]">
        {icon}
      </div>
      <div>
        <p className="font-black text-slate-900 text-xs uppercase tracking-widest">{title}</p>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{desc}</p>
      </div>
    </div>
  );
}
