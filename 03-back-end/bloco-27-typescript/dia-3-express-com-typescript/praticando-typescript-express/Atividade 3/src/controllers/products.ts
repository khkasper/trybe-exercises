import { BaseProduct } from "../data/products";
import { Request, Response } from 'express';

import * as ProductService from '../services/products';

export function getAll(_req: Request, res: Response) {
  const { status, data } = ProductService.getAll();
  res.status(status).json(data);
}

export function getById(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, data, error } = ProductService.getById(Number(id));

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function create(req: Request, res: Response) {
  const { name, brand, price, manufacturingDate, expirationDate } = req.body;
  const product: BaseProduct = { name, brand, price, manufacturingDate, expirationDate };

  const { status, data } = ProductService.create(product);

  res.status(status).json(data);
}

export function edit(req: Request, res: Response) {
  const { id } = req.params as { id: string };

  const { name, brand, price, manufacturingDate, expirationDate } = req.body;
  const product: BaseProduct = { name, brand, price, manufacturingDate, expirationDate };
  
  const { status, data, error } = ProductService.edit(Number(id), product);
  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function deleteProduct(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, data, error } = ProductService.deleteProduct(Number(id));

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function getAllByPriceRange(req: Request<{ start: string, end: number }>, res: Response) {
  const { start, end } = req.query;
  const { status, data, error } = ProductService.getAllByPriceRange(Number(start), Number(end));
  if (error) return res.status(status).json({ error });
  res.status(status).json(data);
}

export function getAllNotExpired(req: Request, res: Response) {
  const { status, data } = ProductService.getAllNotExpired();
  res.status(status).json(data);
}
