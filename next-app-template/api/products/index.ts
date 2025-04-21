import axiosClient from "@api/index";
import { RequestCreateProduct, RequestProductListFilter, ResponseProduct } from "@api/products/types";

export const fetchProductList = async (req: RequestProductListFilter) => {
  const response = await axiosClient.get<ResponseProduct[]>("/Products", {
    params: req,
  });

  return response.data;
};

export const fetchProductDetail = async (id: number) => {
  const response = await axiosClient.get<ResponseProduct>(`/Products/${id}`);

  return response.data;
};

export const createProduct = async (data: RequestCreateProduct) => {
  return await axiosClient.post("/Products", {
    data,
  });
};
