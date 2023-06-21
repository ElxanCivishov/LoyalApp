import { lazy } from "react";
import { Navigate } from "react-router-dom";

const ClassicComingSoonPage = lazy(() => import("./ClassicComingSoonPage"));

const comingSoonPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "pages/coming-soon",
      children: [
        {
          path: "",
          element: <Navigate to="classic" />,
        },
        {
          path: "classic",
          element: <ClassicComingSoonPage />,
        },
      ],
    },
  ],
};

export default comingSoonPagesConfig;
