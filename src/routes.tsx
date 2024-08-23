import { RouteObject } from "react-router-dom";

import Home from "./pages/Home";

import Articles from "./pages/Articles";
import Galery from "./pages/Galery";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/artigos",
    element: <Articles />,
  },
  {
    path: "/galeria",
    element: <Galery />,
  },
];
