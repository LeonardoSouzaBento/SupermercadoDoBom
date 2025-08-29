import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartProvider";
import { VisibilityProvider } from "./contexts/VisibilityProvider";
import { useAuthToken } from "./hooks/useAuthToken";

function AuthWrapper({ children }) {
  useAuthToken();
  return children;
}

function Root() {
  return (
    <CartProvider>
      <VisibilityProvider>
        <AuthWrapper>
          <BrowserRouter>
            <AppRoutes /> 
          </BrowserRouter>
        </AuthWrapper>
      </VisibilityProvider>
    </CartProvider>
  );
}

export default Root;