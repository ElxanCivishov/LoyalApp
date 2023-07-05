import { lazy } from "react";

const UsersDashboardApp = lazy(() => import("./UsersDashboardApp"));

const UsersDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "dashboards/users",
      element: <UsersDashboardApp />,
    },
  ],
};

export default UsersDashboardAppConfig;
