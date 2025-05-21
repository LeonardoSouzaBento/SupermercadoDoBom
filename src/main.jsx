import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { CartProvider } from "./components/CartContext";
import { ViewContextProvider } from "./components/viewContext";
import '../src/index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <ViewContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  </ViewContextProvider>
  </CartProvider>
);
