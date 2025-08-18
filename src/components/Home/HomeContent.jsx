import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import OptionsSection from "./MoreOptionsMenu/OptionsMenu";
import AnnouncementSection from "./AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ProductListHome from "../Product/ProductListHome";
import Footer from "../BottomNavBar/Footer";
import Login from "../Login/Login";
import ProductInFull from "../Product/ProductInFull";
import { CartContext } from "../../contexts/CartContext";
import { VisibilityContext } from "../../contexts/VisibilityContext";

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
    background: linear-gradient(to bottom, #383d6a, #ecf0f5);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

function HomeContent() {
  const [viewOptions, setViewOptions] = useState(false);
  const { seeLogin, setSeeLogin, viewProductInFull } =
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
      // setSeeLogin(true);
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

  return (
    <div ref={divRef}>
      {seeLogin && <Login setSeeLogin={setSeeLogin} onRegisterAddress={false}/>}

      {viewOptions && (
        <OptionsSection
          setViewOptions={setViewOptions}
        />
      )}

      <div
        style={{
          opacity: !seeLogin ? opacityState : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <Header setViewOptions={setViewOptions} onHome={true} />
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

export default HomeContent;
