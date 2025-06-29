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
  background-color: #f5faff;

  &::before{
    content: "";
    width: 100%;
    height: 120px;
    position: absolute;
    bottom: 42%;
    left: 0;
    background-image: linear-gradient(to top, rgba(204, 208, 212, 0.21), rgba(0, 0, 0, 0));
    background-size: 100%;
  }

  &::after{
    content: "";
    width: 100%;
    height: 42%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color:rgba(204, 208, 212, 0.21);
    background-size: 100%;
  }
`;


function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const { noSkipLogin, setNoSkipLogin } = useContext(ViewContext);
  const { currentCategory } = useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0);
  const [applyBlur, setApplyBlur] = useState(false);

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
          filter: (noSkipLogin || applyBlur) ? "blur(2.5px)" : "blur(0px)",
          opacity: !noSkipLogin ? opacityState : 1,
          transition: 'filter 1s ease, opacity 0.2s ease'
        }}
      >
        <Header viewOptions={viewOptions} setViewOptions={setViewOptions} />
        <Main>
          <AnnouncementSection />
          <CategoriesSection />
          <PromoSection categoryKey={currentCategory} />
        </Main>
      </div>
      <Footer setOpacityState={setOpacityState} setApplyBlur={setApplyBlur}/>
    </div>
  );
}

export default MainContent;
