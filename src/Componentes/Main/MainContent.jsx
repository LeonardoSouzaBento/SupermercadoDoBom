import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import WelcomeSection from './WelcomeSection';
import HelpSection from './HelpSection';
import SearchBar from './SearchBar';
import AnnouncementSection from './Annoucement_section/AnnouncementSection';
import CategorySection from './Categorias/CategorySection';
import PromoSection from './PromoSection';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { CartProvider } from '../CartContext';

const Main = styled.main`
  max-width: 1390px;
  height: 100%;
  margin: auto;
  background-color: rgb(240, 240, 240);
  position: relative;
  padding: 0px;
`;


function MainContent() {
  const [loading, setLoading] = useState(true);
  const [apagar, setApagar] = useState(false);

  useEffect(() => {
    setApagar(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Main>
     {loading && <WelcomeSection data-apagar={apagar} />} {}
      {!loading && (
        <>
          <HelpSection />
          <Header />
          <SearchBar />
          <AnnouncementSection />
          <CategorySection />
          <CartProvider id='cart'>
            <PromoSection />
            <Footer />
          </CartProvider>
          
        </>
      )}
    </Main>
  );
}

export default MainContent;