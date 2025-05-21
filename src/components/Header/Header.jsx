import styled from 'styled-components';
import { Divlogo, MoreOptions} from './ComponentsHeader';
import SearchBarNoFunctions from '../Main/SearchBars/SearchBarNoFunctions';

export const HeaderStyled = styled.header `
    width: 100%;
    max-width: 1390px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(237, 237, 237);
    z-index: 2;
    flex: none;
`;
const NomeELogoStyled= styled.div`
    height: 40px;
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
      <SearchBarNoFunctions></SearchBarNoFunctions>
    </HeaderStyled>
  )
}

export default Header;