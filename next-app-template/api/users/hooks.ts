import { createUser, fetchUserDetail, fetchUserList } from "@api/users";
import { queryKeys } from "@api/users/keys";
import { RequestUserListFilter } from "@api/users/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetUserList = (req: RequestUserListFilter) => {
  return useQuery({ queryKey: queryKeys.list(req), queryFn: () => fetchUserList(req) });
};

export const useGetUserDetail = (id: number) => {
  return useQuery({ queryKey: queryKeys.details(id), queryFn: () => fetchUserDetail(id) });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
  });
};
