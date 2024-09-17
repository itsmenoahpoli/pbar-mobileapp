import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";
import { useFetch } from "@/hooks";
import { BaseLayout } from "@/layouts";
import { LoadingData } from "@/components/shared";
import { BusRoutesService } from "@/services";
import type { StackParamsList } from "@/types/navigation";
import { BusRouteInformation } from "@/components/domains";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
  route: RouteProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
};

export const ViewRouteScreen: React.FC<Props> = (props) => {
  const { routeNo } = props.route.params;

  const { isLoading, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo(routeNo),
  });

  return (
    <BaseLayout headerTitle="VIEW ROUTE INFORMATION" hasFooter hasHeader>
      {isLoading ? (
        <LoadingData />
      ) : (
        <BusRouteInformation busRoute={data!} hasBuyButton />
      )}
    </BaseLayout>
  );
};
