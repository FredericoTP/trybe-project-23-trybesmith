import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User, Token } from '../interfaces/user.interface';
import { generateToken } from '../utils/auth';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  } 

  async getByUsername(username: string): Promise<User | undefined> {
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';

    const [[user]] = await this.connection.execute<RowDataPacket[]>(query, [username]);

    return user as (User | undefined);
  }

  async addUser(user: User): Promise<Token> {
    const columns = Object.keys(user).join(', ');
    const placeholders = Object.keys(user).map((_item) => '?').join(', ');
    const query = `INSERT INTO Trybesmith.users (${columns}) VALUE (${placeholders})`;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query, 
      [...Object.values(user)],
    );

    const token = generateToken({ id: insertId, name: user.username });

    return { token };
  }
}

export default UserModel;