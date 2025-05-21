import { useContext, useCallback, useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import AnnouncementSection from './AnnoucementSection/AnnouncementSection';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import LabelPromos from './LabelPromos';
import PromoSection from './PromoSection';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import { ViewContext } from '../viewContext';
// import {useScrollYHome} from '../../hooks/useScrollYHome'
import SearchBar from './SearchBars/SearchBar';
import OptionSection from './OptionSection';

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
  const { viewOptions, setViewOptions} = useContext(ViewContext);
  const {currentCategory, setCurrentCategory, setLimitMain, mainRef, translateMain} = useContext(CartContext)
  const [isMobile, setIsMobile] = useState(false);

  const resizeTimeoutId = useRef(null);
  const divRef = useRef(null);
  
  const calcLimit = useCallback(() => {
    if(mainRef.current){
      const heightWindow = window.innerHeight;
      const mainHeight = parseFloat(getComputedStyle(mainRef.current).height);
      const limit = heightWindow - mainHeight;
      setLimitMain(limit);
    }
  },[mainRef, setLimitMain]);

  useEffect(() => {
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    //caso a aba esteja aberta no inicio do carregamento
    const handleScrollAttempt = () => {
      if (window.innerWidth <= 992 && isMobile) {
        setIsMobile(false);
        window.removeEventListener('wheel', handleScrollAttempt);
      }
    };

    calcLimit();
    if(window.innerWidth <= 992 && isTouchDevice()){
      setIsMobile(true);
      window.addEventListener('wheel', handleScrollAttempt);
    } else {
      setIsMobile(false);
    }
  }, [calcLimit])
  
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
      document.documentElement.style.overflow = ''; 
      document.body.style.overflow = '';

      if (resizeTimeoutId.current) {
        clearTimeout(resizeTimeoutId.current);
      }
    };
  }, [handleResize]);

  // useScrollYHome();

  //Esconder mais opções com toque fora
  useEffect(() => {
    const handlePointerDown = (e) => {
      if (e.target.closest('[data-ignore-click]')) return;
      setViewOptions(false);
    };

    const divElement = divRef.current;

    if (viewOptions && divElement) {
      divElement.addEventListener('pointerdown', handlePointerDown);
    } else if (divElement) {
      divElement.removeEventListener('pointerdown', handlePointerDown);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener('pointerdown', handlePointerDown);
      }
    };
  }, [viewOptions, setViewOptions]); 

  return (
   <div ref={divRef}>
    <SearchBar></SearchBar>
    <Main ref={mainRef} $translateValue={translateMain}>
      <Header/>
      <AnnouncementSection isMobile={isMobile}/>
      <LabelPromos></LabelPromos>
      <CategoriesSection setCurrentCategory={setCurrentCategory} isMobile={isMobile}/>
      <PromoSection categoryKey={currentCategory} isMobile={isMobile}/>
      <ShadowBottomStyled/>
    </Main>
    {viewOptions && (<OptionSection></OptionSection>)}
    <Footer/>
  </div>
  );
}

export default MainContent;