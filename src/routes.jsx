import { Routes, Route } from "react-router-dom";
import MainContent from "./Componentes/Main/MainContent"
import Cart from "./pages/Carrinho/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}/>
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;