import themesConfig from "app/configs/themesConfig";
import i18n from "../../i18n";

const settingsConfig = {
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || "ltr",
  theme: {
    main: themesConfig.default,
    navbar: themesConfig.defaultDark,
    toolbar: themesConfig.default,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user']
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: ["admin"],
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: "/",
};

export default settingsConfig;
