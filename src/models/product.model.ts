import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/product.interface';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const [products] = await this.connection.execute(query);

    return products as Product[];
  }

  async addProduct(product: Product): Promise<Product> {
    const columns = Object.keys(product).join(', ');
    const placeholders = Object.keys(product).map((_item) => '?').join(', ');
    const query = `INSERT INTO Trybesmith.products (${columns}) VALUE (${placeholders})`;
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query, 
      [...Object.values(product)],
    );

    return { id: insertId, ...product };
  }
}

export default ProductModel;