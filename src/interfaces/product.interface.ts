interface Product {
  id?: number;
  name: string;
  amount: string;
}

interface ProductAdd {
  type: null;
  message: Product;
}

interface ProductError {
  type: string;
  message: string;
}

export { Product, ProductAdd, ProductError };