import { House, ScrollText, Search, User } from 'lucide-react';

export const bottomNavBarItems = [
  {
    path: '/meus-pedidos',
    icon: 'contract',
    lucidIcon: ScrollText,
    active: false,
  },
  {
    path: '/minha-conta',
    icon: 'person',
    lucidIcon: User,
    active: false,
  },
  {
    path: '/buscar-produtos',
    icon: 'search',
    lucidIcon: Search,
    active: false,
  },
  {
    path: '/',
    icon: 'home',
    lucidIcon: House,
    active: false,
  },
];