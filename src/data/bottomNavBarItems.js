import { House, ScrollText, Search, User, ShoppingCart } from 'lucide-react';

export const bottomNavBarItems = [
  {
    path: '/meu-carrinho',
    name: 'meu carrinho',
    lucidIcon: ShoppingCart,
    active: false,
  },
  {
    path: '/meus-pedidos',
    name: 'meus pedidos',
    lucidIcon: ScrollText,
    active: false,
  },
  {
    path: '/minha-conta',
    name: 'minha conta',
    lucidIcon: User,
    active: false,
  },
  {
    path: '/buscar-produtos',
    name: 'buscar produtos',
    lucidIcon: Search,
    active: false,
  },
  {
    path: '/',
    name: 'Início',
    lucidIcon: House,
    active: false,
  },
];
