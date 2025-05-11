import { useContext, useState, useCallback, useEffect } from 'react';
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

const Main = styled.main`
  max-width: 1390px;
  margin: auto;
  background-color: rgb(237, 237, 237);
  position: relative;
  padding: 0px;
  box-shadow: inset 0px -3px 6px rgb(198, 198, 198);
  position: relative;
  touch-action: pan-y;
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
  const {currentCategory, setCurrentCategory} = useContext(CartContext)
  const [viewDialog, setViewDialog] = useState(false);

  return (
    <Main>
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