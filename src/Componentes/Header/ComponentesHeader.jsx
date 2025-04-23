import React from 'react';
import styled from 'styled-components';

const Div0Styled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border-radius: 10px;
`;

const ImgLogoStyled = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px rgb(159, 62, 62);
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
const DivMoreOptionsStyled = styled.div`
    background-color: #d25252;
    box-shadow: 0px 0px 4px rgb(159, 62, 62);
    color: white;
    display: flex;
    align-items: center;
    height: 40px;
    @media (max-width: 992px){
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-sizing: border-box;
        transition: all 100ms ease;
        box-shadow: 0px 0px 5px rgb(142, 53, 53);
    }
    @media (min-width: 993px){
        gap: 8px;
        border-radius: 6px;
        padding: 7px 15px;
        box-sizing: border-box;
        transition: all 100ms ease;
    }
`;

const DivMyCartStyled = styled(DivMoreOptionsStyled)`
     @media (max-width: 992px){
       display: none;
    }
`;

const PStyled = styled.p`
    font-family: "Fira Sans"; 
    letter-spacing: 0.8px; 
    margin:0px;

    @media (max-width: 992px){
       display: none;
    }
`;

const SpanStyled = styled.span`
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
`;

//div das opcoes
export const UserEnotif= () => {
    return (
    <UserMaisStyled>
        <DivMoreOptionsStyled>
            <SpanStyled className="material-symbols-rounded">menu</SpanStyled>
            <PStyled>Mais opções</PStyled>
        </DivMoreOptionsStyled>

        <DivMyCartStyled>
            <SpanStyled className="material-symbols-rounded">shopping_cart</SpanStyled>
            <PStyled>Meu carrinho</PStyled>
        </DivMyCartStyled>
    </UserMaisStyled>
    )
}