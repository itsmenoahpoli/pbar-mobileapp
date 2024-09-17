import React from "react";
import { View, ActivityIndicator } from "react-native";

export const LoadingData: React.FC = () => {
  return (
    <View className="w-full h-[100px] flex justify-center items-center rounded">
      <ActivityIndicator color="lightcoral" />
    </View>
  );
};
