import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { HomeDivsProvider } from "@/contexts/HomeDivsProvider";
import { VisibilityProvider } from "@/contexts/VisibilityProvider";
import { CartProvider } from "@/contexts/CartProvider";
import { UserDataProvider } from "@/contexts/UserDataProvider";
import { useAuthToken } from "@hooks/useAuthToken";

function AuthWrapper({ children }) {
  useAuthToken();
  return children;
}

function RootComponent() {
  return (
    <CartProvider>
      <VisibilityProvider>
        <HomeDivsProvider>
          <UserDataProvider>
            <AuthWrapper>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </AuthWrapper>
          </UserDataProvider>
        </HomeDivsProvider>
      </VisibilityProvider>
    </CartProvider>
  );
}

export default RootComponent;
