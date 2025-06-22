import { useContext, useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import AnnouncementSection from "./AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import PromoSection from "./PromoSection";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import styled from "styled-components";
import { CartContext } from "../CartContext";
// import { ViewContext } from "../viewContext";
//voltar a aplicar esse estado depois

const Main = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  background-color: rgb(237, 237, 237);
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 36px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.1),
      rgba(240, 240, 240, 0)
    );
    background-size: 100% 100%;
    pointer-events: none;
  }
`;

function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const [quantBlur, setQuantBlur] = useState(3.5);
  const [noSkipLogin, setNoSkipLogin] = useState(true);
  // const { noSkipLogin, setNoSkipLogin } = useContext(ViewContext);
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
          filter: `blur(${quantBlur}px)`,
          transition: "filter 1s ease",
        }}
      >
        <Header viewOptions={viewOptions} setViewOptions={setViewOptions} />
        <Main>
          <AnnouncementSection />
          <CategoriesSection />
          <PromoSection categoryKey={currentCategory} />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default MainContent;
