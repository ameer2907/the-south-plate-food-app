import { MainLayout } from '@/components/layout/MainLayout';
import { Users, Award, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <MainLayout>
      {/* Hero */}
      <div className="bg-header text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">🍛</span>
          <h1 className="text-4xl font-bold mb-4">About Annapurna</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Bringing authentic South Indian flavors to your table since 2010
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg text-muted-foreground mx-auto">
            <p className="mb-4">
              Annapurna was founded with a simple vision: to bring the authentic taste of 
              South Indian cuisine to food lovers everywhere. Named after the Hindu goddess 
              of food and nourishment, we believe that every meal should be a celebration.
            </p>
            <p className="mb-4">
              Our journey began in a small kitchen in Chennai, where our founder learned 
              the art of making the perfect dosa from her grandmother. Today, we continue 
              that tradition, using the same time-honored recipes and techniques that have 
              been passed down through generations.
            </p>
            <p>
              Every dish we serve is prepared with love, using fresh ingredients and 
              traditional spices imported directly from South India. We are proud to be 
              a 100% vegetarian restaurant, honoring the culinary traditions of our heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">50,000+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">15+</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">30 min</p>
              <p className="text-muted-foreground">Average Delivery</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">25+</p>
              <p className="text-muted-foreground">Delivery Locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <span className="text-4xl mb-4 block">🌿</span>
            <h3 className="text-xl font-bold mb-2">100% Vegetarian</h3>
            <p className="text-muted-foreground">
              We are committed to serving pure vegetarian food, prepared in a 
              kitchen that has never seen meat.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <span className="text-4xl mb-4 block">🍃</span>
            <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
            <p className="text-muted-foreground">
              We source the freshest ingredients daily, ensuring every dish 
              tastes as authentic as possible.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 text-center">
            <span className="text-4xl mb-4 block">👨‍🍳</span>
            <h3 className="text-xl font-bold mb-2">Traditional Recipes</h3>
            <p className="text-muted-foreground">
              Our recipes have been passed down through generations, preserving 
              the authentic taste of South India.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
