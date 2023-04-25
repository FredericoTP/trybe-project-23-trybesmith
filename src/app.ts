import express from 'express';
import productsRouter from './routers/products.router';
import usersRouter from './routers/user.router';
import ordersRouter from './routers/order.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

export default app;
