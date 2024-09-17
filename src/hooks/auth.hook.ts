import { useAuthStore } from "@/store";

export const useAuth = () => {
  const { token, user, SET_USER, SET_TOKEN } = useAuthStore();

  const isAuthenticated = Boolean(token !== undefined && user !== undefined);

  const logout = () => {
    SET_TOKEN(undefined);
    SET_USER(undefined);
  };

  return {
    isAuthenticated,
    user,
    token,
    logout,
  };
};
