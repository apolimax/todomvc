import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TodosContextProvider from "./context/todosContext";
import GlobalStyle from "./styles/Global";
/* import { ThemeProvider } from "styled-components";
import theme from "./styles/theme"; */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <TodosContextProvider>
        <GlobalStyle />
        <App />
      </TodosContextProvider>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
