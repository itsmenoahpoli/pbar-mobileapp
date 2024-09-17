import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";

export const VerifyOtpForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <View className="flex flex-col gap-y-4 mt-1">
      <View className="flex flex-col gap-y-1">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="OTP Code"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.email && <Text className="text-xs text-red-700">Field is required</Text>}

        <Text className="text-xs text-gray-500">
          Provide the one-time-passcode sent to your e-mail address
        </Text>
      </View>

      <BaseButton
        title={loading ? "..." : "SEND OTP"}
        classNames={loading ? "bg-red-400" : ""}
        disabled={loading}
      />
    </View>
  );
};
