import { BaseProduct } from "../data/products";
import { NextFunction, Request, Response } from 'express';

export function validateBody(req: Request, res: Response, next: NextFunction) {
  const { name, brand, expirationDate, manufacturingDate, price } = req.body as BaseProduct;

  // verifica se todos os campos foram passados
  if ([name, brand, expirationDate, manufacturingDate, price]
    .some(field => field === null || field === undefined)) {
    const message = 'name, brand, expirationDate, manufacturingDate or price is missing';
    return res.status(400).json({ message });
  }

  // verifica se a marca tem pelo menos 3 caracteres
  if (typeof brand !== 'string' || brand.length < 3) {
    const message = 'The brand must have at least 3 characters';
    return res.status(400).json({ message })
  }

  // verifica se o preço é negativo
  if (typeof price !== 'number' || price < 0) {
    const message = 'The price must be a positive value';
    return res.status(400).json({ message })
  }

  // verifica  se a data de validate é maior que a de fabricação
  if (expirationDate > manufacturingDate) {
    const message = 'ExpirationDate must be greater than ManufacturingDate';
    return res.status(400).json({ message })
  }

  next();
}
