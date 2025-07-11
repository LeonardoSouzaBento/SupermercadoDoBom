import { useContext ,useState, useEffect } from "react";
import SearchBar from "../components/Main/SearchBars/SearchBar";
import { ProductList } from "../components/Main/ProductSection/ProductList";
import ProductInFull from "../components/Main/ProductSection/ProductInFull";
import Footer from "../components/Footer/Footer";
import { ViewContext } from "../components/viewContext";
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
  const { viewProductInFull } = useContext(ViewContext);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 200);
    const handleTouch = (e) => {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" || active.tagName === "TEXTAREA") &&
        !e.target.closest("input") &&
        !e.target.closest("textarea")
      ) {
        active.blur(); // tira o foco do input
      }
    };
    document.addEventListener("touchstart", handleTouch);

    return () => {
      document.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return (
    <>
      <DivStyled $opacityState={opacityState}>
        <SearchBar copy={true}></SearchBar>
        <ProductList variant={"search"} categoryKey={13} />
      </DivStyled>
      {viewProductInFull && <ProductInFull />}
      <Footer />
    </>
  );
};

export default SearchAction;
