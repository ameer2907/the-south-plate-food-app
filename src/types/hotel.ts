export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export type MenuCategory = 
  | 'dosa'
  | 'idli'
  | 'vada'
  | 'rice'
  | 'curry'
  | 'snacks'
  | 'beverages'
  | 'desserts';

export interface Order {
  id: string;
  tableNumber: number;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  createdAt: Date;
  customerName?: string;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
}

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'served' | 'completed';

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: TableStatus;
  currentOrder?: Order;
}

export type TableStatus = 'available' | 'occupied' | 'reserved' | 'cleaning';

export interface DashboardStats {
  totalOrders: number;
  todayRevenue: number;
  activeOrders: number;
  availableTables: number;
}
