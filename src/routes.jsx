import HomePage from '@pages/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPage from './pages/LoginPage/LoginPage';
import MyAccount from './pages/MyAccount/MyAccount';
import MyOrders from './pages/MyOrders/MyOrders';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meu-carrinho" element={<Cart />} />
      <Route path="/buscar-produtos" element={<SearchPage />} />
      <Route path="/minha-conta" element={<MyAccount />} />
      <Route path="/meus-pedidos" element={<MyOrders />} />
      <Route path="/fazer-login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
