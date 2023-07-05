import i18next from "i18next";

import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import authRoles from "../auth/authRoles";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "dashboards",
    title: "Dashboards",
    subtitle: "Unique dashboard designs",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "DASHBOARDS",
    children: [
      {
        id: "dashboards.project",
        title: "Project",
        type: "item",
        icon: "heroicons-outline:clipboard-check",
        url: "/dashboards/project",
      },
      {
        id: "dashboards.analytics",
        title: "Analytics",
        type: "item",
        icon: "heroicons-outline:chart-pie",
        url: "/dashboards/analytics",
      },
      {
        id: "dashboards.finance",
        title: "Finance",
        type: "item",
        icon: "heroicons-outline:cash",
        url: "/dashboards/finance",
      },
      {
        id: "dashboards.user",
        title: "Users",
        type: "item",
        icon: "heroicons-outline:cash",
        url: "/dashboards/users",
      },
    ],
  },
  {
    id: "apps",
    title: "Applications",
    subtitle: "Custom made application designs",
    type: "group",
    icon: "heroicons-outline:cube",
    translate: "APPLICATIONS",
    children: [
      {
        id: "apps.chat",
        title: "Chat",
        type: "item",
        icon: "heroicons-outline:chat-alt",
        url: "/apps/chat",
        translate: "CHAT",
      },
      {
        id: "apps.contacts",
        title: "Contacts",
        type: "item",
        icon: "heroicons-outline:user-group",
        url: "/apps/contacts",
        translate: "CONTACTS",
      },
      {
        id: "apps.ecommerce",
        title: "ECommerce",
        type: "collapse",
        icon: "heroicons-outline:shopping-cart",
        translate: "ECOMMERCE",
        children: [
          {
            id: "e-commerce-products",
            title: "Products",
            type: "item",
            url: "apps/e-commerce/products",
            end: true,
          },
          {
            id: "e-commerce-product-detail",
            title: "Product Detail",
            type: "item",
            url: "apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print",
          },
          {
            id: "e-commerce-new-product",
            title: "New Product",
            type: "item",
            url: "apps/e-commerce/products/new",
          },
          {
            id: "e-commerce-orders",
            title: "Orders",
            type: "item",
            url: "apps/e-commerce/orders",
            end: true,
          },
          {
            id: "e-commerce-order-detail",
            title: "Order Detail",
            type: "item",
            url: "apps/e-commerce/orders/1",
          },
        ],
      },

      {
        id: "apps.help-center",
        title: "Help Center",
        type: "collapse",
        icon: "heroicons-outline:support",
        url: "/apps/help-center",
        children: [
          {
            id: "apps.help-center.home",
            title: "Home",
            type: "item",
            url: "/apps/help-center",
            end: true,
          },
          {
            id: "apps.help-center.faqs",
            title: "FAQs",
            type: "item",
            url: "/apps/help-center/faqs",
          },
          {
            id: "apps.help-center.guides",
            title: "Guides",
            type: "item",
            url: "/apps/help-center/guides",
          },
          {
            id: "apps.help-center.support",
            title: "Support",
            type: "item",
            url: "/apps/help-center/support",
          },
        ],
      },
      // {
      //   id: "apps.mailbox",
      //   title: "Mailbox",
      //   type: "item",
      //   icon: "heroicons-outline:mail",
      //   url: "/apps/mailbox",
      //   translate: "MAIL",
      //   badge: {
      //     title: "27",
      //     classes: "px-8 bg-pink-600 text-white rounded-full",
      //   },
      // },

      {
        id: "apps.profile",
        title: "Profile",
        type: "item",
        icon: "heroicons-outline:user-circle",
        url: "/apps/profile",
      },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    subtitle: "Custom made page designs",
    type: "group",
    icon: "heroicons-outline:document",
    children: [
      {
        id: "pages.activities",
        title: "Activities",
        type: "item",
        icon: "heroicons-outline:menu-alt-2",
        url: "/pages/activities",
      },
      {
        id: "pages.authentication",
        title: "Authentication",
        type: "collapse",
        icon: "heroicons-outline:lock-closed",
        children: [
          {
            id: "pages.authentication.sign-in",
            title: "Sign in",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.sign-in.modern",
                title: "Modern",
                type: "item",
                url: "/pages/authentication/sign-in/modern",
              },
            ],
          },
          {
            id: "pages.authentication.sign-up",
            title: "Sign up",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.sign-up.modern",
                title: "Modern",
                type: "item",
                url: "/pages/authentication/sign-up/modern",
              },
            ],
          },
          {
            id: "pages.authentication.sign-out",
            title: "Sign out",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.sign-out.classic",
                title: "Classic",
                type: "item",
                url: "/pages/authentication/sign-out/classic",
              },
            ],
          },
          {
            id: "pages.authentication.forgot-password",
            title: "Forgot password",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.forgot-password.classic",
                title: "Classic",
                type: "item",
                url: "/pages/authentication/forgot-password/classic",
              },
            ],
          },
          {
            id: "pages.authentication.reset-password",
            title: "Reset password",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.reset-password.modern",
                title: "Modern",
                type: "item",
                url: "/pages/authentication/reset-password/modern",
              },
            ],
          },
          {
            id: "pages.authentication.unlock-session",
            title: "Unlock session",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.unlock-session.classic",
                title: "Classic",
                type: "item",
                url: "/pages/authentication/unlock-session/classic",
              },
            ],
          },
          {
            id: "pages.authentication.confirmation-required",
            title: "Confirmation required",
            type: "collapse",
            children: [
              {
                id: "pages.authentication.confirmation-required.classic",
                title: "Classic",
                type: "item",
                url: "/pages/authentication/confirmation-required/classic",
              },
            ],
          },
        ],
      },
      {
        id: "pages.coming-soon",
        title: "Coming Soon",
        type: "collapse",
        icon: "heroicons-outline:clock",
        url: "/pages/coming-soon",
        children: [
          {
            id: "pages.coming-soon.classic",
            title: "Classic",
            type: "item",
            url: "/pages/coming-soon/classic",
          },
        ],
      },
      {
        id: "pages.error",
        title: "Error",
        type: "collapse",
        icon: "heroicons-outline:exclamation-circle",
        children: [
          {
            id: "pages.error.404",
            title: "404",
            type: "item",
            url: "/pages/error/404",
          },
          {
            id: "pages.error.500",
            title: "500",
            type: "item",
            url: "/pages/error/500",
          },
        ],
      },
      {
        id: "pages.invoice",
        title: "Invoice",
        type: "collapse",
        icon: "heroicons-outline:calculator",
        children: [
          {
            id: "pages.invoice.printable",
            title: "Printable",
            type: "collapse",
            children: [
              {
                id: "pages.invoice.printable.modern",
                title: "Modern",
                type: "item",
                url: "/pages/invoice/printable/modern",
              },
            ],
          },
        ],
      },

      {
        id: "pages.pricing",
        title: "Pricing",
        type: "collapse",
        icon: "heroicons-outline:cash",
        children: [
          {
            id: "pages.pricing.modern",
            title: "Modern",
            type: "item",
            url: "/pages/pricing/modern",
          },
          {
            id: "pages.pricing.single",
            title: "Single",
            type: "item",
            url: "/pages/pricing/single",
          },
          {
            id: "pages.pricing.table",
            title: "Table",
            type: "item",
            url: "/pages/pricing/table",
          },
        ],
      },
      {
        id: "pages.search",
        title: "Search",
        type: "collapse",
        icon: "search",
        children: [
          {
            id: "pages.search.modern-search",
            title: "Modern Search",
            type: "item",
            url: "pages/search/modern",
          },
        ],
      },
    ],
  },
  {
    id: "user-interface",
    title: "User Interface",
    subtitle: "Building blocks of the UI & UX",
    type: "group",
    icon: "heroicons-outline:collection",
    children: [
      {
        id: "user-interface.icons",
        title: "Icons",
        type: "collapse",
        icon: "heroicons-outline:lightning-bolt",
        children: [
          {
            id: "user-interface.icons.heroicons-outline",
            title: "Heroicons Outline",
            type: "item",
            url: "/ui/icons/heroicons/outline",
          },
          {
            id: "user-interface.icons.heroicons-solid",
            title: "Heroicons Solid",
            type: "item",
            url: "/ui/icons/heroicons/solid",
          },
          {
            id: "user-interface.icons.material-twotone",
            title: "Material Twotone",
            type: "item",
            url: "/ui/icons/material/twotone",
          },
          {
            id: "user-interface.icons.material-outline",
            title: "Material Outline",
            type: "item",
            url: "/ui/icons/material/outline",
          },
          {
            id: "user-interface.icons.material-solid",
            title: "Material Solid",
            type: "item",
            url: "/ui/icons/material/solid",
          },
          {
            id: "user-interface.icons.feather",
            title: "Feather",
            type: "item",
            url: "/ui/icons/feather",
          },
        ],
      },
    ],
  },
  {
    id: "divider-1",
    type: "divider",
  },
  {
    id: "auth",
    title: "Auth",
    type: "group",
    icon: "verified_user",
    children: [
      {
        id: "sign-in",
        title: "Sign in",
        type: "item",
        url: "sign-in",
        auth: authRoles.onlyGuest,
        icon: "lock",
      },
      {
        id: "register",
        title: "Register",
        type: "item",
        url: "register",
        auth: authRoles.onlyGuest,
        icon: "person_add",
      },
      {
        id: "sign-out",
        title: "Sign out",
        type: "item",
        auth: authRoles.user,
        url: "sign-out",
        icon: "exit_to_app",
      },
    ],
  },
  {
    type: "divider",
    id: "divider-2",
  },
];

export default navigationConfig;
