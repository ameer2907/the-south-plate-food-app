import { MenuItem } from '@/types/hotel';

// Import all food images
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
  // Dosas
  {
    id: 'd1',
    name: 'Masala Dosa',
    description: 'Crispy golden dosa filled with spiced potato masala, served with sambar and chutney',
    price: 80,
    category: 'dosa',
    isVeg: true,
    isPopular: true,
    image: masalaDosa,
  },
  {
    id: 'd2',
    name: 'Mysore Masala Dosa',
    description: 'Spicy dosa with red chutney spread, stuffed with potato filling',
    price: 100,
    category: 'dosa',
    isVeg: true,
    isSpicy: true,
    image: mysoreDosa,
  },
  {
    id: 'd3',
    name: 'Rava Dosa',
    description: 'Crispy semolina dosa with onions and curry leaves',
    price: 90,
    category: 'dosa',
    isVeg: true,
    image: ravaDosa,
  },
  {
    id: 'd4',
    name: 'Ghee Roast Dosa',
    description: 'Extra crispy dosa roasted in pure ghee until golden',
    price: 95,
    category: 'dosa',
    isVeg: true,
    isPopular: true,
    image: gheeRoastDosa,
  },
  {
    id: 'd5',
    name: 'Paper Dosa',
    description: 'Ultra-thin crispy dosa, light and delicious',
    price: 70,
    category: 'dosa',
    isVeg: true,
    image: paperDosa,
  },
  {
    id: 'd6',
    name: 'Onion Dosa',
    description: 'Crispy dosa topped with caramelized onions',
    price: 85,
    category: 'dosa',
    isVeg: true,
    image: onionDosa,
  },

  // Idlis
  {
    id: 'i1',
    name: 'Idli Sambar',
    description: 'Soft steamed rice cakes served with sambar and chutney (2 pcs)',
    price: 50,
    category: 'idli',
    isVeg: true,
    isPopular: true,
    image: idliSambar,
  },
  {
    id: 'i2',
    name: 'Ghee Podi Idli',
    description: 'Idlis tossed in ghee and spicy gun powder',
    price: 70,
    category: 'idli',
    isVeg: true,
    isSpicy: true,
    image: podiIdli,
  },
  {
    id: 'i3',
    name: 'Rava Idli',
    description: 'Soft semolina idlis with cashews and curry leaves',
    price: 60,
    category: 'idli',
    isVeg: true,
    image: ravaIdli,
  },
  {
    id: 'i4',
    name: 'Mini Idli Sambar',
    description: 'Bite-sized idlis dunked in hot sambar',
    price: 65,
    category: 'idli',
    isVeg: true,
    image: miniIdli,
  },

  // Vadas
  {
    id: 'v1',
    name: 'Medu Vada',
    description: 'Crispy urad dal fritters, served with sambar and chutney (2 pcs)',
    price: 50,
    category: 'vada',
    isVeg: true,
    isPopular: true,
    image: meduVada,
  },
  {
    id: 'v2',
    name: 'Sambar Vada',
    description: 'Soft vadas soaked in hot sambar',
    price: 60,
    category: 'vada',
    isVeg: true,
    image: sambarVada,
  },
  {
    id: 'v3',
    name: 'Dahi Vada',
    description: 'Soft vadas in creamy yogurt with sweet chutney',
    price: 65,
    category: 'vada',
    isVeg: true,
    image: dahiVada,
  },
  {
    id: 'v4',
    name: 'Masala Vada',
    description: 'Spiced chana dal fritters with herbs',
    price: 55,
    category: 'vada',
    isVeg: true,
    isSpicy: true,
    image: masalaVada,
  },

  // Rice Items
  {
    id: 'r1',
    name: 'Curd Rice',
    description: 'Creamy yogurt rice with pomegranate and curry leaves',
    price: 70,
    category: 'rice',
    isVeg: true,
    isPopular: true,
    image: curdRice,
  },
  {
    id: 'r2',
    name: 'Lemon Rice',
    description: 'Tangy rice with peanuts and curry leaves',
    price: 75,
    category: 'rice',
    isVeg: true,
    image: lemonRice,
  },
  {
    id: 'r3',
    name: 'Tamarind Rice',
    description: 'Tangy and spicy rice with tamarind flavor',
    price: 80,
    category: 'rice',
    isVeg: true,
    isSpicy: true,
    image: tamarindRice,
  },
  {
    id: 'r4',
    name: 'Bisi Bele Bath',
    description: 'Karnataka special spiced rice with lentils and vegetables',
    price: 100,
    category: 'rice',
    isVeg: true,
    isSpicy: true,
    isPopular: true,
    image: bisiBeleBath,
  },
  {
    id: 'r5',
    name: 'Coconut Rice',
    description: 'Fragrant rice with fresh coconut and cashews',
    price: 85,
    category: 'rice',
    isVeg: true,
    image: coconutRice,
  },

  // Curries
  {
    id: 'c1',
    name: 'Sambar',
    description: 'Traditional lentil curry with vegetables',
    price: 60,
    category: 'curry',
    isVeg: true,
    image: sambar,
  },
  {
    id: 'c2',
    name: 'Rasam',
    description: 'Tangy pepper soup with tomatoes and spices',
    price: 40,
    category: 'curry',
    isVeg: true,
    isSpicy: true,
    image: rasam,
  },
  {
    id: 'c3',
    name: 'Avial',
    description: 'Mixed vegetables in coconut and yogurt gravy',
    price: 90,
    category: 'curry',
    isVeg: true,
    image: avial,
  },
  {
    id: 'c4',
    name: 'Kootu Curry',
    description: 'Vegetables and lentils in coconut gravy',
    price: 85,
    category: 'curry',
    isVeg: true,
    image: kootu,
  },

  // Snacks
  {
    id: 's1',
    name: 'Upma',
    description: 'Savory semolina with vegetables and spices',
    price: 55,
    category: 'snacks',
    isVeg: true,
    image: upma,
  },
  {
    id: 's2',
    name: 'Pongal',
    description: 'Comfort food with rice, moong dal and ghee',
    price: 65,
    category: 'snacks',
    isVeg: true,
    isPopular: true,
    image: pongal,
  },
  {
    id: 's3',
    name: 'Uttapam',
    description: 'Thick pancake topped with onions and tomatoes',
    price: 75,
    category: 'snacks',
    isVeg: true,
    image: uttapam,
  },
  {
    id: 's4',
    name: 'Pesarattu',
    description: 'Green gram dosa from Andhra Pradesh',
    price: 70,
    category: 'snacks',
    isVeg: true,
    image: pesarattu,
  },

  // Beverages
  {
    id: 'b1',
    name: 'Filter Coffee',
    description: 'Authentic South Indian filter coffee',
    price: 35,
    category: 'beverages',
    isVeg: true,
    isPopular: true,
    image: filterCoffee,
  },
  {
    id: 'b2',
    name: 'Masala Chai',
    description: 'Spiced Indian tea with ginger and cardamom',
    price: 30,
    category: 'beverages',
    isVeg: true,
    image: masalaChai,
  },
  {
    id: 'b3',
    name: 'Buttermilk',
    description: 'Cool spiced buttermilk with curry leaves',
    price: 35,
    category: 'beverages',
    isVeg: true,
    image: buttermilk,
  },
  {
    id: 'b4',
    name: 'Mango Lassi',
    description: 'Sweet mango yogurt drink',
    price: 60,
    category: 'beverages',
    isVeg: true,
    image: mangoLassi,
  },

  // Desserts
  {
    id: 'de1',
    name: 'Kesari Bath',
    description: 'Sweet semolina pudding with saffron and cashews',
    price: 55,
    category: 'desserts',
    isVeg: true,
    isPopular: true,
    image: kesariBath,
  },
  {
    id: 'de2',
    name: 'Payasam',
    description: 'Creamy rice pudding with cardamom and nuts',
    price: 60,
    category: 'desserts',
    isVeg: true,
    image: payasam,
  },
  {
    id: 'de3',
    name: 'Mysore Pak',
    description: 'Rich ghee and gram flour sweet (2 pcs)',
    price: 50,
    category: 'desserts',
    isVeg: true,
    image: mysorePak,
  },
  {
    id: 'de4',
    name: 'Coconut Burfi',
    description: 'Sweet coconut fudge with cardamom',
    price: 45,
    category: 'desserts',
    isVeg: true,
    image: coconutBurfi,
  },
];

export const categoryLabels: Record<string, string> = {
  dosa: '🥞 Dosas',
  idli: '🍚 Idlis',
  vada: '🍩 Vadas',
  rice: '🍛 Rice Items',
  curry: '🍲 Curries',
  snacks: '🥘 Snacks',
  beverages: '☕ Beverages',
  desserts: '🍮 Desserts',
};
