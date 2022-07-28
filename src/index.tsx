import React from "react";
import ReactDOM from "react-dom/client";
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
    {/* <ThemeProvider theme={theme}> */}
    <TodosContextProvider>
      <GlobalStyle />
      <App />
    </TodosContextProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
