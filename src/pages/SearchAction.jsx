import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductList} from "../components/Main/ProductSection/ProductList";
import Footer from '../components/Footer/Footer';
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 59px;
  box-sizing: border-box;
  background-color: #EBF0F5;
`;

const SearchAction = () => {
  return (
    <DivStyled>
      <SearchBar copy={true}></SearchBar>
      <ProductList variant={'inSearch'} categoryKey={13}/>
      <Footer></Footer>
    </DivStyled>
  )
}

export default SearchAction
