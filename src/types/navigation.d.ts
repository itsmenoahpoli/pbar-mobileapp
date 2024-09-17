export type StackParamsList = {
  WELCOME_SCREEN: undefined;
  SIGNUP_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
  REQUEST_OTP_SCREEN: undefined;
  VERIFY_OTP_SCREEN: undefined;
  HOME_SCREEN: undefined;
  ALL_ROUTES_SCREEN: undefined;
  VIEW_ROUTE_SCREEN: {
    routeNo: string;
  };
  MY_TICKETS_SCREEN: undefined;
  MY_PAYMENTS_SCREEN: undefined;
  MY_PROFILE_SCREEN: undefined;
  BOOK_TICKETS_SCREEN: {
    routeNo: string;
  };
  VIEW_BOOKING_SCREEN: {
    bookingNo: string;
  };
};
