import { useEffect } from "react";
import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductListHome} from "../components/Main/ProductSection/ProductListHome";
import Footer from '../components/Footer/Footer';

const styles= {
  backgroundColor: 'rgb(240, 240, 240)'
}


const SearchAction = () => {

  return (
    <div style={styles}>
      <SearchBar copy={true}></SearchBar>
      <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
      <Footer></Footer>
    </div>
  )
}

export default SearchAction