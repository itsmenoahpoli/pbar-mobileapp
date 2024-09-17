import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable, TextInput } from "react-native";
import { BaseLayout } from "@/layouts";
import { HeaderNav } from "@/components/domains";
import { BusRoutesList, BusSearchForm } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<Props> = (props) => {
  const goToAllRoutes = () => {
    return props.navigation.navigate("ALL_ROUTES_SCREEN");
  };

  return (
    <>
      <BaseLayout hasFooter>
        <HeaderNav />

        <View className="flex-1 px-3 pt-3">
          <BusSearchForm />

          <View className="flex-1 mt-5">
            <View className="flex flex-row justify-between">
              <Text className="fond-medium">Recent Posted Routes</Text>
              <Pressable onPress={goToAllRoutes}>
                <Text className="text-xs text-blue-700 underline">View All</Text>
              </Pressable>
            </View>
            <ScrollView className="flex-1 mt-2" showsVerticalScrollIndicator={false}>
              <BusRoutesList />
            </ScrollView>
          </View>
        </View>
      </BaseLayout>
    </>
  );
};
