import httpClient from "@/api";
import { Toast } from "react-native-toast-alert";

type CreateBookingPayload = {
  busRouteId: number;
  busRouteTicketId: number;
  ticketQuantity: number;
  userId: number;
};

export const BookingService = {
  createBooking: async function (
    data: CreateBookingPayload,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await httpClient
      .post("/bus-route-ticket-booking-transactions", data)
      .then((response) => {
        console.log(response.data);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  },

  getBookingInformationByNo: async function (bookingNo: string) {
    //
  },
};
