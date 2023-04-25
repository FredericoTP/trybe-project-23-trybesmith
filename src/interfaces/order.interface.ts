interface Orders {
  id: number;
  userId: number;
}

interface AllOrders {
  type: null;
  message: Orders[];
}

export { Orders, AllOrders };