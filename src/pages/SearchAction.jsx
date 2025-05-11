import React from 'react'
import SearchBarCopy from "../Componentes/Main/BarraPesquisa/SearchBarCopy";
import {ProductListHome} from "../Componentes/Main/Produto/ProductListHome";
import Footer from '../Componentes/Footer/Footer';

const SearchAction = () => {
  return (
    <div style={{backgroundColor:'rgb(240, 240, 240)', minHeight:'100vh'}}>
        <SearchBarCopy></SearchBarCopy>
        <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
        <Footer></Footer>
    </div>
  )
}

export default SearchAction