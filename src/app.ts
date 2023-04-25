import express from 'express';
import productsRouter from './routers/products.router';
import usersRouter from './routers/user.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

export default app;
