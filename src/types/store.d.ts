export type User = any;

export type AuthStore = {
  isAuthenticated: boolean;
  user: User | undefined;
  token: string | undefined;
  SET_USER: (user: User | undefined) => void;
  UNSET_USER: () => void;
  SET_TOKEN: (token: string | undefined) => void;
  UNSET_TOKEN: () => void;
};
