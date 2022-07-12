import express from 'express';
import * as restaurantController from './controllers/restaurantController';
import validateBodyMiddleware from './middlewares/restaurantMiddleware';

const app = express();
app.use(express.json());

app.get('/restaurants', restaurantController.getAllRestaurants);

app.get('/restaurants/open', restaurantController.getOpenRestaurants);

app.get('/restaurants/:id', restaurantController.getRestaurantById);

app.post('/restaurants', validateBodyMiddleware, restaurantController.createRestaurant);

app.put('/restaurants/:id', validateBodyMiddleware, restaurantController.editRestaurant);

app.delete('/restaurants/:id', restaurantController.deleteRestaurant);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
