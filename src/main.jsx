import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { CartProvider } from "./contexts/CartContext";
import { VisibilityProvider } from "./contexts/VisibilityContext";
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
