import React from 'react';
import styled from 'styled-components';
import { Divlogo, MoreOptions} from './ComponentesHeader';

export const HeaderStyled = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1390px;
    padding: 8px 0px;
    padding-top: 15px;
    box-sizing: border-box;
    margin: auto;
    height: 120px;
`;
const NomeELogoStyled= styled.div`
    width: 90%;
    max-width: 1150px;
    margin-top: 0px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
`;
const Header = () => {
  return (
    <HeaderStyled>
        <NomeELogoStyled>
          <Divlogo></Divlogo>
          <MoreOptions></MoreOptions>
        </NomeELogoStyled>
    </HeaderStyled>
  )
}

export default Header;