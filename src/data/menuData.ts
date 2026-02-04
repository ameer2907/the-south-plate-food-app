import { MenuItem } from '@/types/hotel';

// Asset Imports
import masalaDosa from '@/assets/food/masala-dosa.jpg';
import mysoreDosa from '@/assets/food/mysore-dosa.jpg';
import ravaDosa from '@/assets/food/rava-dosa.jpg';
import gheeRoastDosa from '@/assets/food/ghee-roast-dosa.jpg';
import paperDosa from '@/assets/food/paper-dosa.jpg';
import onionDosa from '@/assets/food/onion-dosa.jpg';
import idliSambar from '@/assets/food/idli-sambar.jpg';
import podiIdli from '@/assets/food/podi-idli.jpg';
import ravaIdli from '@/assets/food/rava-idli.jpg';
import miniIdli from '@/assets/food/mini-idli.jpg';
import meduVada from '@/assets/food/medu-vada.jpg';
import sambarVada from '@/assets/food/sambar-vada.jpg';
import dahiVada from '@/assets/food/dahi-vada.jpg';
import masalaVada from '@/assets/food/masala-vada.jpg';
import curdRice from '@/assets/food/curd-rice.jpg';
import lemonRice from '@/assets/food/lemon-rice.jpg';
import tamarindRice from '@/assets/food/tamarind-rice.jpg';
import bisiBeleBath from '@/assets/food/bisi-bele-bath.jpg';
import coconutRice from '@/assets/food/coconut-rice.jpg';
import sambar from '@/assets/food/sambar.jpg';
import rasam from '@/assets/food/rasam.jpg';
import avial from '@/assets/food/avial.jpg';
import kootu from '@/assets/food/kootu.jpg';
import upma from '@/assets/food/upma.jpg';
import pongal from '@/assets/food/pongal.jpg';
import uttapam from '@/assets/food/uttapam.jpg';
import pesarattu from '@/assets/food/pesarattu.jpg';
import filterCoffee from '@/assets/food/filter-coffee.jpg';
import masalaChai from '@/assets/food/masala-chai.jpg';
import buttermilk from '@/assets/food/buttermilk.jpg';
import mangoLassi from '@/assets/food/mango-lassi.jpg';
import kesariBath from '@/assets/food/kesari-bath.jpg';
import payasam from '@/assets/food/payasam.jpg';
import mysorePak from '@/assets/food/mysore-pak.jpg';
import coconutBurfi from '@/assets/food/coconut-burfi.jpg';

export const categoryLabels: Record<string, string> = {
  dosa: "Dosas",
  idli: "Idlis",
  vada: "Vadas",
  rice: "Rice Items",
  curries: "Curries",
  snacks: "Snacks",
  beverages: "Beverages",
  desserts: "Desserts",
};

export const menuItems: MenuItem[] = [
  // DOSAS
  { id: 'd1', name: 'Masala Dosa', description: 'Classic spiced potato filling.', price: 120, image: masalaDosa, category: 'dosa', isPopular: true },
  { id: 'd2', name: 'Mysore Masala Dosa', description: 'Spicy red chutney lining.', price: 140, image: mysoreDosa, category: 'dosa' },
  { id: 'd3', name: 'Ghee Roast Dosa', description: 'Crispy and buttery.', price: 130, image: gheeRoastDosa, category: 'dosa' },
  { id: 'd4', name: 'Onion Dosa', description: 'Topped with fresh onions.', price: 110, image: onionDosa, category: 'dosa' },
  
  // IDLIS
  { id: 'i1', name: 'Idli Sambar', description: 'Two fluffy steamed rice cakes.', price: 60, image: idliSambar, category: 'idli', isPopular: true },
  { id: 'i2', name: 'Podi Idli', description: 'Tossed in spicy gunpowder.', price: 85, image: podiIdli, category: 'idli' },
  { id: 'i3', name: 'Mini Idli', description: '14 small idlis in sambar.', price: 95, image: miniIdli, category: 'idli' },

  // VADAS
  { id: 'v1', name: 'Medu Vada', description: 'Crispy lentil doughnuts.', price: 70, image: meduVada, category: 'vada', isPopular: true },
  { id: 'v2', name: 'Sambar Vada', description: 'Soaked in hot sambar.', price: 85, image: sambarVada, category: 'vada' },

  // RICE ITEMS
  { id: 'r1', name: 'Bisi Bele Bath', description: 'Luxury Karnataka style rice.', price: 150, image: bisiBeleBath, category: 'rice', isPopular: true },
  { id: 'r2', name: 'Curd Rice', description: 'Cool and creamy.', price: 90, image: curdRice, category: 'rice' },

  // CURRIES (Fixing the 0 Count)
  { id: 'c1', name: 'Mixed Vegetable Sambar', description: 'Hearty lentil stew.', price: 110, image: sambar, category: 'curries' },
  { id: 'c2', name: 'Traditional Rasam', description: 'Spicy tamarind soup.', price: 80, image: rasam, category: 'curries' },
  { id: 'c3', name: 'Kerala Avial', description: 'Coconut based veggie mix.', price: 140, image: avial, category: 'curries' },

  // SNACKS (Fixing the 0 Count)
  { id: 's1', name: 'Ven Pongal', description: 'Ghee tempered rice & lentils.', price: 100, image: pongal, category: 'snacks', isPopular: true },
  { id: 's2', name: 'Rava Upma', description: 'Semolina savory porridge.', price: 80, image: upma, category: 'snacks' },
  { id: 's3', name: 'Onion Uttapam', description: 'Savory thick pancake.', price: 115, image: uttapam, category: 'snacks' },

  // BEVERAGES
  { id: 'b1', name: 'Filter Coffee', description: 'Frothy South Indian coffee.', price: 45, image: filterCoffee, category: 'beverages', isPopular: true },
  { id: 'b2', name: 'Mango Lassi', description: 'Sweet and creamy.', price: 90, image: mangoLassi, category: 'beverages' },

  // DESSERTS
  { id: 'de1', name: 'Elaneer Payasam', description: 'Tender coconut pudding.', price: 120, image: payasam, category: 'desserts', isPopular: true },
  { id: 'de2', name: 'Mysore Pak', description: 'Rich gram flour fudge.', price: 50, image: mysorePak, category: 'desserts' }
];
