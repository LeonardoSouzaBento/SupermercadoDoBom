import SearchBarCopy from "../Componentes/Main/BarraPesquisa/SearchBarCopy";
import {ProductListHome} from "../Componentes/Main/Produto/ProductListHome";
import Footer from '../Componentes/Footer/Footer';

const styles= {
  // backgroundImage: 'linear-gradient(to bottom, rgb(227, 227, 227), rgb(245, 245, 245))',
  // backgroundSize: '100% 40%',
  minHeight: '100vh',
  // backgroundRepeat: 'no-repeat',
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