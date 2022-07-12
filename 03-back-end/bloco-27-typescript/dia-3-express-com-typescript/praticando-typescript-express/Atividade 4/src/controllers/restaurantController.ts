import * as restaurantService from "../services/restaurantService";

import { Request, Response } from 'express';
import RestaurantInfos from "../interfaces/Restaurant"

export function getAllRestaurants(_req: Request, res: Response) {
  const { status, data } = restaurantService.getAllRestaurants();
  res.status(status).json(data);
}

export function getRestaurantById(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, data, error } = restaurantService.getRestaurantById(Number(id));

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function createRestaurant(req: Request, res: Response) {
  const restaurant = req.body;
  const { status, data } = restaurantService.createRestaurant(restaurant);
  res.status(status).json(data);
}

export function editRestaurant(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const restaurant = req.body as RestaurantInfos;
  const { status, data, error } = restaurantService.editRestaurant(Number(id), restaurant);

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function deleteRestaurant(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, data, error } = restaurantService.deleteRestaurant(Number(id));

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function getOpenRestaurants(req: Request, res: Response) {
  const { status, data, error } = restaurantService.getOpenRestaurants();

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}
