import { Routes, Route } from "react-router-dom";
import MainContent from "./components/Main/MainContent"
import Cart from "./pages/Cart/Cart";
import SearchAction from "./pages/SearchAction";
import MoreOptionsSection from "./pages/MoreOptionsSection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}/>
      <Route path="/meu-carrinho" element={<Cart />} />
      <Route path="/buscar-produtos" element={<SearchAction />} />
      <Route path="/secao-mais-opcoes" element={<MoreOptionsSection/>}/>
    </Routes>
  );
};

export default AppRoutes;