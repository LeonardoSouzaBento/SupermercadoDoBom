import { useContext, useState, useCallback, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import HelpSection from './HelpSection';
import SearchBar from './BarraPesquisa/SearchBar';
import AnnouncementSection from './Annoucement_section/AnnouncementSection';
import CategorySection from './Categorias/CategorySection';
import PromoSection from './PromoSection';
import Footer from '../Footer/Footer';
import ConfirmDialog from '../Footer/ConfirmDialog';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import { useScroll } from '../../useScroll';

const Main = styled.main.attrs(props => ({
  style: {
    transform: `translateY(${props.$translateValue ?? 0}px)`,
  }
  }))`
  max-width: 1390px;
  height: max-content;
  margin: auto;
  background-color: rgb(237, 237, 237);
  position: relative;
  padding: 0px;
  box-shadow: inset 0px -3px 6px rgb(198, 198, 198);
  position: relative;
`;

const ShadowBottomStyled = styled.div`
  display: block;
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 8px;
  background-image: linear-gradient(to top,rgba(0, 0, 0, 0.09), rgba(240, 240, 240, 0));
  background-size: 100% 100%;
  @media screen and (min-width: 993px){
    display: none;
  }
`;

function MainContent() {
  useScroll();
  const {currentCategory, setCurrentCategory, setLimitMain, mainRef, translateMain} = useContext(CartContext)
  const [viewDialog, setViewDialog] = useState(false);
  const resizeTimeoutId = useRef(null);

  const calcLimit = useCallback(() => {
    if(mainRef.current){
      const mainHeight = getComputedStyle(mainRef.current).height;
      setLimitMain(mainHeight);
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

  return (
    <Main ref={mainRef} $translateValue={translateMain}>
      <HelpSection />
      <Header />
      <SearchBar />
      <AnnouncementSection />
      <CategorySection setCurrentCategory={setCurrentCategory}/>
      <PromoSection categoryKey={currentCategory}/>
      {!viewDialog && (<Footer setViewDialog={setViewDialog}/>)}
      {viewDialog && (<ConfirmDialog setViewDialog={setViewDialog}/>)}
      <ShadowBottomStyled/>
    </Main>
  );
}

export default MainContent;