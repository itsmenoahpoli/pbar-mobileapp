import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { VerifyOtpForm } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VERIFY_OTP_SCREEN">;
};

export const VerifyOtpScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="VERIFY OTP" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <VerifyOtpForm />
      </ScrollView>
    </BaseLayout>
  );
};
