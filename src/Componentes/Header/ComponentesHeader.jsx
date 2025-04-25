import React from 'react';
import styled from 'styled-components';

const DivLogoENomeStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border-radius: 10px;
`;

const ImgLogoStyled = styled.img`
    border-radius: 50%;
    border: 1px solid rgb(116, 116, 116);
    box-shadow: 0px 0px 3px rgb(113, 113, 113);
    box-sizing: border-box;
    transform: scaleX(-1);
    filter: grayscale(0.2) saturate(1.2);
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

const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 3px rgba(255, 88, 88, 0.49);
    transform: scaleX(-1);

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

const SpanLogo = styled.span`
  color:rgb(209, 13, 19);
  font-size: 2.06em;
  font-weight: 500;
`;

const DivPsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PNomeSupStyled = styled.p`
    font-family: "Montserrat", serif;
    font-weight: 600;
    color:rgb(209, 13, 19);
    
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
        font-size: 1.03em;
    }
    @media (min-width: 375px) and (max-width: 576px){
        font-size: 1.08em;
    }
    @media (min-width: 577px) and (max-width: 768px){
        font-size: 1.17em;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 1.22em;
    }
    @media (min-width: 993px){
        font-size: 1.25em;
    }
`;

export const Divlogo = () => {
    return (
    <DivLogoENomeStyled>
        <DivLogo><SpanLogo className='material-symbols-rounded'>handshake</SpanLogo></DivLogo>
        <DivPsStyled>
            <PNomeSupStyled>SUPERMERCADO UNIÃO</PNomeSupStyled>
            <PBemVindoStyled> Seja bem vindo!</PBemVindoStyled>
        </DivPsStyled>
    </DivLogoENomeStyled>
    )
}

const DivMoreOptionsStyled = styled.div`
    width: max-content;
    height: 40px;
    display: flex;
    align-items: center;
    background-color:rgb(215, 69, 69);

    color: white;
    @media (max-width: 992px){
        width: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-sizing: border-box;
        transition: all 100ms ease;
        box-shadow: 0px 0px 2px rgba(255, 88, 88, 0.5);
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