import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material";

const root = createRoot(document.getElementById("root") as HTMLElement);

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#3b0746",
    },
    secondary: {
      main: "#d1ab42",
    },
  },
});

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
