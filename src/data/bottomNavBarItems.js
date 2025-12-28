import { House, ScrollText, Search, User } from 'lucide-react';

export const bottomNavBarItems = [
  {
    path: '/meus-pedidos',
    name: 'meus pedidos',
    icon: 'contract',
    lucidIcon: ScrollText,
    active: false,
  },
  {
    path: '/minha-conta',
    name: 'minha conta',
    icon: 'person',
    lucidIcon: User,
    active: false,
  },
  {
    path: '/buscar-produtos',
    name: 'buscar produtos',
    icon: 'search',
    lucidIcon: Search,
    active: false,
  },
  {
    path: '/',
    name: 'Início',
    icon: 'home',
    lucidIcon: House,
    active: false,
  },
];