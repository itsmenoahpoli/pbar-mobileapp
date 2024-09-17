import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationService } from "@/services";
import type { StackParamsList } from "@/types/navigation";

import {
  WelcomeScreen,
  SignupScreen,
  LoginScreen,
  RequestOtpScreen,
  VerifyOtpScreen,
  HomeScreen,
  AllRoutesScreen,
  ViewRouteScreen,
  MyTicketsScreen,
  MyPaymentsScreen,
  MyProfileScreen,
  BookTicketsScreen,
} from "@/screens";

const { Navigator, Screen } = createStackNavigator<StackParamsList>();

const navigationOpts = {
  headerShown: false,
  animation: "none",
  animationEnabled: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Navigator screenOptions={navigationOpts} initialRouteName="WELCOME_SCREEN">
        <Screen name="WELCOME_SCREEN" component={WelcomeScreen} />
        <Screen name="SIGNUP_SCREEN" component={SignupScreen} />
        <Screen name="LOGIN_SCREEN" component={LoginScreen} />
        <Screen name="REQUEST_OTP_SCREEN" component={RequestOtpScreen} />
        <Screen name="VERIFY_OTP_SCREEN" component={VerifyOtpScreen} />
        <Screen name="HOME_SCREEN" component={HomeScreen} />
        <Screen name="ALL_ROUTES_SCREEN" component={AllRoutesScreen} />
        <Screen name="VIEW_ROUTE_SCREEN" component={ViewRouteScreen} />
        <Screen name="MY_TICKETS_SCREEN" component={MyTicketsScreen} />
        <Screen name="MY_PAYMENTS_SCREEN" component={MyPaymentsScreen} />
        <Screen name="MY_PROFILE_SCREEN" component={MyProfileScreen} />
        <Screen name="BOOK_TICKETS_SCREEN" component={BookTicketsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
