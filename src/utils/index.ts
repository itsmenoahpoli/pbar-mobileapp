import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-alert";
import { NavigationService } from "@/services";

export const checkAuth = async () => {
  const user = await AsyncStorage.getItem("authUser");

  if (!user) {
    Toast.error("You must login");
    NavigationService.navigate("LOGIN_SCREEN");
  }
};
