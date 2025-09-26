import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { HomeDivsProvider } from "@providers/HomeDivsProvider";
import { VisibilityProvider } from "@providers/VisibilityProvider";
import { CartProvider } from "@providers/CartProvider";
import { UserDataProvider } from "@providers/UserDataProvider";
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
