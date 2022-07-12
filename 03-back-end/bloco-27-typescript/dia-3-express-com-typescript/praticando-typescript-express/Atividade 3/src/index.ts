import express from 'express';
import * as ProductController from './controllers/products';
import * as ProductMiddlewares from './middlewares/products';

const app = express();
app.use(express.json());

app.get('/products/price', ProductController.getAllByPriceRange);
app.get('/products/n-expired', ProductController.getAllNotExpired);

app.get('/products', ProductController.getAll);
app.get('/products/:id', ProductController.getById);

app.delete('/products/:id', ProductController.deleteProduct);

app.use(ProductMiddlewares.validateBody);
app.post('/products', ProductController.create);
app.put('/products/:id', ProductController.edit);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
