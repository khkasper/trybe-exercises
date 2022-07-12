import { BaseProduct } from '../data/products';

import * as ProductsModel from '../models/Products';

export function getAll() {
  const data = ProductsModel.getAllProducts();
  return { status: 200, data };
}

export function getById(id: number) {
  const data = ProductsModel.getProductById(id);

  if (data === null) {
    const message = 'Product not found';
    return { status: 404, error: { message } };
  };
  return { status: 200, data };
}


export function create(product: BaseProduct) {
  const data = ProductsModel.createProduct(product);

  return { status: 201, data };
}

export function edit(id: number, product: BaseProduct) {
  const data = ProductsModel.editProduct(id, product);

  if (data === null) {
    const message = "Product not found";
    return { status: 404, error: { message } };
  }

  return { status: 200, data };
}

export function deleteProduct(id: number) {
  const data = ProductsModel.deleteProduct(id);

  if (data === null) {
    const message = "Product not found";
    return { status: 404, error: { message } };
  }

  return { status: 200, data };
}

export function getAllByPriceRange(start: number, end: number) {
  const data = ProductsModel.getAllByPriceRange(start, end);

  if (data === null) {
    const message = '"end" param must be greater than "start"';
    return { status: 401, error: { message } };
  }
  return { status: 200, data };
}

export function getAllNotExpired() {
  const data = ProductsModel.getAllNotExpired();

  return { status: 200, data };
}
