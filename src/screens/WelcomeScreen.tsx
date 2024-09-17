import React from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "WELCOME_SCREEN">;
};

export const WelcomeScreen: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets();

  const goToLogin = () => {
    return props.navigation.navigate("LOGIN_SCREEN");
  };

  const goToSignUp = () => {
    return props.navigation.navigate("SIGNUP_SCREEN");
  };

  return (
    <SafeAreaProvider>
      <LinearGradient
        className="flex-1 justify-between items-center pt-[150px]"
        colors={["#f7de63", "#dbbd25"]}
        style={{ paddingBottom: insets.bottom }}
      >
        <Text className="text-2xl font-bold">PBAR Bus Booking App</Text>

        <View className="w-full flex flex-col gap-y-3 px-5 mb-8">
          <Pressable
            className="h-[45px] rounded border justify-center items-center"
            onPress={goToSignUp}
          >
            <Text>Sign Up</Text>
          </Pressable>
          <Pressable
            className="h-[45px] bg-red-600 rounded border justify-center items-center"
            onPress={goToLogin}
          >
            <Text className="text-white">Log In</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
};
