import { useContext, useState, useEffect } from "react";
import SearchBar from "../components/Main/SearchBars/SearchBar";
import { ProductList } from "../components/Main/ProductSection/ProductList";
import ProductInFull from "../components/Main/ProductSection/ProductInFull";
import Footer from "../components/Footer/Footer";
import { VisibilityContext } from "../components/VisibilityContext";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 59px;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacityState};
  transition: opacity 0.2s ease;
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
