export type RequestProductListFilter = {
  search?: string;
};

export type ResponseProduct = {
  id:number;
  name: string;
  description: string;
  price: number;
};

export type RequestCreateProduct = {
  name: string;
  description: string;
  price: number;
};
