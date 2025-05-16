import styled from 'styled-components';
import { Divlogo, MoreOptions} from './ComponentesHeader';
// import SearchBar from '../Main/BarraPesquisa/SearchBar';
import SearchBarNoFunctions from '../Main/BarraPesquisa/SearchBarNoFunctions';

export const HeaderStyled = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1390px;
    background-color: rgb(237, 237, 237);
    height: 180px;
    z-index: 2;
    flex: none;
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
      <SearchBarNoFunctions></SearchBarNoFunctions>
    </HeaderStyled>
  )
}

export default Header;