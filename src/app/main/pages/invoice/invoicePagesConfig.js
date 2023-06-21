import { Navigate } from "react-router-dom";
import ModernInvoicePage from "./printable/ModernInvoicePage";

const invoicePagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "pages/invoice/printable",
      children: [
        {
          path: "",
          element: <Navigate to="modern" />,
        },
        {
          path: "modern",
          element: <ModernInvoicePage />,
        },
      ],
    },
  ],
};

export default invoicePagesConfig;
