import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityContext } from "@contexts/VisibilityContext";
import { UserDataContext } from "@contexts/UserDataContext";
import { HomeDivsContext } from "@contexts/HomeDivsContext";
import BottomNavBar from "@components/BottomNavBar/BottomNavBar";
import ProductInFull from "@components/Product/ProductInFull/ProductInFull";
import Header from "./Components/Header/Header";
import OptionsSection from "./Components/MoreOptionsMenu/OptionsMenu";
import AnnouncementSection from "./Components/AnnoucementSection/AnnouncementSection";
import CategoriesSection from "./Components/CategoriesSection/CategoriesSection";
import ProductListHome from "./Components/ProductListHome";
import styled from "styled-components";

const MainStyled = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 280px; //340 + 16px
    position: absolute;
    top: 24px;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      var(--purple),
      var(--back-color)
    );
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
  }
  &::before {
    content: "";
    width: 100%;
    height: 24px; //24
    position: absolute;
    top: 0;
    left: 0;
    background: var(--purple);
    z-index: 0;
  }
`;

const ProductFeedDivStyled = styled.section`
  position: relative;
  background-color: var(--back-color);
  padding-left: 12px;
  padding-top: 14px;
  background-color: var(--back-color);
  z-index: 2;

  @media screen and (min-width: 577px) {
    padding-left: 16px;
  }
  @media screen and (min-width: 1201px) {
    padding-left: 0px;
  }
`;

function HomePage() {
  const [viewOptions, setViewOptions] = useState(false);
  const { viewProductInFull } = useContext(VisibilityContext);
  const { idToken } = useContext(UserDataContext);
  const { currentCategory } = useContext(HomeDivsContext);
  const resizeDowntime = useRef(null);
  const windowWidthInitialRef = useRef(0);
  const [wasResize, setWasResize] = useState(0);
  const divRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // if (idToken) {
    //   console.log("Sim");
    // }
    if (!idToken) {
      navigate("/fazer-login");
    }
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
      {viewOptions && (
        <OptionsSection setViewOptions={setViewOptions} idToken={idToken} />
      )}

      <div>
        <Header setViewOptions={setViewOptions} />
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
      <BottomNavBar />
    </div>
  );
}

export default HomePage;
