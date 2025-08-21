export interface Order {
  id: string;
  date: string;
  paymentState: PaymentState
  orderState: OrderState
  total: number;
}

export type PaymentState = 'paid' | 'pending' | 'failed';
export type OrderState = 'processing' | 'shipped' | 'delivered' | 'cancelled';