import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../services/product.service";

export const useProducts = (limit?: number) => {
  const productQuery = useQuery({
    queryKey: ["products", limit],
    queryFn: () => (limit ? getProducts(limit) : getProducts(10)),
  });

  return {
    productQuery,
  };
};
