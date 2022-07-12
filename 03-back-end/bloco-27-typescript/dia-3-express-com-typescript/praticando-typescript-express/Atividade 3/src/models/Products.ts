import products, { BaseProduct, Product } from '../data/products';

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | null {
  return products.find(product => product.id === id) || null;
}

export function createProduct(product: BaseProduct): Product {
  const lastId = products[products.length - 1].id;
  const newProduct = { id: lastId + 1, ...product };
  products.push(newProduct);
  return newProduct;
};

export function editProduct(id: number, product: BaseProduct) {
  const index = products.findIndex(prod => prod.id === id);

  if (index < 0) return null;

  const editedProduct = { ...products[index], ...product };
  products[index] = editedProduct
  return editedProduct;
}

export function deleteProduct(id: number): Product | null {
  const index = products.findIndex(prod => prod.id === id);
  
  if (index < 0) return null;

  const deletedProduct = products[index];
  products.splice(index, 1);

  return deletedProduct;
}

export function getAllByPriceRange(start: number, end: number) {
  if (start > end) return null;
  return products.filter(({ price }) => price >= start && price <= end);
}

export function getAllNotExpired() {
  const now = new Date().getTime();
  return products.filter(({ expirationDate }) => expirationDate >= now);
}
