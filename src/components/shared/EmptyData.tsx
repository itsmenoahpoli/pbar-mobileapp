import React from "react";
import { View, Text, Image } from "react-native";
import { ImageAssets } from "@/assets/index";

export const EmptyData: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <View className="w-full bg-white rounded flex flex-col justify-center items-center py-4 my-2">
      <Image
        source={ImageAssets.emptyData}
        resizeMethod="resize"
        resizeMode="contain"
        className="h-16 w-16"
      />

      {props.children ? (
        props.children
      ) : (
        <Text className="text-[10px] text-gray-500 text-center uppercase mt-2">
          No data
        </Text>
      )}
    </View>
  );
};
