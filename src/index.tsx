import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <GlobalStyles />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
