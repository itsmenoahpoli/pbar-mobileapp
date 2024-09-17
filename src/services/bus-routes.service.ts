import httpClient from "@/api";
import { Toast } from "react-native-toast-alert";
import type { BusRoute } from "@/types/models";

export const BusRoutesService = {
  getRoutesList: async function () {
    return await httpClient
      .get<BusRoute[]>("/bus-routes")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);

        Toast.error("Failed to fetch bus routes list");
      });
  },

  getRouteByRouteNo: async function (routeNo: string) {
    return await httpClient
      .get<BusRoute>("/bus-routes/route-no/" + routeNo)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);

        Toast.error("Failed to fetch bus routes list");
      });
  },
};
