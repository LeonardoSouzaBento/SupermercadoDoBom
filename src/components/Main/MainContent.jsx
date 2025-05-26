import { useContext, useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import AnnouncementSection from './AnnoucementSection/AnnouncementSection';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import PromoSection from './PromoSection';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { CartContext } from '../CartContext';

const Main = styled.main`
  max-width: 1390px;
  margin: auto;
  padding: 0px;
  background-color: rgb(237, 237, 237);
  position:  relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    position: absolute; 
    bottom: 0px;
    height: 36px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(240, 240, 240, 0));
    background-size: 100% 100%;
    pointer-events: none;
  }
`;

function MainContent() {
  const [viewOptions, setViewOptions] = useState(false);

  const {currentCategory, isMobile, setIsMobile} = useContext(CartContext)
  const divRef = useRef(null);
  
  //para habilitar scroll nativo
  useEffect(() => {
    // detectar mouse
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    const detectMouseEvent = (e) => {
      const wasMouseEvent = (e.type === 'wheel') || (e.type === 'pointerdown' && e.pointerType === 'mouse');

      if (window.innerWidth <= 992 && isMobile && wasMouseEvent) {
        setIsMobile(false);
        window.removeEventListener('wheel', detectMouseEvent);
        window.removeEventListener('pointerdown', detectMouseEvent);
      }
      window.removeEventListener('wheel', detectMouseEvent);
      window.removeEventListener('pointerdown', detectMouseEvent);
    };

    if (window.innerWidth <= 992 && isTouchDevice()) {
      setIsMobile(true);
      window.addEventListener('wheel', detectMouseEvent);
      window.addEventListener('pointerdown', detectMouseEvent);
    } else {
      setIsMobile(false);
    }

    // detectar toque touch
    const detectTouchEvent = ()=>{
      setIsMobile(true);
      window.removeEventListener('touchstart', detectTouchEvent)
    }
    window.addEventListener('touchstart', detectTouchEvent)

    return () => {
      window.removeEventListener('touchstart', detectTouchEvent)
      window.removeEventListener('wheel', detectMouseEvent);
      window.removeEventListener('pointerdown', detectMouseEvent);
    };
  }, []);

  //Esconder mais opções com toque fora
  useEffect(() => {
    const handlePointerDown = (e) => {
      if (e.target.closest('[data-ignore-click]')) return;
      setViewOptions(false);
    };
    const handleScroll = ()=>{
      setViewOptions(false);
    }
    const divElement = divRef.current;

    if (viewOptions && divElement) {
      divElement.addEventListener('pointerdown', handlePointerDown);
      divElement.addEventListener('wheel', handleScroll);
    } else if (divElement) {
      divElement.removeEventListener('pointerdown', handlePointerDown);
      divElement.removeEventListener('wheel', handleScroll);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener('pointerdown', handlePointerDown);
        divElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, [viewOptions, setViewOptions]); 

  return (
   <div ref={divRef}>
    <Header viewOptions={viewOptions} setViewOptions={setViewOptions}/>
    <Main>
      <AnnouncementSection/>
      <CategoriesSection/>
      <PromoSection categoryKey={currentCategory}/>
    </Main>
    <Footer/>
  </div>
  );
}

export default MainContent;