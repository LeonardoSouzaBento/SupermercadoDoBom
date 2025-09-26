import { useContext, useState, useEffect } from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import ProductInFull from "@components/Product/ProductInFull/ProductInFull";
import Footer from "@components/BottomNavBar/Footer";
import { ProductList } from "@components/Product/ProductItem&List/ProductList";
import { VisibilityContext } from "@contexts/VisibilityContext";
import { UserDataContext } from "@contexts/UserDataContext";
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
`;

const SearchAction = () => {
  const [opacityState, setOpacityState] = useState(0);
  const { viewProductInFull } = useContext(VisibilityContext);
  const { searchProducts } = useContext(UserDataContext);
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
        <SearchBar copy={true} onHome={false} />
        {canClick && (
          <ProductList variant={"search"} productList={searchProducts} />
        )}
      </DivStyled>
      {viewProductInFull && <ProductInFull />}
      <Footer search={true} />
    </>
  );
};

export default SearchAction;
