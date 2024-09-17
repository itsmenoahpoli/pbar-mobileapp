import React from "react";
import * as SplashScreen from "expo-splash-screen";
import ToastManager from "react-native-toast-alert";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AppNavigation } from "@/navigation";

SplashScreen.hideAsync();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <ToastManager />
      <StatusBar style="light" />
      <AppNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
