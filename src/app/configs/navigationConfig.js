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
    ],
  },
  {
    id: "pages",
    title: "Pages",
    type: "group",
    icon: "heroicons-outline:document",
    children: [
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
