import React from "react";
import { Layout } from "./main.styles";

type MainLayoutProps = {
  children: React.ReactChild;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <Layout>{children}</Layout>
);

export default MainLayout;
