import BottomNavBar from '@components/BottomNavBar';
import ProductInFull from '@components/Product/ProductInFull/ProductInFull';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { UserDataContext } from '@contexts/UserDataContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  AnnouncementSection,
  CategoriesSection,
  Header,
  OptionsMenu,
  ProductListHome,
} from './components/index';

const MainStyled = styled.main`
  max-width: 140rem;
  margin: auto;
  padding: 0;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 28rem; //340 + 1.6rem
    position: absolute;
    top: 2.4rem;
    left: 0;
    background-image: linear-gradient(to bottom, var(--primary), var(--background));
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
  }
  &::before {
    content: '';
    width: 100%;
    height: 2.4rem; //24
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary);
    z-index: 0;
  }
`;

const ProductFeedDivStyled = styled.section`
  position: relative;
  padding-left: 1.2rem;
  padding-top: 1.4rem;
  z-index: 2;

  @media screen and (min-width: 577px) {
    padding-left: 1.6rem;
  }
  @media screen and (min-width: 1201px) {
    padding-left: 0;
  }
`;

function HomePage() {
  const [viewOptions, setViewOptions] = useState(false);
  const { viewProductInFull } = useContext(VisibilityContext);
  const { idToken } = useContext(UserDataContext);
  const { currentCategory } = useContext(HomeDivsContext);
  const resizeDowntime = useRef(null);
  const windowWidthInitialRef = useRef(0);
  const [wasResize, setWasResize] = useState(0);
  const divRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (idToken) {
      console.log('Sim');
    }
    // if (!idToken) {
    //   navigate("/fazer-login");
    // }
    //resize para avisar mudanças de largura
    windowWidthInitialRef.current = window.innerWidth;
    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
      resizeDowntime.current = setTimeout(() => {
        let widthOfWindow = window.innerWidth;

        if (widthOfWindow !== windowWidthInitialRef.current) {
          setWasResize((prev) => prev + 1);
          windowWidthInitialRef.current = widthOfWindow;
        }
      }, 300);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, []);

  return (
    <div ref={divRef}>
      {viewOptions && <OptionsMenu setViewOptions={setViewOptions} idToken={idToken} />}

      <div>
        <Header setViewOptions={setViewOptions} />
        <MainStyled>
          <AnnouncementSection wasResize={wasResize} />
          <ProductFeedDivStyled>
            <CategoriesSection wasResize={wasResize} />
            <ProductListHome categoryKey={currentCategory} wasResize={wasResize} />
          </ProductFeedDivStyled>
        </MainStyled>
      </div>
      {viewProductInFull && <ProductInFull />}
      <BottomNavBar />
    </div>
  );
}

export default HomePage;
