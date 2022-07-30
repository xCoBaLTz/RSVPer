import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "react-router";

const root = createRoot(document.getElementById("root") as HTMLElement);

const customTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#3b0746",
      },
      secondary: {
        main: "#d6b138",
      },
    },
  })
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          {/*<Routes>*/}
          {/*  <Route path="/*" element={} />*/}
          {/*</Routes>*/}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
