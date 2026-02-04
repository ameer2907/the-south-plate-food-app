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
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-header-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Where Every Bite Tells a Story
              </h1>
              <p className="text-lg opacity-90 mb-6 max-w-lg">
                Discover the authentic flavors of South India. Crispy dosas, fluffy idlis, 
                and aromatic spices - crafted with love, delivered to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button asChild size="xl" variant="accent">
                  <Link to="/products">
                    Order Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-48 h-48 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-muted-foreground">On orders over ₹499</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Fast Delivery</p>
                <p className="text-sm text-muted-foreground">30-45 minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">100% Vegetarian</p>
                <p className="text-sm text-muted-foreground">Pure veg kitchen</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Best Quality</p>
                <p className="text-sm text-muted-foreground">Fresh ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Link
              key={key}
              to={`/products?category=${key}`}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">{label.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium text-center">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      <div className="bg-secondary py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-foreground">Best Sellers</h2>
              <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">TOP PICKS</span>
            </div>
            <Link to="/products" className="text-primary hover:underline font-medium flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.slice(0, 4).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Dosas Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Dosas</h2>
          <Link to="/products?category=dosa" className="text-primary hover:underline font-medium flex items-center gap-1">
            View all dosas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dosas.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hungry? Order Now!</h2>
          <p className="text-lg mb-6 opacity-90">
            Get 20% off on your first order. Use code: FIRST20
          </p>
          <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/products">Browse Menu</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
