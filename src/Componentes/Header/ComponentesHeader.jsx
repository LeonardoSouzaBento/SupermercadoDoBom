import React from 'react';
import styled from 'styled-components';

const DivLogoStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border-radius: 10px;
`;

const ImgLogoStyled = styled.img`
    height: 65px;
    width: 65px;
    border-radius: 50%;
    border: 1px solid rgb(143, 143, 143);
    box-shadow: 0px 0px 3px rgb(141, 141, 141);
    box-sizing: border-box;
    
    @media (min-width: 320px) and (max-width: 374px){
        height: 54px;
        width: 54px;
    }
    @media (min-width: 375px) and (max-width: 576px){
        height: 60px;
        width: 60px;
    }
    @media (min-width: 577px) and (max-width: 768px){
        height: 63px;
        width: 63px;
    }
    @media (min-width: 768px){
        height: 65px;
        width: 65px;
    }
`;

const DivPsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PNomeSupStyled = styled.p`
    font-family: "Montserrat", serif;
    font-weight: 600;

    color:rgb(185, 40, 21);
    @media (min-width: 320px) and (max-width: 374px){
        font-size: 0.93em;
    }
    @media (min-width: 375px) and (max-width: 576px){
        font-size: 0.98em;

    }
    @media (min-width: 577px) and (max-width: 768px){
        font-size: 1.06em;

    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 1.15em;

    }
    @media (min-width: 993px){
        font-size: 1.2em;

    }
`;

const PBemVindoStyled = styled(PNomeSupStyled)`
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-weight: 400;
    @media (min-width: 320px) and (max-width: 374px){
        font-size: 0.89em;
    }
    @media (min-width: 375px) and (max-width: 576px){
        font-size: 1em;
    }
    @media (min-width: 577px) and (max-width: 768px){
        font-size: 1.12em;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 1.2em;
    }
    @media (min-width: 993px){
        font-size: 1.25em;
    }
`;

export const Divlogo = () => {
    return (
    <DivLogoStyled>
        <ImgLogoStyled src="/logoGenerico_compressed.jpg" alt=""></ImgLogoStyled>
        <DivPsStyled>
            <PNomeSupStyled>SUPERMERCADO UNIÃO</PNomeSupStyled>
            <PBemVindoStyled> Seja bem vindo!</PBemVindoStyled>
        </DivPsStyled>
    </DivLogoStyled>
    )
}

const DivMoreOptionsStyled = styled.div`
    width: max-content;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #d25252;
    box-shadow: 0px 0px 5px rgb(128, 128, 128);
    color: white;
    @media (max-width: 992px){
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-sizing: border-box;
        transition: all 100ms ease;
        box-shadow: 0px 0px 5px rgb(128, 128, 128);
    }
    @media (min-width: 993px){
        gap: 8px;
        border-radius: 9px;
        padding: 7px 15px;
        box-sizing: border-box;
        transition: all 100ms ease;
    }
`;

const PStyled = styled.p`
    font-family: "Montserrat";
    font-weight: 400;
    letter-spacing: 0.8px; 
    margin:0px;
    @media (max-width: 993px){
       display: none;
    }
`;

const SpanStyled = styled.span`
    font-size: 1.65em;
    font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 28;
`;

//div das opcoes
export const MoreOptions= () => {
    return (
        <DivMoreOptionsStyled>
            <SpanStyled className="material-symbols-rounded">menu</SpanStyled>
            <PStyled>Mais opções</PStyled>
        </DivMoreOptionsStyled>
    )
}