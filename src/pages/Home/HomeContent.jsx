import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import OptionsSection from "./MoreOptionsMenu/OptionsMenu";
import AnnouncementSection from "./AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ProductListHome from "./ProductListHome";
import Footer from "../../components/BottomNavBar/Footer";
import Login from "../../components/Login/Login";
import ProductInFull from "../../components/Product/ProductInFull/ProductInFull";
import { CartContext } from "../../contexts/CartContext";
import { VisibilityContext } from "../../contexts/VisibilityContext";

const MainStyled = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 355px; //340 + 16px
    position: absolute;
    top: 0;
    left: 0;
    background: hsla(223, 19%, 90%, 1);
    /* background: linear-gradient(to bottom, var(--purple), hsl(213, 31%, 95%)); */
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
  }

  &::before {
    content: "";
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--purple);
    z-index: 0;
  }
`;

const ProductFeedDivStyled = styled.div`
  border-radius: 16px 16px 0 0;
  background-color: var(--back-color);
  /* box-shadow: 0px -4px 10px rgba(41, 46, 117, 0.125); */
`;

function HomeContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const { viewProductInFull, seeLogin, setSeeLogin } =
    useContext(VisibilityContext);
  const { currentCategory } = useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0);
  const resizeDowntime = useRef(null);
  const windowWidthInitialRef = useRef(0);
  const [wasResize, setWasResize] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 300);

    //resize para avisar mudanças de largura
    windowWidthInitialRef.current = window.innerWidth;
    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
      resizeDowntime.current = setTimeout(() => {
        let widthOfWindow = window.innerWidth;

        if (widthOfWindow !== windowWidthInitialRef.current) {
          setWasResize((prev) => prev + 1);
          windowWidthInitialRef.current = widthOfWindow;
        }
      }, 300);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, [setSeeLogin]);

  return (
    <div ref={divRef}>
      {seeLogin && <Login setSeeLogin={setSeeLogin} />}

      {viewOptions && <OptionsSection setViewOptions={setViewOptions} />}

      <div
        style={{
          opacity: !seeLogin ? opacityState : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <Header setViewOptions={setViewOptions} onHome={true} />
        <MainStyled>
          <AnnouncementSection wasResize={wasResize} />
          <ProductFeedDivStyled>
            <CategoriesSection wasResize={wasResize} />
            <ProductListHome
              categoryKey={currentCategory}
              wasResize={wasResize}
            />
          </ProductFeedDivStyled>
        </MainStyled>
      </div>
      {viewProductInFull && <ProductInFull />}
      <Footer setOpacityState={setOpacityState} />
    </div>
  );
}

export default HomeContent;
