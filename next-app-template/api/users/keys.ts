import { RequestUserListFilter } from "@api/users/types";

export const queryKeys = {
  all: ["user"] as const,
  list: (req: RequestUserListFilter) => [...queryKeys.all, req],
  details: (id: number) => [...queryKeys.all, id],
};
