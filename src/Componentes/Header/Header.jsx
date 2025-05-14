import React from 'react';
import SearchBar from '../Main/BarraPesquisa/SearchBar';
import styled from 'styled-components';
import { Divlogo, MoreOptions} from './ComponentesHeader';

export const HeaderStyled = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1390px;
    box-sizing: border-box;
    margin: auto;
    background-color: rgb(237, 237, 237);
    height: 180px;
`;
const NomeELogoStyled= styled.div`
    height: 120px;
    width: 90%;
    max-width: 1150px;
    margin-top: 0px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    padding: 16px 0px;
    padding-top: 32px;
`;
const Header = () => {
  return (
    <HeaderStyled>
      <NomeELogoStyled>
        <Divlogo></Divlogo>
        <MoreOptions></MoreOptions>
      </NomeELogoStyled>
      <SearchBar></SearchBar>
    </HeaderStyled>
  )
}

export default Header;