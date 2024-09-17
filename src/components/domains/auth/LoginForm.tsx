import React from "react";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";
import { AuthService } from "@/services";

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const { navigate } = useNavigation();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleLogin = handleSubmit(async (formData) => {
    setLoading(true);

    // @ts-ignore
    return AuthService.loginAccount(formData, setLoading);
  });

  // const handleToggleCheckbox = () => {
  //   setChecked((prevState) => !prevState);
  // };

  const goToRequestOtp = () => {
    // @ts-ignore
    return navigate("REQUEST_OTP_SCREEN");
  };

  const goToSignUp = () => {
    // @ts-ignore
    return navigate("SIGNUP_SCREEN");
  };

  return (
    <View className="flex flex-col gap-y-4">
      <View className="flex flex-col gap-y-1">
        <Text className="font-bold mb-5">Please input and provide your details</Text>
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
      </View>
      <View className="flex flex-col gap-y-1">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              secureTextEntry={true}
              placeholder="Password"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.password && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-x-2 items-center">
          {/* <Checkbox
            className="border border-gray-400 rounded h-[15px] w-[15px]"
            value={checked}
            onValueChange={setChecked}
          />
          <Text
            className="text-xs text-gray-600 font-medium"
            onPress={handleToggleCheckbox}
          >
            Remember Me
          </Text> */}
        </View>

        <Pressable onPress={goToRequestOtp}>
          <Text className="text-xs text-blue-700 font-bold">Forgot your password?</Text>
        </Pressable>
      </View>

      <BaseButton
        title={loading ? "..." : "LOG IN"}
        onPress={handleLogin}
        classNames={loading ? "bg-red-400" : ""}
        disabled={loading}
      />

      <Text className="text-center" onPress={goToSignUp}>
        Don't have an account? <Text className="text-blue-700 underline">Sign Up</Text>
      </Text>
    </View>
  );
};
