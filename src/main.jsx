import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { CartProvider } from "./components/CartContext";
import { VisibilityProvider } from "./components/VisibilityContext";
import '../src/index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <VisibilityProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </VisibilityProvider>
  </CartProvider>
);
