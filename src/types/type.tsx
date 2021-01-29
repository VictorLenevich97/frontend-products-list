import React from "react";

export type MainLayoutRoute = {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  exact: boolean;
};
