import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/Home/index.js" /*webpackChunkName: "home" */)
    ),
    private: false,
    restricted: false,
    navMenu: true,
  },
  {
    path: "/about",
    label: "About",
    exact: true,
    component: lazy(() =>
      import("../views/About/index.js" /*webpackChunkName: "about" */)
    ),
    private: false,
    restricted: false,
    navMenu: true,
  },
  {
    path: "/signup",
    label: "Signup",
    exact: true,
    component: lazy(() =>
      import("../views/Signup/index.js" /*webpackChunkName: "signup" */)
    ),
    private: false,
    restricted: true,
    navMenu: false,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import("../views/Login/index.js" /*webpackChunkName: "login" */)
    ),
    private: false,
    restricted: true,
    navMenu: false,
  },
  {
    path: "/phonebook/settings",
    label: "Settings",
    exact: true,
    component: lazy(() =>
      import("../views/UserSettings/index.js" /*webpackChunkName: "settings" */)
    ),
    private: true,
    restricted: false,
    navMenu: true,
  },
  {
    path: "/phonebook/profile",
    label: "Profile",
    exact: true,
    component: lazy(() =>
      import("../views/Profile/index.js" /*webpackChunkName: "profile" */)
    ),
    private: true,
    restricted: false,
    navMenu: true,
  },
  {
    path: "/phonebook",
    label: "Phonebook",
    exact: true,
    component: lazy(() =>
      import("../views/Phonebook/index.js" /*webpackChunkName: "phonebook" */)
    ),
    private: true,
    restricted: false,
    navMenu: false,
  },
];
