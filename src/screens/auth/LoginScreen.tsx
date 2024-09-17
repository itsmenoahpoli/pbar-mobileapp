import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { LoginForm } from "@/components/domains";
import { useAuth } from "@/hooks";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "LOGIN_SCREEN">;
};

export const LoginScreen: React.FC<Props> = (props) => {
  const { isAuthenticated } = useAuth();

  React.useEffect(() => {
    if (isAuthenticated) {
      props.navigation.navigate("HOME_SCREEN");
    }
  }, []);

  return (
    <BaseLayout headerTitle="LOG IN" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 pt-3 px-5">
        <LoginForm />
      </ScrollView>
    </BaseLayout>
  );
};
