import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { PageHeader } from "@/components/shared";
import { BottomNav } from "@/components/navigations";
import { useAuth } from "@/hooks";
import { Toast } from "react-native-toast-alert";

export const BaseLayout: React.FC<{
  headerTitle?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  hideBack?: boolean;
  authGuard?: boolean;
  children?: React.ReactNode;
  pageHeaderChildren?: React.ReactNode;
}> = (props) => {
  const { isAuthenticated } = useAuth();
  const { navigate } = useNavigation();

  React.useEffect(() => {
    if (props.authGuard) {
      if (!isAuthenticated) {
        Toast.error("You must login");

        // @ts-ignore
        navigate("LOGIN_SCREEN");
      }
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]} className="bg-red-700" />
      <SafeAreaView edges={["left", "right"]} className="flex-1 bg-white relativ">
        {props.hasHeader && props.headerTitle ? (
          <PageHeader
            title={props.headerTitle}
            hideBack={props.hideBack}
            children={props.pageHeaderChildren ? props.pageHeaderChildren : null}
          />
        ) : null}

        <View className="flex-1 bg-slate-100 relative">{props.children}</View>

        {props.hasFooter ? <BottomNav navigate={navigate} /> : null}
      </SafeAreaView>
      <SafeAreaView edges={["bottom"]} className="bg-white" />
    </SafeAreaProvider>
  );
};
