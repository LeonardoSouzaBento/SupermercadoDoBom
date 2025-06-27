import { useContext, useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import AnnouncementSection from "./AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import PromoSection from "./PromoSection";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import { ViewContext } from "../viewContext";

const Main = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  position: relative;
  background-color: rgb(240, 240, 240);

  &::after {
    content: "";
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(225, 225, 225);
    background-size: cover;
    z-index: 1;
  }

  &::before {
    content: "";
    width: 100%;
    height: 130px;
    position: absolute;
    bottom: 40%;
    left: 0;
    background: linear-gradient(to top, rgb(225, 225, 225), rgb(240, 240, 240));
    background-size: cover;
    z-index: 1;
  }
`;

const ShadowBottomStyled = styled.div`
  width: 100%;
  height: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgb(225, 225, 225),
    rgba(0, 0, 0, 0.08)
  );
  z-index: 2;
`;

function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const { noSkipLogin, setNoSkipLogin } = useContext(ViewContext);
  const { currentCategory } = useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0.1);
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 300);
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
          filter: noSkipLogin ? "blur(2.5px)" : "none",
          transition: "filter 1s ease",
          opacity: !noSkipLogin ? opacityState : 1,
          transition: 'opacity 0.1s ease'
        }}
      >
        <Header viewOptions={viewOptions} setViewOptions={setViewOptions} />
        <Main>
          <AnnouncementSection />
          <CategoriesSection />
          <PromoSection categoryKey={currentCategory} />
          <ShadowBottomStyled />
        </Main>
      </div>
      <Footer setOpacityState={setOpacityState}/>
    </div>
  );
}

export default MainContent;
