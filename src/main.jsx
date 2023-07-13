import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/data-context.js";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
