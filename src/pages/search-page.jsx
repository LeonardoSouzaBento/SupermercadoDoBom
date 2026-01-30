import { useContext, useState, useEffect } from 'react';
import SearchBar from '@components/search-bar';
import ProductInFull from '@components/product-in-full';
import BottomNavBar from '@components/bottom-nav-bar';
import { ProductList } from '@components/product-list';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { UserDataContext } from '@contexts/UserDataContext';
import styled from 'styled-components';

const DivSc = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 12px;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacityState};
  transition: opacity 0.2s ease;
  position: relative;
`;

const SearchPage = () => {
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
      <DivSc $opacityState={opacityState}>
        <SearchBar copy={true} onHome={false} />
        {canClick && <ProductList variant={'search'} productList={searchProducts} />}
      </DivSc>
      {viewProductInFull && <ProductInFull />}
      <BottomNavBar search={true} />
    </>
  );
};

export default SearchPage;
