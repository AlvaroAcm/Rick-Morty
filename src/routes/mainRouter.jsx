import React, { Children } from "react";
import { createHashRouter } from "react-router-dom";
import Location from "../components/Location/Location"
import Nav from "../components/Nav/Nav";
import App from "../App";
import { Episodes, Home } from "../components";

const routerConfig = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/characters",
        element: <Home />,
      },
      {
        path: "/locations",
        element: <Location/>,
      },
      {
        path: "/episodes",
        element: <Episodes/>,
      },
    ],
  },
];

const router = createHashRouter(routerConfig);

export default router;
