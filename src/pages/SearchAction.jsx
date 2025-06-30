import { useState, useEffect } from "react";
import SearchBar from "../components/Main/SearchBars/SearchBar";
import { ProductList } from "../components/Main/ProductSection/ProductList";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 59px;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacityState};
  filter: ${(props) => (props.$applyBlur ? "blur(2.5px)" : "blur(0px)")};
  transition: opacity 0.2s ease, filter 1s ease;
`;

const SearchAction = () => {
  const [opacityState, setOpacityState] = useState(0);
  const [applyBlur, setApplyBlur] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 200);
  }, []);

  return (
    <>
      <DivStyled $opacityState={opacityState} $applyBlur={applyBlur}>
        <SearchBar copy={true}></SearchBar>
        <ProductList variant={"inSearch"} categoryKey={13} />
      </DivStyled>
      <Footer setApplyBlur={setApplyBlur}></Footer>
    </>
  );
};

export default SearchAction;
