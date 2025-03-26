import { Product } from "./product";

export interface ProductHistory {
  products: Product[];
  total: number;
  date: string;
}
