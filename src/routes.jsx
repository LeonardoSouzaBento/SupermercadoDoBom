import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/Home/HomePage";
import Cart from "./pages/Cart/Cart";
import SearchPage from "./pages/SearchPage";
import ForRecruitersPage from "./pages/ForRecruiters/ForRecruiters";
import MyOrders from "./pages/MyOrders/MyOrders"
import MyAccount from "./pages/MyAccount/MyAccount"
import LoginPage from "./pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meu-carrinho" element={<Cart />} />
      <Route path="/buscar-produtos" element={<SearchPage />} />
      <Route path="/sobre" element={<ForRecruitersPage />} />
      <Route path="/minha-conta" element={<MyAccount />} />
      <Route path="/meus-pedidos" element={<MyOrders />} />
      <Route path="/fazer-login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;

