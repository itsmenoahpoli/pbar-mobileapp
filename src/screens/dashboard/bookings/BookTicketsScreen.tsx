import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Linking,
  ActivityIndicator,
} from "react-native";
import { useFetch, useAuth } from "@/hooks";
import { BusRoutesService, BookingService } from "@/services";
import { BaseLayout } from "@/layouts";
import { BusRouteInformation } from "@/components/domains";
import { EmptyData, LoadingData } from "@/components/shared";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "BOOK_TICKETS_SCREEN">;
  route: RouteProp<StackParamsList, "BOOK_TICKETS_SCREEN">;
};

type FormPayload = {
  ticketQuantity: number;
  busRouteId?: number;
  busRouteTicketId?: number;
  userId: number;
};

export const BookTicketsScreen: React.FC<Props> = (props) => {
  const { routeNo } = props.route.params;
  const { user } = useAuth();

  const { isLoading, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo(routeNo),
  });

  const [loading, setLoading] = React.useState<boolean>(false);
  const [processedPay, setProcessedPay] = React.useState<boolean>(false);

  const [formPayload, setFormPayload] = React.useState<FormPayload>({
    userId: +user.id,
    busRouteId: undefined,
    busRouteTicketId: undefined,
    ticketQuantity: 0,
  });

  const getSubtotal = () => {
    // @ts-ignore
    const total = formPayload.ticketQuantity * data?.busRouteTickets[0].price;

    return total.toFixed(2);
  };

  const handleTicketQuantity = (type: "increment" | "decrement") => {
    if (type === "decrement") {
      if (
        formPayload.ticketQuantity === 0 ||
        formPayload.ticketQuantity === data?.busRouteTickets.length
      )
        return;

      setFormPayload({ ...formPayload, ticketQuantity: formPayload.ticketQuantity - 1 });
    } else {
      setFormPayload({ ...formPayload, ticketQuantity: formPayload.ticketQuantity + 1 });
    }
  };

  const handleProceedPay = async () => {
    setLoading(true);

    // @ts-ignore
    return await BookingService.createBooking(formPayload, setLoading)
      .then((result) => {
        Linking.openURL(result.checkout_url);
        setProcessedPay(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckBooking = () => {
    console.log("");
  };

  React.useEffect(() => {
    if (data) {
      setFormPayload({
        ...formPayload,
        busRouteId: data.id,
        busRouteTicketId: data.busRouteTickets[0].id,
      });
    }
  }, [data]);

  return (
    <BaseLayout headerTitle="TICKETS BOOKING" hasFooter hasHeader>
      {isLoading ? (
        <LoadingData />
      ) : data ? (
        <View className="flex-1 relative">
          <BusRouteInformation busRoute={data} />

          <View className="flex-1 px-3">
            <View className="w-full bg-white rounded-lg">
              <View className="border border-gray-100 p-2" style={{ borderWidth: 1 }}>
                <Text className="text-xs font-medium">Buy Tickets</Text>
              </View>
              <View className="flex flex-col space-y-4 p-2">
                <View className="flex flex-row">
                  <Pressable
                    className="flex basis-1/4 justify-center items-center bg-red-700 border border-gray-200 border-r-0 rounded-tl-lg rounded-bl-lg"
                    onPress={() => handleTicketQuantity("decrement")}
                  >
                    <Text className="text-2xl text-white">-</Text>
                  </Pressable>
                  <TextInput
                    value={formPayload.ticketQuantity.toString()}
                    className="flex basis-2/4 h-[45px] text-center border border-gray-200"
                    returnKeyType="done"
                    keyboardType="numeric"
                  />
                  <Pressable
                    className="flex basis-1/4 justify-center items-center bg-red-700 border border-gray-200 border-l-0 rounded-tr-lg rounded-br-lg"
                    onPress={() => handleTicketQuantity("increment")}
                  >
                    <Text className="text-2xl text-white">+</Text>
                  </Pressable>
                </View>

                <View className="flex flex-row justify-between">
                  <View className="flex flex-col">
                    <Text className="text-gray-500 font-medium mb-1">
                      Single Ticket Price
                    </Text>
                    <Text>₱ {data?.busRouteTickets[0].price.toFixed(2)}</Text>
                  </View>

                  <View className="flex flex-col">
                    <Text className="text-gray-500 font-medium mb-1">Subtotal</Text>
                    <Text>₱ {getSubtotal()}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="px-3 bottom-4">
            {!processedPay ? (
              <Pressable
                className="w-full h-[40px] bg-green-600 justify-center items-center rounded-lg"
                onPress={handleProceedPay}
              >
                {loading && !processedPay ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white font-bold">
                    PROCEED TO PAY (via Paymongo)
                  </Text>
                )}
              </Pressable>
            ) : (
              <Pressable
                className="w-full h-[40px] bg-yellow-600 justify-center items-center rounded-lg"
                onPress={handleCheckBooking}
              >
                <Text className="text-white font-bold">VIEW TICKET BOOKING STATUS</Text>
              </Pressable>
            )}
          </View>
        </View>
      ) : (
        <EmptyData />
      )}
    </BaseLayout>
  );
};
