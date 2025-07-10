import { useContext, useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import AnnouncementSection from "./AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ProductListHome from "./ProductSection/ProductListHome";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import { ViewContext } from "../viewContext";
import ProductInFull from "./ProductSection/ProductInFull";

const Main = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  position: relative;
`;

function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const {
    noSkipLogin,
    setNoSkipLogin,
    applyBlur,
    setApplyBlur,
    viewProductInFull,
  } = useContext(ViewContext);
  const { currentCategory, setIsInHome } = useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0);
  const resizeDowntime = useRef(null);
  const windowWidthInitialRef = useRef(0);
  const [wasResize, setWasResize] = useState(0);

  const divRef = useRef(null);

  useEffect(() => {
    setIsInHome(true);
    setTimeout(() => {
      setOpacityState(1);
    }, 300);
    //remover foco do input em telas touch, manter no caso de click na sugestão
    const handleTouch = (e) => {
      const active = document.activeElement;
      const isInputOrTextarea =
        active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      const clickedInsideInput =
        e.target.closest("input") || e.target.closest("textarea");
      const clickedOnSuggestion = e.target.closest("[data-suggestion]");

      if (isInputOrTextarea && !clickedInsideInput && !clickedOnSuggestion) {
        active.blur();
      }
    };

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

    document.addEventListener("touchstart", handleTouch);
    window.addEventListener("resize", handleResize);

    return () => {
      setIsInHome(false);
      document.removeEventListener("touchstart", handleTouch);
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
          filter: noSkipLogin || applyBlur ? "blur(2.5px)" : "blur(0px)",
          opacity: !noSkipLogin ? opacityState : 1,
          transition: "filter 1s ease, opacity 0.3s ease",
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
      <Footer setOpacityState={setOpacityState} setApplyBlur={setApplyBlur} />
    </div>
  );
}

export default MainContent;
