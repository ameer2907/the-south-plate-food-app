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
  curry: "Curries",
  snacks: "Snacks",
  beverages: "Beverages",
  desserts: "Desserts",
};

export const menuItems: MenuItem[] = [
  // DOSAS
  { id: 'd1', name: 'Masala Dosa', description: 'Classic spiced potato filling.', price: 249, image: masalaDosa, category: 'dosa', isVeg: true, isPopular: true },
  { id: 'd2', name: 'Mysore Masala Dosa', description: 'Spicy red chutney lining.', price: 279, image: mysoreDosa, category: 'dosa', isVeg: true, isSpicy: true },
  { id: 'd3', name: 'Ghee Roast Dosa', description: 'Crispy and buttery.', price: 269, image: gheeRoastDosa, category: 'dosa', isVeg: true },
  { id: 'd4', name: 'Onion Dosa', description: 'Topped with fresh onions.', price: 229, image: onionDosa, category: 'dosa', isVeg: true },
  
  // IDLIS
  { id: 'i1', name: 'Idli Sambar', description: 'Two fluffy steamed rice cakes.', price: 179, image: idliSambar, category: 'idli', isVeg: true, isPopular: true },
  { id: 'i2', name: 'Podi Idli', description: 'Tossed in spicy gunpowder.', price: 199, image: podiIdli, category: 'idli', isVeg: true, isSpicy: true },
  { id: 'i3', name: 'Mini Idli', description: '14 small idlis in sambar.', price: 219, image: miniIdli, category: 'idli', isVeg: true },

  // VADAS
  { id: 'v1', name: 'Medu Vada', description: 'Crispy lentil doughnuts.', price: 169, image: meduVada, category: 'vada', isVeg: true, isPopular: true },
  { id: 'v2', name: 'Sambar Vada', description: 'Soaked in hot sambar.', price: 189, image: sambarVada, category: 'vada', isVeg: true },

  // RICE ITEMS
  { id: 'r1', name: 'Bisi Bele Bath', description: 'Luxury Karnataka style rice.', price: 299, image: bisiBeleBath, category: 'rice', isVeg: true, isPopular: true },
  { id: 'r2', name: 'Curd Rice', description: 'Cool and creamy.', price: 199, image: curdRice, category: 'rice', isVeg: true },

  // CURRIES
  { id: 'c1', name: 'Mixed Vegetable Sambar', description: 'Hearty lentil stew.', price: 229, image: sambar, category: 'curry', isVeg: true },
  { id: 'c2', name: 'Traditional Rasam', description: 'Spicy tamarind soup.', price: 179, image: rasam, category: 'curry', isVeg: true, isSpicy: true },
  { id: 'c3', name: 'Kerala Avial', description: 'Coconut based veggie mix.', price: 269, image: avial, category: 'curry', isVeg: true },

  // SNACKS
  { id: 's1', name: 'Ven Pongal', description: 'Ghee tempered rice & lentils.', price: 219, image: pongal, category: 'snacks', isVeg: true, isPopular: true },
  { id: 's2', name: 'Rava Upma', description: 'Semolina savory porridge.', price: 189, image: upma, category: 'snacks', isVeg: true },
  { id: 's3', name: 'Onion Uttapam', description: 'Savory thick pancake.', price: 239, image: uttapam, category: 'snacks', isVeg: true },

  // BEVERAGES
  { id: 'b1', name: 'Filter Coffee', description: 'Frothy South Indian coffee.', price: 129, image: filterCoffee, category: 'beverages', isVeg: true, isPopular: true },
  { id: 'b2', name: 'Mango Lassi', description: 'Sweet and creamy.', price: 179, image: mangoLassi, category: 'beverages', isVeg: true },

  // DESSERTS
  { id: 'de1', name: 'Elaneer Payasam', description: 'Tender coconut pudding.', price: 249, image: payasam, category: 'desserts', isVeg: true, isPopular: true },
  { id: 'de2', name: 'Mysore Pak', description: 'Rich gram flour fudge.', price: 149, image: mysorePak, category: 'desserts', isVeg: true }
];
