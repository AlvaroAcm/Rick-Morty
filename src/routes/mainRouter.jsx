import React, { Children } from "react";
import { createHashRouter } from "react-router-dom";
import Profile from "../components/Profile";
import Nav from "../components/Nav/Nav";
import App from "../App";
import { Home } from "../components";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/characters",
        element: <Home />,
      },
      {
        path: "/locations",
        element: <Profile />,
      },
    ],
  },
];

const router = createHashRouter(routerConfig);

export default router;
