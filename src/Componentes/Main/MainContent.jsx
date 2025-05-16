import { useContext, useCallback, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import AnnouncementSection from './Annoucement_section/AnnouncementSection';
import CategorySection from './Categorias/CategorySection';
import PromoSection from './PromoSection';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import { useScrollMain } from '../../useScrollMain';
import SearchBar from './BarraPesquisa/SearchBar';
// import SearchBar from './BarraPesquisa/SearchBar';

const Main = styled.main.attrs(props => ({
  style: {
    transform: `translateY(${props.$translateValue ?? 0}px)`,
  }
  }))`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  background-color: rgb(237, 237, 237);
`;

const ShadowBottomStyled = styled.div`
  display: block;
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 36px;
  background-image: linear-gradient(to top,rgba(0, 0, 0, 0.12), rgba(240, 240, 240, 0));
  background-size: 100% 100%;
`;

function MainContent() {
  const {currentCategory, setCurrentCategory, setLimitMain, mainRef, translateMain, viewCancel} = useContext(CartContext)
  const resizeTimeoutId = useRef(null);
  const calcLimit = useCallback(() => {
    if(mainRef.current){
      const heightWindow = window.innerHeight;
      const mainHeight = parseFloat(getComputedStyle(mainRef.current).height);
      const limit = heightWindow - mainHeight;
      setLimitMain(limit);
    }
  },[mainRef, setLimitMain]);

  useEffect(() => {
    calcLimit();
  }, [ calcLimit])
  
  const handleResize = useCallback(() => {
    if (resizeTimeoutId.current) {
      clearTimeout(resizeTimeoutId.current);
    }

    resizeTimeoutId.current = setTimeout(() => {
      calcLimit();
      resizeTimeoutId.current = null;
    }, 300);
  }, [calcLimit]);
  

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutId.current) {
        clearTimeout(resizeTimeoutId.current);
      }
    };
  }, [handleResize]);

  useScrollMain();

  return (
   <div>
    <SearchBar></SearchBar>
    <Main ref={mainRef} $translateValue={translateMain}>
      <Header/>
      <AnnouncementSection />
      <CategorySection setCurrentCategory={setCurrentCategory}/>
      <PromoSection categoryKey={currentCategory}/>
      <ShadowBottomStyled/>
    </Main>
    <Footer/>
  </div>
  );
}

export default MainContent;