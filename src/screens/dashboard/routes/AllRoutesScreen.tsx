import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { BaseLayout } from "@/layouts";
import { BusRoutesList } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "ALL_ROUTES_SCREEN">;
};

export const SearchDialog: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  console.log(open);

  return (
    <>
      <Pressable onPress={handleToggleOpen}>
        <FontAwesome name="search" size={20} color="#fff" />
      </Pressable>
    </>
  );
};

export const AllRoutesScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout
      headerTitle="FIND YOUR BUS"
      pageHeaderChildren={<SearchDialog />}
      hasFooter
      hasHeader
    >
      <View className="w-full bg-white p-3 hidden">
        <View className="flex flex-col items-center space-y-2">
          <TextInput
            className="w-full h-[45px] rounded-lg bg-gray-100 text-xs font-bold px-2"
            placeholder="ROUTE FROM"
          />
          <TextInput
            className="w-full h-[45px] rounded-lg bg-gray-100 text-xs font-bold px-2"
            placeholder="ROUTE TO"
          />
          <Pressable className="w-full h-[35px] bg-green-600 rounded-lg items-center justify-center">
            <Text className="text-xs text-white font-bold">SEARCH</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView className="flex-1 pt-4 px-3" showsHorizontalScrollIndicator={false}>
        <BusRoutesList />
      </ScrollView>
    </BaseLayout>
  );
};
