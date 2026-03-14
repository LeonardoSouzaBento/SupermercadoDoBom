import { createContext, useContext } from "react";

export const HomeDivsContext = createContext();
export const useHomeDivsContext = () => {
  return useContext(HomeDivsContext);
};

export const CartContext = createContext();
export const useCartContext = () => {
  return useContext(CartContext);
};

export const UserDataContext = createContext();
export const useUserDataContext = () => {
  return useContext(UserDataContext);
};

export const VisibilityContext = createContext();
export const useVisibilityContext = () => {
  return useContext(VisibilityContext);
};
