import { Routes, Route } from "react-router-dom";
import MainContent from "./components/Main/MainContent"
import Cart from "./pages/Cart/Cart";
import SearchAction from "./pages/SearchAction";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />}/>
      <Route path="/Cart" element={<Cart />} />
      <Route path="/SearchAction" element={<SearchAction />} />
    </Routes>
  );
};

export default AppRoutes;