/**
 * Future e-commerce domain types.
 * Designed for Razorpay, inventory, cart, and admin dashboard integration
 * without refactoring the product catalog layer.
 */

export type Money = {
  amount: number;
  currency: "INR";
};

export type ProductVariant = {
  id: string;
  sku: string;
  name: string;
  weightGrams: number;
  price: Money;
  compareAtPrice?: Money;
  stockQuantity: number;
  isAvailable: boolean;
};

export type InventoryStatus = "in_stock" | "low_stock" | "out_of_stock" | "preorder";

export type ProductInventory = {
  productId: string;
  status: InventoryStatus;
  totalStock: number;
  variants: ProductVariant[];
  lowStockThreshold: number;
  updatedAt: string;
};

export type CartItem = {
  variantId: string;
  productId: string;
  quantity: number;
  unitPrice: Money;
};

export type Cart = {
  id: string;
  userId?: string;
  sessionId?: string;
  items: CartItem[];
  subtotal: Money;
  updatedAt: string;
};

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: Money;
  shipping: Money;
  tax: Money;
  total: Money;
  status: OrderStatus;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
};

export type Address = {
  fullName: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  role: "customer" | "admin";
  createdAt: string;
};
