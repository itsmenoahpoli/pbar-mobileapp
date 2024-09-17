import React from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, ScrollView, RefreshControl } from "react-native";
import { useFetch } from "@/hooks";
import { ImageAssets } from "@/assets/index";
import { BusRoutesService } from "@/services";
import { EmptyData, LoadingData } from "@/components/shared";
import type { BusRoute } from "@/types/models";

export const BusRoutesList: React.FC<{ limit?: number; triggerRefetch?: boolean }> = (
  props
) => {
  const { navigate } = useNavigation();

  const { isLoading, data, refetch } = useFetch({
    queryFn: async () => await BusRoutesService.getRoutesList(),
  });

  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const formatDate = (date: string | undefined) => {
    return moment(date).format("MMMM DD, YYYY");
  };

  const goToRoute = (routeNo: string) => {
    // @ts-ignore
    return navigate("VIEW_ROUTE_SCREEN", { routeNo });
  };

  const handleRefetch = () => {
    setRefreshing(true);
    refetch();
  };

  React.useEffect(() => {
    if (props.triggerRefetch) {
      refetch();
    }
  }, [props.triggerRefetch]);

  if (isLoading) return <LoadingData />;

  if (!data || !data?.length) return <EmptyData />;

  return (
    <ScrollView
      className="flex-1 pb-10"
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefetch} />
      }
    >
      <View className="flex flex-col gap-y-2">
        {data.map((route: BusRoute) => (
          <Pressable
            className="relative"
            key={`bus-route-${route.routeNo}`}
            onPress={() => goToRoute(route.routeNo)}
          >
            <View className="min-h-[60px] bg-white rounded-lg border border-gray-100 p-3">
              {route.busRouteTickets.length
                ? route.busRouteTickets.map((ticket) => (
                    <View className="items-end mb-2" key={`bus-ticket-${ticket.type}`}>
                      <Text className="text-gray-800 font-bold">
                        ₱ {ticket.price.toFixed(2)}{" "}
                      </Text>
                    </View>
                  ))
                : null}
              <View className="flex flex-row justify-between">
                <View className="flex basis-1/4">
                  <Image
                    source={ImageAssets.busLogo}
                    resizeMethod="scale"
                    resizeMode="contain"
                    className="h-16 w-16"
                  />
                </View>
                <View className="w-full flex flex-row basis-3/4 ">
                  <View className="flex basis-1/2">
                    <Text className="text-[9px] text-red-500 font-bold">FROM</Text>
                    <Text className="text-xs mb-2">{route.routeFrom} </Text>

                    <Text className="text-[9px] text-red-500 font-bold">DEPARTURE</Text>
                    <View className="flex flex-col">
                      <Text className="text-[11px]">
                        {formatDate(route.departureDate)}
                      </Text>
                      <Text className="text-[11px]">{route.departureTime}</Text>
                    </View>
                  </View>
                  <View className="flex items-end basis-1/2">
                    <Text className="text-[9px] text-red-500 font-bold">TO</Text>
                    <Text className="text-xs text-right mb-2">{route.routeTo} </Text>

                    <Text className="text-[9px] text-red-500 font-bold">ARRIVAL</Text>
                    <View className="flex flex-col">
                      <Text className="text-[11px]">{formatDate(route.arrivalDate)}</Text>
                      <Text className="text-[11px]">{route.arrivalTime}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};
