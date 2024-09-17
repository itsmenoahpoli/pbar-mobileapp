import React from "react";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { Toast } from "react-native-toast-alert";
import { BaseInput, BaseButton } from "@/components/base";
import { AuthService } from "@/services";

export const SignupForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigate } = useNavigation();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleSignup = handleSubmit(async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      return Toast.error("Passwords must match");
    }

    setLoading(true);

    return await AuthService.signupAccount(formData, setLoading);
  });

  const handleToggleCheckbox = () => {
    setChecked((prevState) => !prevState);
  };

  const goToSignUp = () => {
    // @ts-ignore
    return navigate("LOGIN_SCREEN");
  };

  return (
    <View className="flex flex-col gap-y-4">
      <View className="flex flex-col gap-y-1">
        <Text className="font-bold mb-5">Please input and provide your details</Text>

        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="First Name"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.firstName && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

      <View className="flex flex-col gap-y-1">
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="Last Name"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.lastName && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

      <View className="flex flex-col gap-y-1">
        <Controller
          name="contactNo"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="Phone Number"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.contactNo && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

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
      </View>

      <View className="flex flex-col gap-y-1">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="Password"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              textContentType="oneTimeCode"
              secureTextEntry
            />
          )}
        />
        {errors.password && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

      <View className="flex flex-col gap-y-1">
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="Re-type Password"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              textContentType="oneTimeCode"
              secureTextEntry
            />
          )}
        />
        {errors.confirmPassword && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

      <View className="flex flex-row gap-x-2 items-center">
        <Checkbox
          className="border border-gray-400 rounded h-[15px] w-[15px]"
          value={checked}
          onValueChange={setChecked}
        />
        <Text
          className="text-[12px] text-gray-600 font-medium"
          onPress={handleToggleCheckbox}
        >
          By checking, I agree to the{" "}
          <Text className="text-blue-700 underline">Policy</Text> and &nbsp;
          <Text className="text-blue-700 underline">Terms & Condition</Text>
        </Text>
      </View>

      <BaseButton
        title={loading ? "..." : "Sign Up"}
        onPress={handleSignup}
        classNames={loading || !checked ? "bg-red-400" : ""}
        disabled={loading || !checked}
      />

      <Text className="text-center" onPress={goToSignUp}>
        Already have an account? <Text className="text-blue-700 underline">Log In</Text>
      </Text>
    </View>
  );
};
