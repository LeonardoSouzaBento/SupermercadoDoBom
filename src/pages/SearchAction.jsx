import SearchBarCopy from "../Componentes/Main/BarraPesquisa/SearchBarCopy";
import {ProductListHome} from "../Componentes/Main/Produto/ProductListHome";
import Footer from '../Componentes/Footer/Footer';

const styles= {
  minHeight: '100vh',
  backgroundColor: 'rgb(240, 240, 240)'
}

const SearchAction = () => {
  return (
    <div style={styles}>
      <SearchBarCopy></SearchBarCopy>
      <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
      <Footer></Footer>
    </div>
  )
}

export default SearchAction