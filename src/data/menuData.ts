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

export const menuItems: MenuItem[] = [
  // Dosas - Premium Pricing
  { id: 'd1', name: 'Masala Dosa', description: 'Crispy golden dosa with spiced potato masala', price: 249, category: 'dosa', isVeg: true, isPopular: true, image: masalaDosa },
  { id: 'd2', name: 'Mysore Masala Dosa', description: 'Spicy dosa with red chutney and filling', price: 289, category: 'dosa', isVeg: true, isSpicy: true, image: mysoreDosa },
  { id: 'd3', name: 'Rava Dosa', description: 'Crispy semolina dosa with onions', price: 269, category: 'dosa', isVeg: true, image: ravaDosa },
  { id: 'd4', name: 'Ghee Roast Dosa', description: 'Extra crispy dosa roasted in pure ghee', price: 299, category: 'dosa', isVeg: true, isPopular: true, image: gheeRoastDosa },
  { id: 'd5', name: 'Paper Dosa', description: 'Ultra thin and crispy dosa', price: 229, category: 'dosa', isVeg: true, image: paperDosa },
  { id: 'd6', name: 'Onion Dosa', description: 'Dosa topped with caramelized onions', price: 259, category: 'dosa', isVeg: true, image: onionDosa },

  // Idlis - Premium Pricing
  { id: 'i1', name: 'Idli Sambar', description: 'Soft steamed idlis with sambar', price: 179, category: 'idli', isVeg: true, isPopular: true, image: idliSambar },
  { id: 'i2', name: 'Ghee Podi Idli', description: 'Idlis tossed in ghee and podi', price: 219, category: 'idli', isVeg: true, isSpicy: true, image: podiIdli },
  { id: 'i3', name: 'Rava Idli', description: 'Soft semolina idlis', price: 199, category: 'idli', isVeg: true, image: ravaIdli },
  { id: 'i4', name: 'Mini Idli', description: 'Mini idlis in hot sambar', price: 209, category: 'idli', isVeg: true, image: miniIdli },

  // Vadas - Premium Pricing
  { id: 'v1', name: 'Medu Vada', description: 'Crispy urad dal vadas', price: 189, category: 'vada', isVeg: true, isPopular: true, image: meduVada },
  { id: 'v2', name: 'Sambar Vada', description: 'Vadas soaked in sambar', price: 209, category: 'vada', isVeg: true, image: sambarVada },
  { id: 'v3', name: 'Dahi Vada', description: 'Vadas in sweet yogurt', price: 219, category: 'vada', isVeg: true, image: dahiVada },
  { id: 'v4', name: 'Masala Vada', description: 'Spiced chana dal fritters', price: 199, category: 'vada', isVeg: true, isSpicy: true, image: masalaVada },

  // Rice Items - Premium Pricing
  { id: 'r1', name: 'Curd Rice', description: 'Creamy yogurt rice', price: 259, category: 'rice', isVeg: true, isPopular: true, image: curdRice },
  { id: 'r2', name: 'Lemon Rice', description: 'Tangy lemon rice', price: 259, category: 'rice', isVeg: true, image: lemonRice },
  { id: 'r3', name: 'Tamarind Rice', description: 'Spicy tamarind rice', price: 279, category: 'rice', isVeg: true, isSpicy: true, image: tamarindRice },
  { id: 'r4', name: 'Bisi Bele Bath', description: 'Karnataka special rice', price: 329, category: 'rice', isVeg: true, isSpicy: true, image: bisiBeleBath },
  { id: 'r5', name: 'Coconut Rice', description: 'Rice with fresh coconut', price: 269, category: 'rice', isVeg: true, image: coconutRice },

  // Beverages - Premium Pricing
  { id: 'b1', name: 'Filter Coffee', description: 'Authentic South Indian filter coffee', price: 149, category: 'beverages', isVeg: true, isPopular: true, image: filterCoffee },
  { id: 'b2', name: 'Masala Chai', description: 'Spiced Indian tea', price: 129, category: 'beverages', isVeg: true, image: masalaChai },
  { id: 'b3', name: 'Buttermilk', description: 'Cool spiced buttermilk', price: 139, category: 'beverages', isVeg: true, image: buttermilk },
  { id: 'b4', name: 'Mango Lassi', description: 'Sweet mango yogurt drink', price: 199, category: 'beverages', isVeg: true, image: mangoLassi },

  // Desserts - Premium Pricing
  { id: 'de1', name: 'Kesari Bath', description: 'Sweet semolina dessert', price: 199, category: 'desserts', isVeg: true, isPopular: true, image: kesariBath },
  { id: 'de2', name: 'Payasam', description: 'Traditional rice pudding', price: 219, category: 'desserts', isVeg: true, image: payasam },
  { id: 'de3', name: 'Mysore Pak', description: 'Rich ghee sweet', price: 249, category: 'desserts', isVeg: true, image: mysorePak },
  { id: 'de4', name: 'Coconut Burfi', description: 'Sweet coconut fudge', price: 209, category: 'desserts', isVeg: true, image: coconutBurfi },
];

export const categoryLabels: Record<string, string> = {
  dosa: 'Dosas',
  idli: 'Idlis',
  vada: 'Vadas',
  rice: 'Rice Items',
  curry: 'Curries',
  snacks: 'Snacks',
  beverages: 'Beverages',
  desserts: 'Desserts',
};
