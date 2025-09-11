import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import SearchAction from "./pages/SearchAction";
import ForRecruitersPage from "./pages/ForRecruiters/ForRecruiters";
import MyOrders from "./pages/MyOrders/MyOrders"
import MyAccount from "./pages/MyAccount/MyAccount"
import LoginPage from "./pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meu-carrinho" element={<Cart />} />
      <Route path="/buscar-produtos" element={<SearchAction />} />
      <Route path="/sobre" element={<ForRecruitersPage />} />
      <Route path="/minha-conta" element={<MyAccount />} />
      <Route path="/meus-pedidos" element={<MyOrders />} />
      <Route path="/fazer-login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
