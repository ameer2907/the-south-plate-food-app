import { MenuItem } from '@/types/hotel';

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

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
}

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
  // Existing Items (Dosas, Idlis, Rice)
  {
    id: 'd1',
    name: 'Ghee Podi Masala Dosa',
    description: 'Crispy dosa with spicy podi and clarified butter.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
    category: 'dosa',
    isPopular: true
  },
  {
    id: 'r1',
    name: 'Luxury Sambar Rice',
    description: 'Aromatic rice cooked with fresh vegetables and homemade sambar.',
    price: 160,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    category: 'rice',
    isPopular: true
  },

  // NEW ITEMS TO FIX ZERO COUNTS
  {
    id: 'curry-1',
    name: 'Vegetable Kurma',
    category: 'curries',
    price: 180,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500',
    description: 'Luxury mixed vegetable curry prepared with fresh coconut milk.',
    isPopular: true
  },
  {
    id: 'snack-1',
    name: 'Medhu Vada (2 pcs)',
    category: 'snacks',
    price: 85,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea8c5383c82?w=500',
    description: 'Crispy deep-fried lentil doughnuts served with coconut chutney.',
    isPopular: false
  },
  {
    id: 'dessert-1',
    name: 'Elaneer Payasam',
    category: 'desserts',
    price: 120,
    image: 'https://images.unsplash.com/photo-1589119634710-86339170e93a?w=500',
    description: 'Tender coconut kheer - a luxury South Indian delicacy.',
    isPopular: true
  },
  {
    id: 'bev-1',
    name: 'Authentic Filter Coffee',
    category: 'beverages',
    price: 45,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500',
    description: 'Traditional South Indian frothy coffee.',
    isPopular: true
  }
];
