import RestaurantInfos from '../interfaces/Restaurant';
import { NextFunction, Request, Response } from 'express';

export default function validateBody(req: Request, res: Response, next: NextFunction) {
  const { name, category, openingTime, closingTime } = req.body as RestaurantInfos;
  const properties = [name, category, openingTime, closingTime]

  // verifica se todos os campos foram preenchidos
  if (properties.some(info => !info)) {
    const message = 'The fields "name", "category", "openingTime" and "closingTime" are required';
    return res.status(400).json({ message });
  }

  // verifica se o nome do restaurante e o nome da categoria têm pelo menos 3 caracteres cada
  if (typeof name !== 'string' || name.length < 3
    || typeof category !== 'string' || category.length < 3) {
    const message = 'Name and category must have at least 3 characters';
    return res.status(400).json({ message })
  }
  next();
}
