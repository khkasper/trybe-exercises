import RestaurantInfos from "../interfaces/Restaurant";

export interface Restaurant extends RestaurantInfos {
  id: number;
}

export const restaurants: Restaurant[] = [
  {
    "id": 1,
    "name": "Los Pollos Hermanos",
    "category": "fast food",
    "openingTime": "10:00",
    "closingTime": "23:00",
  },
  {
    "id": 2,
    "name": "Central Perk",
    "category": "Coffee House",
    "openingTime": "7:00",
    "closingTime": "13:30",
  }
]
