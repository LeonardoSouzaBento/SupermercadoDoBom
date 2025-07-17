import { useContext, useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import AnnouncementSection from "./AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ProductListHome from "./ProductSection/ProductListHome";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import { VisibilityContext } from "../VisibilityContext";
import ProductInFull from "./ProductSection/ProductInFull";

const Main = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #383d6a, #ECF0F5);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const { noSkipLogin, setNoSkipLogin, viewProductInFull } =
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
  }, []);

  //Esconder mais opções com toque fora
  useEffect(() => {
    const handlePointerDown = (e) => {
      if (e.target.closest("[data-ignore-click]")) return;
      setViewOptions(false);
    };
    const handleScroll = () => {
      setViewOptions(false);
    };
    const divElement = divRef.current;

    if (viewOptions && divElement) {
      divElement.addEventListener("pointerdown", handlePointerDown);
      divElement.addEventListener("wheel", handleScroll);
    } else if (divElement) {
      divElement.removeEventListener("pointerdown", handlePointerDown);
      divElement.removeEventListener("wheel", handleScroll);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener("pointerdown", handlePointerDown);
        divElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [viewOptions, setViewOptions]);

  return (
    <div ref={divRef}>
      {noSkipLogin && (
        <Login noSkipLogin={noSkipLogin} setNoSkipLogin={setNoSkipLogin} />
      )}

      <div
        style={{
          opacity: !noSkipLogin ? opacityState : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <Header
          viewOptions={viewOptions}
          setViewOptions={setViewOptions}
          setOpacityState={setOpacityState}
        />
        <Main>
          <AnnouncementSection wasResize={wasResize} />
          <CategoriesSection wasResize={wasResize} />
          <ProductListHome
            categoryKey={currentCategory}
            wasResize={wasResize}
          />
        </Main>
      </div>
      {viewProductInFull && <ProductInFull />}
      <Footer setOpacityState={setOpacityState} />
    </div>
  );
}

export default MainContent;
