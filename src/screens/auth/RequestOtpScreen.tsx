import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { RequestOtpForm } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "REQUEST_OTP_SCREEN">;
};

export const RequestOtpScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="REQUEST OTP" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <RequestOtpForm />
      </ScrollView>
    </BaseLayout>
  );
};
