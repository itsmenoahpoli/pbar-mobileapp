import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";

export const RequestOtpForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigate } = useNavigation();

  const [loading, setLoading] = React.useState<boolean>(false);

  const goToVerifyOtp = () => {
    // @ts-ignore
    return navigate("VERIFY_OTP_SCREEN");
  };

  return (
    <View className="flex flex-col gap-y-4 mt-1">
      <View className="flex flex-col gap-y-1">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="E-mail Address"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.email && <Text className="text-xs text-red-700">Field is required</Text>}

        <Text className="text-xs text-gray-500">
          A one-time-passcode and instructions how to reset your password will be sent to
          the e-mail address you provide above
        </Text>
      </View>

      <BaseButton
        title={loading ? "..." : "SEND OTP"}
        onPress={goToVerifyOtp}
        classNames={loading ? "bg-red-400" : ""}
        disabled={loading}
      />
    </View>
  );
};
