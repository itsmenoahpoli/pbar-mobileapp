import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { BaseLayout } from "@/layouts";
import { AccountInformationForm } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "MY_PROFILE_SCREEN">;
};

export const MyProfileScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="MY PROFILE" hasFooter hasHeader>
      <View className="flex-1 px-3">
        <AccountInformationForm />
        <Text className="text-xs text-gray-600 text-center">
          Fetching account information
        </Text>
      </View>
    </BaseLayout>
  );
};
