import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { CartProvider } from "./Componentes/CartContext";
import '../src/index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </CartProvider>
);
