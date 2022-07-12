import RestaurantInfos from "../interfaces/Restaurant";
import { Restaurant, restaurants } from "../data/Restaurant";

export function getAllRestaurants(): Restaurant[] {
  return restaurants;
}

export function getRestaurantById(id: number): Restaurant | null {
  return restaurants.find(restaurant => restaurant.id === id) || null;
}

export function createRestaurant(restaurant: RestaurantInfos): Restaurant {
  const lastId = restaurants[restaurants.length - 1].id;
  const newRestaurant = { id: lastId + 1, ...restaurant };
  restaurants.push(newRestaurant);
  return newRestaurant;
};

export function editRestaurant(id: number, restaurant: RestaurantInfos) {
  const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === id);

  if (restaurantIndex < 0 || !restaurants[restaurantIndex]) return null;

  const editedRestaurant = { ...restaurants[restaurantIndex], ...restaurant };
  restaurants[restaurantIndex] = editedRestaurant
  return editedRestaurant;
}

export function deleteRestaurant(id: number): Restaurant | null {
  const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === id);

  if (restaurantIndex < 0 || !restaurants[restaurantIndex]) return null;

  const restaurantToBeDeleted = restaurants[restaurantIndex];
  restaurants.splice(restaurantIndex, 1)

  return restaurantToBeDeleted;
}

export function getOpenRestaurants(): Restaurant[] | null {
  const currentTime = new Date();
  const currentTimeStamp = currentTime.getHours() * 60 + currentTime.getMinutes();

  return restaurants 
  .filter(({ openingTime, closingTime }) => {
    const [openingHour, openingMinute] = openingTime.split(':');
    const [closingHour, closingMinute] = closingTime.split(':');
    const openingTimeStamp = parseInt(openingHour) * 60 + parseInt(openingMinute);
    const closingTimeStamp = parseInt(closingHour) * 60 + parseInt(closingMinute);
    
    return openingTimeStamp <= currentTimeStamp && closingTimeStamp >= currentTimeStamp;
  })
};