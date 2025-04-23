import React from 'react';
import styled from 'styled-components';
import { Divlogo, UserEnotif } from './ComponentesHeader';

export const Sheader = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1390px;
    padding: 8px 0px;
    box-sizing: border-box;
    margin: auto;
    height: 120px;
    /* background-color: #d3482c; */
    /* background-image: linear-gradient(to right, #e34343, #C7381A); */
`;
const Cabecalho= styled.div`
    width: 90%;
    margin-top: 0px;
    padding: 5px 0px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
`;
const Header = () => {
  return (
    <Sheader>
        <Cabecalho>
            <Divlogo></Divlogo>
            <UserEnotif></UserEnotif>
        </Cabecalho>
    </Sheader>
  )
}

export default Header;