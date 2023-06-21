import { Navigate } from "react-router-dom";
import { lazy } from "react";

const ModernSearchPage = lazy(() => import("./ModernSearchPage"));

const searchPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "pages/search",
      children: [
        {
          path: "",
          element: <Navigate to="modern" />,
        },
        {
          path: "modern",
          element: <ModernSearchPage />,
        },
      ],
    },
  ],
};

export default searchPagesConfig;
