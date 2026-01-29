import HomePage from '@pages/home-page/HomePage';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart-page/Cart';
import LoginPage from './pages/login-page/login-page';
import MyAccount from './pages/my-account/my-account';
import MyOrders from './pages/my-orders/my-orders';
import SearchPage from './pages/search-page';
import NotFound from './pages/not-found';

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

