import React from "react";
import moment from "moment";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";

import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import type { BusRoute } from "@/types/models";
import { LoadingData } from "@/components/shared";

export const BusRouteInformation: React.FC<{
  busRoute: BusRoute;
  hasBuyButton?: boolean;
  hideTicketPricing?: boolean;
}> = (props) => {
  const { navigate } = useNavigation();

  const formatDate = (date: string | undefined) => {
    return moment(date).format("MMMM DD, YYYY");
  };

  const handleViewInMap = (mapPinUrl: string | null) => {
    if (!mapPinUrl) return;

    return Linking.openURL(mapPinUrl);
  };

  const handleBuyTicket = () => {
    // @ts-ignore
    return navigate("BOOK_TICKETS_SCREEN", { routeNo: props.busRoute.routeNo });
  };

  if (!props.busRoute) {
    return <LoadingData />;
  }

  return (
    <View className="flex-1 relative pt-3">
      <View className="flex flex-col space-y-5 px-3">
        <View className="w-full bg-white rounded-lg">
          <View className="border-gray-100 p-2" style={{ borderWidth: 1 }}>
            <Text className="text-xs font-medium">Bus Route Details</Text>
          </View>
          <View className="flex flex-col space-y-3 p-2">
            <View className="flex flex-row justify-between">
              <Text className="text-xs text-gray-600">
                {formatDate(props.busRoute.departureDate)}
              </Text>
              <Text className="text-xs text-gray-600">
                {props.busRoute.departureTime}
              </Text>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="text-xl text-orange-400 font-bold">
                  {props.busRoute.routeFrom}
                </Text>
                {props.busRoute.routeFromPin ? (
                  <Pressable onPress={() => handleViewInMap(props.busRoute.routeFromPin)}>
                    <Text className="text-[10px] text-blue-700 underline underline-offset-4">
                      View in map
                    </Text>
                  </Pressable>
                ) : null}
              </View>
              <FontAwesome name="long-arrow-right" size={18} color="orange" />
              <View>
                <Text className="text-xl text-orange-400 font-bold">
                  {props.busRoute.routeTo}
                </Text>
                {props.busRoute.routeFromPin ? (
                  <Pressable onPress={() => handleViewInMap(props.busRoute.routeToPin)}>
                    <Text className="text-[10px] text-blue-700 underline underline-offset-4">
                      View in map
                    </Text>
                  </Pressable>
                ) : null}
              </View>
            </View>
            <View className="flex flex-row justify-between items-center">
              <Text className="text-xs text-gray-700">CUL TRANSPORT TERMINAL (EDSA)</Text>
            </View>
          </View>
        </View>

        {!props.hideTicketPricing ? (
          <View className="w-full bg-white rounded-lg">
            <View className="border border-gray-100 p-2" style={{ borderWidth: 1 }}>
              <Text className="text-xs font-medium">Ticket Pricing</Text>
            </View>
            <View className="p-2">
              {props.busRoute.busRouteTickets.length
                ? props.busRoute.busRouteTickets.map((ticket) => (
                    <View
                      className="flex flex-row items-center space-x-1"
                      key={`bus-ticket-${ticket.type}`}
                    >
                      <Text>₱ {ticket.price.toFixed(2)} </Text>
                      <View className="bg-green-500 rounded-md p-1 mr-1">
                        <Text className="text-[10px] text-white font-bold uppercase">
                          {ticket.type}
                        </Text>
                      </View>
                      <Text className="text-xs text-gray-700">
                        ({ticket.quantity} available)
                      </Text>
                    </View>
                  ))
                : null}
            </View>
          </View>
        ) : null}

        <Text className="text-[10px] text-gray-500">
          Route ID: {props.busRoute.routeNo}
        </Text>
      </View>

      {props.hasBuyButton ? (
        <View className="w-full absolute bottom-3 px-2">
          <Pressable
            className="w-full h-[40px] bg-blue-600 justify-center items-center rounded-lg"
            onPress={handleBuyTicket}
          >
            <Text className="text-white font-bold">BOOK AND BUY TICKETS</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};
