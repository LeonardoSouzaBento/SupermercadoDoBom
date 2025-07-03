import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import SearchAction from "./pages/SearchAction";
import MoreOptionsSection from "./pages/MoreOptionsSection/MoreOptionsSection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meu-carrinho" element={<Cart />} />
      <Route path="/buscar-produtos" element={<SearchAction />} />
      <Route path="/secao-mais-opcoes" element={<MoreOptionsSection />} />
    </Routes>
  );
};

export default AppRoutes;
