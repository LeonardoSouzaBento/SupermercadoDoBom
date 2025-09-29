import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@contexts/CartContext";
import { WrapperStyled, DivButtonsStyled, ButtonStyled } from "./StylizedTags";
import CartInfo from "./Components/CartInfo";
import { SpaceForNavBarStyled } from "./StylizedTags";
import { User, House, ScrollText, ShoppingCart, Search } from "lucide-react";

const navItems = [
  {
    path: "/meu-carrinho",
    icon: "shopping_cart",
    lucidIcon: ShoppingCart,
    active: false,
    display: "",
  },
  {
    path: "/meus-pedidos",
    icon: "contract",
    lucidIcon: ScrollText,
    active: false,
  },
  {
    path: "/minha-conta",
    icon: "person",
    lucidIcon: User,
    active: false,
  },
  {
    path: "/buscar-produtos",
    icon: "search",
    lucidIcon: Search,
    active: false,
  },
  {
    path: "/",
    icon: "home",
    lucidIcon: House,
    active: false,
  },
];

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantityItens } = useContext(CartContext);

  return (
    <>
      <WrapperStyled>
        <DivButtonsStyled>
          {quantityItens >= 1 && <CartInfo />}
          {navItems.map((item, index) => {
            const isActive = item.path === location.pathname;
            const isCartItemHidden =
              item.path === "/meu-carrinho" && quantityItens >= 1;
            return (
              <ButtonStyled
                key={index}
                className={`${isActive ? "active-button" : ""} ${
                  isCartItemHidden ? "button-hide" : ""
                }`}
                onClick={() => {
                  if (!isActive) {
                    navigate(item.path);
                  }
                }}
              >
                <item.lucidIcon
                  strokeWidth={1.8}
                  color="white"
                  size={24}
                />
              </ButtonStyled>
            );
          })}
        </DivButtonsStyled>
      </WrapperStyled>
      <SpaceForNavBarStyled />
    </>
  );
}
