import type { SharedFields } from "./shared";

export type BusStaff = {
  fullname: string;
  contactNo: string;
} & Timestamp;

export type Bus = {
  busDriverId: number;
  busConductorId: number;
  busNo: string;
  plateNo: string;
  type: string;
  busDriver: BusStaff;
  busConductor: BusStaff;
} & Timestamp;

export type BusRoute = {
  busId: number;
  routeNo: string;
  routeFrom: string;
  routeFromPin: string | null;
  routeTo: string;
  routeToPin: string | null;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  status: string;
  bus: any;
  busRouteTickets: BusRouteTicket[];
  busRouteTicketBookings: BusRouteTicketBooking[];
  busRouteTicketBookingTransaction: BusRouteTicketBookingTransaction[];
} & SharedFields;

export type BusRouteTicket = {
  busRouteId: number;
  quantity: number;
  price: number;
  type: "premium" | "ordinary";
  busRoute: BusRoute;
} & SharedFields;

export type BusRouteTicketBooking = {
  busRouteId: number;
  busRouteTicketBookingTransactionId: number;
  bookerAccountName: string;
  busRoute: BusRoute;
} & SharedFields;

export type BusRouteTicketBookingTransaction = {
  busRouteId: number;
  busRouteTicketId: number;
  userId: number;
  userAccountName: string;
  userAccountEmail: string;
  userAccountContact: string;
  paymongoPaymentData: string;
  busRoute: BusRoute;
  busRouteTicket: BusRoute;
  busRouteTicketBookings: BusRouteTicketBooking[];
} & SharedFields;
