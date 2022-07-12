import RestaurantIfos from "../interfaces/Restaurant";
import * as restaurantModel from "../models/restaurantModel";

export function getAllRestaurants() {
  const data = restaurantModel.getAllRestaurants();
  return { status: 200, data };
}

export function getRestaurantById(id: number) {
  const data = restaurantModel.getRestaurantById(id);

  if (data === null) {
    const message = 'Restaurant not found';
    return { status: 404, error: { message } };
  };
  return { status: 200, data };
}

export function createRestaurant(restaurant: RestaurantIfos) {
  const data = restaurantModel.createRestaurant(restaurant);
  return { status: 201, data };
}

export function editRestaurant(id: number, restaurant: RestaurantIfos) {
  const data = restaurantModel.editRestaurant(id, restaurant);

  if (data === null) {
    const message = 'Restaurant not found';
    return { status: 404, error: { message } };
  }
  return { status: 200, data };
}

export function deleteRestaurant(id: number) {
  const data = restaurantModel.deleteRestaurant(id);

  if (data === null) {
    const message = 'Restaurant not found';
    return { status: 404, error: { message } };
  }
  return { status: 200, data };
};

export function getOpenRestaurants() {
  const data = restaurantModel.getOpenRestaurants();
  console.log(data)
  if (!data) {
    const message = 'Restaurant not found';
    return { status: 404, error: { message } };
  }
  return { status: 200, data };
}
