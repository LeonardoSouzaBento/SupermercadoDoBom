import { useContext, useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { ProductList } from "../components/Product/ProductList";
import ProductInFull from "../components/Product/ProductInFull";
import Footer from "../components/Footer/Footer";
import { VisibilityContext } from "../contexts/VisibilityContext";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 59px;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacityState};
  transition: opacity 0.2s ease;
  position: relative;

  /* &::after {
    content: "";
    width: 100%;
    height: 16px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #383d6aff;
    z-index: 1;
  } */
`;

const SearchAction = () => {
  const [opacityState, setOpacityState] = useState(0);
  const { viewProductInFull } = useContext(VisibilityContext);
  const [canClick, setCanClick] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
      setCanClick(true);
    }, 200);
  }, []);

  return (
    <>
      <DivStyled $opacityState={opacityState}>
        <SearchBar copy={true}></SearchBar>
        {canClick && <ProductList variant={"search"} categoryKey={13} />}
      </DivStyled>
      {viewProductInFull && <ProductInFull />}
      <Footer />
    </>
  );
};

export default SearchAction;
