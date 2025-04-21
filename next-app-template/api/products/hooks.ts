import { createProduct, fetchProductDetail, fetchProductList } from "@api/products";
import { queryKeys } from "@api/products/keys";
import { RequestProductListFilter } from "@api/products/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetProductList = (req: RequestProductListFilter) => {
  return useQuery({ queryKey: queryKeys.list(req), queryFn: () => fetchProductList(req) });
};

export const useGetProductDetail = (id: number) => {
  return useQuery({ queryKey: queryKeys.details(id), queryFn: () => fetchProductDetail(id) });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
  });
};
