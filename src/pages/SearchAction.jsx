import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductListHome} from "../components/Main/ProductSection/ProductListHome";
import Footer from '../components/Footer/Footer';

const SearchAction = () => {
  return (
    <div style={{backgroundColor: 'rgb(240, 240, 240)'}}>
      <SearchBar copy={true}></SearchBar>
      <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
      <Footer></Footer>
    </div>
  )
}

export default SearchAction