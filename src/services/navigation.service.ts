import { createNavigationContainerRef } from "@react-navigation/native";
import { ParamListBase, NavigationAction } from "@react-navigation/routers";

export const NavigationService = {
  navigationRef: createNavigationContainerRef<ParamListBase>(),

  navigate: function (name: string, params?: object) {
    if (this.navigationRef.isReady()) {
      this.navigationRef.navigate(name, params);
    }
  },

  dispatch: function (action: NavigationAction) {
    if (this.navigationRef.isReady()) {
      this.navigationRef.dispatch(action);
    }
  },
};
