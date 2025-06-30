import styled from 'styled-components';
import { Divlogo, MoreOptionsButton} from './ComponentsHeader';
import SearchBar from '../Main/SearchBars/SearchBar';
import Options from './Options';

export const HeaderStyled = styled.header `
    width: 100%;
    max-width: 1390px;
    height: 180px;
    max-height: 181px;
    position: relative;
    //modo paisagem
    @media screen and (min-width: 769px){
      height: 140px;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 3.5%;
      padding-top: 12px;
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
      padding: 0px 5%;
    }
    @media screen and (min-width: 1201px){
      padding: 0px 5.5%;
    }
    
`;


const Header = ({viewOptions, setViewOptions}) => {
  return (
    <HeaderStyled>
      <Divlogo></Divlogo>
      <SearchBar copy={false}></SearchBar>
      <MoreOptionsButton 
        setViewOptions={setViewOptions}
        viewOptions={viewOptions}
      />
      {viewOptions && (<Options/>)}
    </HeaderStyled>
  )
}

export default Header;
