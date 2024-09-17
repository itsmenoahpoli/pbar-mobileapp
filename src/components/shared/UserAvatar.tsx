import React from "react";
import { View, Text } from "react-native";

export const UserAvatar: React.FC<{
  userFullname: string;
}> = (props) => {
  const getNameInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <View className="w-[45px] h-[45px] flex justify-center items-center bg-emerald-300 rounded-full">
      <Text className="text-[18px] text-gray-500 font-bold">
        {getNameInitials(props.userFullname)}
      </Text>
    </View>
  );
};
