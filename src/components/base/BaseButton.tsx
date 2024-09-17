import React from "react";
import { Pressable, Text, type PressableProps } from "react-native";

export const BaseButton: React.FC<
  {
    classNames?: string;
    labelClassnames?: string;
    title: string;
    darkLabel?: boolean;
  } & PressableProps
> = (props) => {
  const classStr = `w-full h-[50px] bg-red-700 rounded-md justify-center ${props.classNames}`;
  const labelClassStr = `text-[12px] text-white font-medium self-center uppercase ${
    props.labelClassnames
  } ${props.darkLabel ? "text-gray-800" : ""}`;
  return (
    <Pressable {...props} className={classStr}>
      <Text className={labelClassStr}>{props.title}</Text>
    </Pressable>
  );
};
