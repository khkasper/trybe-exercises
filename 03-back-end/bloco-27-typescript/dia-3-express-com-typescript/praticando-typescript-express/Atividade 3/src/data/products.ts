export interface BaseProduct {
  name: string;
  brand: string;
  price: number;
  manufacturingDate: number;
  expirationDate: number;
}

export interface Product extends BaseProduct {
  id: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'macbook pro 16\'\'',
    brand: 'apple',
    price: 3600,
    manufacturingDate: new Date('2021-10-25').getTime(),
    expirationDate: new Date('2026-10-25').getTime(),
  },
  {
    id: 2,
    name: 'surface pro',
    brand: 'microsoft',
    price: 2500,
    manufacturingDate: new Date('2021-10-25').getTime(),
    expirationDate: new Date('2024-10-25').getTime(),
  },
  {
    id: 3,
    name: 'alienware',
    brand: 'dell',
    price: 2000,
    manufacturingDate: new Date('2021-10-25').getTime(),
    expirationDate: new Date('2022-10-25').getTime(),
  },
  {
    id: 4,
    name: 'alienware expired',
    brand: 'dell',
    price: 2000,
    manufacturingDate: new Date('2015-10-25').getTime(),
    expirationDate: new Date('2016-10-25').getTime(),
  },
];

export default products;
