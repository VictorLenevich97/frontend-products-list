import React from "react";
import { MainLayoutRoute } from "../types/type";

 const PageMain = React.lazy(() => import("../pages/main/main"));

export const MAIN_LAYOUTS_ROUTES: MainLayoutRoute[] = [
  {
    path: "/",
    component: PageMain,
    exact: true,
  },
];
