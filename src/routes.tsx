import { RouteObject } from "react-router-dom";

import Home from "./pages/Home";

import Articles from "./pages/Articles";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
];
