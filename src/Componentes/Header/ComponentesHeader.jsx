import React from 'react';
import styled from 'styled-components';

const Div0Styled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: rgb(255, 255, 255);
`;

const ImgLogoStyled = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 40%;
    box-shadow:0px 0px 6px #ab3636;
`;

const PLogoStyled = styled.p`
    font-family: "Fira Sans", serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    padding: 5px;
@media (min-width: 320px) and (max-width: 520px){
    font-size: 0.9em;
    line-height: 17px;
}
@media (min-width: 521px) and (max-width: 576px){
    font-size: 0.95em;
    line-height: 19px;
}
@media (min-width: 577px){
    font-size: 1em;
    line-height: 20px;
}
`;

export const Divlogo = () => {
    return (
    <Div0Styled>
        <ImgLogoStyled src="/logoGenerico_compressed.jpg" alt=""></ImgLogoStyled>
        <div>
            <PLogoStyled><strong>SUPERMERCADO UNIÃO</strong><br></br>
                Seja bem vindo.
            </PLogoStyled>
        </div>
    </Div0Styled>
    )
}

const UserMaisStyled= styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`;
const DivStyled = styled.div`
    display: none;
    @media (min-width: 992px){
        height: 40px;
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #d25252;
        box-shadow: 0px 0px 4px rgb(159, 62, 62);
        border-radius: 6px;
        padding: 7px 15px;
        color: white;
        box-sizing: border-box;
        transition: all 100ms ease;
    }
`;
const ImgPersonStyled = styled.img`
    height: 45px;
    padding: 4px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #a93d40;
    box-shadow: 0px 0px 4px rgb(110, 18, 18);

  @media screen and (min-width: 320px) and (max-width: 375px){
    height: 43px;
    padding: 2px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
  }
  @media screen and (min-width: 577px) and (max-width: 1200px){
  }
  @media screen and (min-width: 1201px){
  }
`;

//estilos
const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};
const pstyle = { fontFamily: "Fira Sans", letterSpacing: "0.8px", margin:"0px"};

//div das opcoes
export const UserEnotif= () => {
    return (
    <UserMaisStyled>
        <DivStyled>
            <span className="material-symbols-rounded" style={iconStyle}>shopping_cart</span>
            <p style={pstyle}>Meu Carrinho</p>
        </DivStyled>
        <DivStyled>
            <span className="material-symbols-rounded" style={iconStyle}>menu</span>
            <p style={pstyle}>Mais opções</p>
        </DivStyled>
        <ImgPersonStyled src='/person.png'></ImgPersonStyled>
    </UserMaisStyled>
    )
}