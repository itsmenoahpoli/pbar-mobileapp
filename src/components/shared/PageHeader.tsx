import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Pressable, StyleSheet } from "react-native";

export const PageHeader: React.FC<{
  title: string;
  hideBack?: boolean;
  children?: React.ReactNode;
}> = (props) => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <View className="h-[60px] bg-red-700 flex flex-row justify-center items-center relative px-5">
      {!props.hideBack ? (
        <Pressable className="absolute left-4 top-5" onPress={handleGoBack}>
          <FontAwesome name="long-arrow-left" size={24} color="white" />
        </Pressable>
      ) : null}

      <Text className="text-lg text-white font-bold">{props.title}</Text>

      {props.children ? (
        <View className="absolute right-4 top-5">{props.children}</View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
