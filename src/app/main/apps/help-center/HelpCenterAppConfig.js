import HelpCenterHome from "./home/HelpCenterHome";
import HelpCenterFaqs from "./faqs/HelpCenterFaqs";
import HelpCenterSupport from "./support/HelpCenterSupport";
import HelpCenterApp from "./HelpCenterApp";

const HelpCenterAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "apps/help-center",
      element: <HelpCenterApp />,
      children: [
        {
          path: "",
          element: <HelpCenterHome />,
        },
        {
          path: "faqs",
          element: <HelpCenterFaqs />,
        },

        {
          path: "support",
          element: <HelpCenterSupport />,
        },
      ],
    },
  ],
};

export default HelpCenterAppConfig;
