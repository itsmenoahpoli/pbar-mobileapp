import httpClient from "@/api";
import { Toast } from "react-native-toast-alert";
import { NavigationService } from "./navigation.service";
import { useAuthStore } from "@/store";
import type { Credentials } from "@/types/auth";

export const AuthService = {
  signupAccount: async function (
    payload: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await httpClient
      .post("/auth/account/signup", payload)
      .then((response) => {
        Toast.success("Account created, please login");

        NavigationService.navigate("LOGIN_SCREEN");
      })
      .catch((error) => {
        if (error.response?.data.message === "USER_ALREADY_EXIST") {
          return Toast.error("E-mail address already in use");
        }

        Toast.error("Failed to create account");
      })
      .finally(() => setLoading(false));
  },

  loginAccount: async function (
    payload: Credentials,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await httpClient
      .post("/auth/login", payload)
      .then(async (response) => {
        const { SET_USER, SET_TOKEN } = useAuthStore.getState();
        const { user, accessToken } = response.data;

        SET_USER(user);
        SET_TOKEN(accessToken);

        Toast.success("Welcome to CUL Transport App");
        NavigationService.navigate("HOME_SCREEN");
      })
      .catch((error) => {
        Toast.error("Invalid credentials provided");
      })
      .finally(() => setLoading(false));
  },
};
