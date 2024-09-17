import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";
import { useFetch } from "@/hooks";
import { BookingService } from "@/services";
import { BaseLayout } from "@/layouts";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VIEW_BOOKING_SCREEN">;
  route: RouteProp<StackParamsList, "VIEW_BOOKING_SCREEN">;
};

export const BookingInformationScreen: React.FC<Props> = (props) => {
  const { bookingNo } = props.route.params;

  return (
    <BaseLayout headerTitle="VIEW BOOKING INFORMATION" hasFooter hasHeader>
      <View className="flex-1"></View>
    </BaseLayout>
  );
};
