export type RequestUserListFilter = {
  search?: string;
};

export type ResponseUser = {
  fullName: string;
  email: string;
};

export type RequestCreateUser = {
  fullName: string;
  email: string;
  password: string;
};
