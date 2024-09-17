import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { SignupForm } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "SIGNUP_SCREEN">;
};

export const SignupScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="CREATE ACCOUNT" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 pt-3 px-5">
        <SignupForm />
      </ScrollView>
    </BaseLayout>
  );
};
