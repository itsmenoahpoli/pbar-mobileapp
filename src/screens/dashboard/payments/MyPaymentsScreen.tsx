import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable } from "react-native";
import { BaseLayout } from "@/layouts";
import { EmptyData } from "@/components/shared";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "MY_PAYMENTS_SCREEN">;
};

export const MyPaymentsScreen: React.FC<Props> = (props) => {
  const goToRoutes = () => {
    // @ts-ignore
    return props.navigation.navigate("MY_PAYMENTS_SCREEN");
  };

  return (
    <BaseLayout headerTitle="MY PAYMENTS" hasFooter hasHeader>
      <View className="px-3">
        <EmptyData>
          <Text className="text-xs text-gray-600 mt-4">
            You do not have any payments yet
          </Text>
          <Pressable onPress={goToRoutes}>
            <Text className="text-xs text-blue-600 underline">Book now!</Text>
          </Pressable>
        </EmptyData>
      </View>
    </BaseLayout>
  );
};
