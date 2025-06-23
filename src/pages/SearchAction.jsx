import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductListHome} from "../components/Main/ProductSection/ProductListHome";
import Footer from '../components/Footer/Footer';
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 59px;
  box-sizing: border-box;
  background-color:rgb(227, 227, 227);
`;

const SearchAction = () => {
  return (
    <DivStyled>
      <SearchBar copy={true}></SearchBar>
      <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
      <Footer></Footer>
    </DivStyled>
  )
}

export default SearchAction