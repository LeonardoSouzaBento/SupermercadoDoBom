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
  background-color: rgb(235, 235, 235);

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
    background: linear-gradient(to top, rgb(225, 225, 225), rgb(235, 235, 235));
    background-size: cover;
    z-index: 1;
  }
`;

const ShadowBottomStyled = styled.div`
  width: 100%;
  height: 36px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    rgb(240, 240, 240),
    rgba(0, 0, 0, 0)
  );
  z-index: 2;
`;

function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const { noSkipLogin, setNoSkipLogin, quantBlur, setQuantBlur } = useContext(ViewContext);
  const { currentCategory } = useContext(CartContext);
  const divRef = useRef(null);

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
      <Login
        noSkipLogin={noSkipLogin}
        setNoSkipLogin={setNoSkipLogin}
        quantBlur={quantBlur}
        setQuantBlur={setQuantBlur}
      />

      <div
        style={{
          filter: quantBlur != 0 && `blur(${quantBlur}px)`,
          transition: "filter 1s ease",
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
      <Footer setQuantBlur={setQuantBlur} />
    </div>
  );
}

export default MainContent;
