import React from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";

export const BaseInput: React.FC<
  { classNames?: string; labelClassnames?: string; label?: string } & TextInputProps
> = (props) => {
  const classStr = `w-full h-[50px] bg-slate-100 text-xs rounded-lg border border-black px-3 ${props.classNames}`;
  const labelClassStr = `text-xs text-white font-medium mb-1 ${props.labelClassnames}`;

  return (
    <View>
      {props.label ? <Text className={labelClassStr}>{props.label}</Text> : null}
      <TextInput
        {...props}
        autoCapitalize="none"
        placeholderTextColor="#999"
        className={classStr}
      />
    </View>
  );
};
