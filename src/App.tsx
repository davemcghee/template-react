import React, { ReactElement } from "react";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./muiTheme";
import AppBody from "./AppBody";

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={muiTheme}>
      <AppBody />
    </ThemeProvider>
  );
};

export default App;
