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

interface AllProducts {
  type: null;
  message: Product[];
}

export { Product, ProductAdd, ProductError, AllProducts };