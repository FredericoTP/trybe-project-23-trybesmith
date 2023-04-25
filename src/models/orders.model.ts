import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Orders } from '../interfaces/order.interface';

class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Orders[]> {
    const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id
    GROUP BY o.id`;
    const [products] = await this.connection.execute(query);

    return products as Orders[];
  }

  async addOrder(userId: number): Promise<number> {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUE (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);

    return insertId;
  }
}

export default OrdersModel;