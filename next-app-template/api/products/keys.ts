import { RequestProductListFilter } from "@api/products/types";

export const queryKeys = {
  all: ["product"] as const,
  list: (req: RequestProductListFilter) => [...queryKeys.all, req],
  details: (id: number) => [...queryKeys.all, id],
};
