import { useState } from 'react';
import { Order, OrderItem, MenuItem } from '@/types/hotel';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ord-001',
      tableNumber: 2,
      items: [
        { menuItem: { id: 'd1', name: 'Masala Dosa', price: 80, category: 'dosa', isVeg: true, description: '' }, quantity: 2 },
        { menuItem: { id: 'b1', name: 'Filter Coffee', price: 35, category: 'beverages', isVeg: true, description: '' }, quantity: 2 },
      ],
      status: 'preparing',
      totalAmount: 230,
      createdAt: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      id: 'ord-002',
      tableNumber: 6,
      items: [
        { menuItem: { id: 'i1', name: 'Idli Sambar', price: 50, category: 'idli', isVeg: true, description: '' }, quantity: 3 },
        { menuItem: { id: 'v1', name: 'Medu Vada', price: 50, category: 'vada', isVeg: true, description: '' }, quantity: 2 },
      ],
      status: 'pending',
      totalAmount: 250,
      createdAt: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: 'ord-003',
      tableNumber: 10,
      items: [
        { menuItem: { id: 'r4', name: 'Bisi Bele Bath', price: 100, category: 'rice', isVeg: true, description: '' }, quantity: 2 },
        { menuItem: { id: 'de1', name: 'Kesari Bath', price: 55, category: 'desserts', isVeg: true, description: '' }, quantity: 2 },
      ],
      status: 'ready',
      totalAmount: 310,
      createdAt: new Date(Date.now() - 1000 * 60 * 25),
    },
  ]);

  const [cartItems, setCartItems] = useState<OrderItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.menuItem.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.menuItem.id === itemId ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.menuItem.id !== itemId));
  };

  const placeOrder = (tableNumber: number) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.menuItem.price * item.quantity,
      0
    );

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      tableNumber,
      items: cartItems,
      status: 'pending',
      totalAmount: total,
      createdAt: new Date(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status } : order))
    );
  };

  return {
    orders,
    cartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    placeOrder,
    updateOrderStatus,
  };
}
