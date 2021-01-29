import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/toolkit";
import AppRoutes from "./routing/app-routes";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./elements/mainTheme.styles";
import "./App.less";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
