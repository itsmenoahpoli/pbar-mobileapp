import React from "react";
import RNDateTimePicker, {
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { View, Text, Pressable, TextInput } from "react-native";

export const BusSearchForm: React.FC = () => {
  const [date, setDate] = React.useState<Date>(new Date());

  const handleChangeDate = (event: DateTimePickerEvent) => {
    const {
      nativeEvent: { timestamp },
    } = event;

    console.log(timestamp);
  };

  return (
    <View className="w-full bg-white border border-gray-200 rounded-lg p-5">
      <Text className="font-medium mb-3">Where do you wanna go?</Text>
      <TextInput
        className="w-full h-[40px] text-xs border border-gray-200 rounded-lg px-3 mb-2"
        placeholder="FROM"
      />
      <TextInput
        className="w-full h-[40px] text-xs border border-gray-200 rounded-lg px-3 mb-2"
        placeholder="TO"
      />
      <View className="w-full border border-gray-200 rounded-lg relative p-1 mb-2">
        <Text className="text-xs text-gray-400 absolute top-3 left-3">SELECT DATE</Text>
        <RNDateTimePicker mode="date" value={date} onChange={handleChangeDate} />
      </View>

      <Pressable className="w-full h-[40px] bg-red-700 rounded-lg justify-center items-center">
        <Text className="text-white font-medium">Search Bus</Text>
      </Pressable>
    </View>
  );
};
