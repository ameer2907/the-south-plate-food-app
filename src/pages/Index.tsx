import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { menuItems, categoryLabels } from '@/data/menuData';
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Index() {
  const popularItems = menuItems.filter((item) => item.isPopular);
  const categories = Object.entries(categoryLabels);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. HERO BANNER */}
        <div className="bg-white py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full hidden lg:block"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-[900] text-foreground mb-6 tracking-tighter italic leading-[1.1]">
                  AUTHENTIC FLAVORS, <br />
                  <span className="text-primary">DELIVERED TO YOU.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-medium">
                  Experience luxury South Indian dining. Prepared with premium ingredients 
                  and delivered fresh to your doorstep in Chennai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-10 rounded-sm uppercase tracking-widest shadow-lg transition-transform hover:scale-105">
                    <Link to="/products">Browse Menu</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border text-muted-foreground font-black px-10 rounded-sm uppercase tracking-widest">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>

              {/* Premium Badge */}
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-primary flex flex-col items-center justify-center text-center shadow-2xl border-8 border-white animate-fade-in">
                  <Award className="h-14 w-14 text-accent mb-2 drop-shadow-lg" />
                  <span className="block font-black text-primary-foreground text-2xl uppercase tracking-tighter">Premium</span>
                  <span className="text-xs text-primary-foreground/80 font-bold tracking-widest uppercase">Luxury Quality</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-lg shadow-lg border border-border">
                  <span className="text-accent font-black text-lg italic">20% OFF</span>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">First Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FEATURES BAR */}
        <div className="bg-muted/50 border-y border-border py-10">
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-[900] text-foreground uppercase italic tracking-tighter">
                Browse Categories
              </h2>
              <Link to="/products" className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                VIEW ALL <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map(([key, label]) => {
                const count = menuItems.filter(item => item.category === key).length;
                return (
                  <Link
                    key={key}
                    to={`/products?category=${key}`}
                    className="group bg-muted/30 hover:bg-primary hover:text-primary-foreground rounded-lg p-4 text-center transition-all border border-border hover:border-primary"
                  >
                    <p className="font-bold text-sm uppercase tracking-tight">{label}</p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 mt-1">{count} items</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. BEST SELLERS SECTION */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="bg-accent text-accent-foreground text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest mb-2 inline-block">
                  Top Picks
                </span>
                <h2 className="text-3xl font-[900] text-foreground uppercase italic tracking-tighter">
                  Best Sellers
                </h2>
              </div>
              <Link to="/products" className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                VIEW ALL <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {popularItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {popularItems.slice(0, 4).map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-muted-foreground font-bold uppercase tracking-widest text-sm">
                Updating our best sellers...
              </div>
            )}
          </div>
        </section>
        
        {/* 5. CTA BANNER */}
        <div className="bg-foreground py-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-[900] text-white mb-4 tracking-tighter uppercase italic">
              Hungry? Order Now!
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto font-bold uppercase tracking-widest leading-relaxed">
              Get <span className="text-accent underline">20% OFF</span> on your first luxury meal. <br />
              Use Code: <span className="text-white border-b-2 border-accent ml-2">FIRST20</span>
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black rounded-sm px-14 py-7 text-lg shadow-2xl transition-transform hover:scale-105 uppercase tracking-[0.2em]">
              <Link to="/products">Browse Menu</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left group">
      <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all text-primary">
        {icon}
      </div>
      <div>
        <p className="font-black text-foreground text-xs uppercase tracking-widest">{title}</p>
        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{desc}</p>
      </div>
    </div>
  );
}
