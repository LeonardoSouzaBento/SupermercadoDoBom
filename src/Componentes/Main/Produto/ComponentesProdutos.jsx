import styled from "styled-components";

export const PaiProdStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 265px;
    max-width: 330px;
    height: 165px;
    background-color: white;
    border-radius: 8px 8px 14px 8px;
    border: 1px solid rgb(150, 150, 150);
    cursor: default;
    user-select: none;
    position: relative;
    box-sizing: border-box;
    padding-right: 5px;
    /* box-shadow: 0px 0px 2px rgb(182, 182, 182); */
    
    @media screen and (min-width: 320px) and (max-width: 375px){
       max-width: 265px;
       height: 180px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
       max-width: 307px;
       height: 185px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
       max-width: 320px;
       height: 170px;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
       max-width: 325px;
       height: 170px;
    }
`;

//Descrição da Oferta: nome, desconto e peso
export const DescOfertaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 52%;
    padding: 2px;
    padding-left: 14px;
    padding-right: 0px;
    box-sizing: border-box;
`;

    export const DivNomeStyled = styled.div`
        height: calc(100% - 80px);
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
    `;
    export const PnomeStyled = styled.p`
        text-transform: uppercase;
        font-family: "Lato", Arial, sans-serif;
        margin: auto;
        padding-bottom: 5px;

        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.83em;
            line-height: 18px;
            letter-spacing: 1.01px;
            font-weight: 500;
        }
        @media screen and (min-width: 375px) and (max-width: 576px){
            font-size: 0.88em;
            line-height: 19px;
            letter-spacing: 1.05px;
        }
        @media screen and (min-width: 577px) and (max-width: 768px){
            font-size: 0.89em;
            line-height: 20.4px;
            letter-spacing: 1.06px;
        }
        @media screen and (min-width: 769px) and (max-width: 992px){
            font-size: 0.91em;
            line-height: 20.4px;
            letter-spacing: 1.06px;
        }
        @media screen and (min-width: 993px) {
            font-size: 0.92em;
            line-height: 20.4px;
            letter-spacing: 1.06px;
        }
    `;
    //desconto
    export const DivOffStyled = styled.div`
        position: absolute;
        top: 5px;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        padding: 0px 8px;
        background-color: #CDD4AE;
        /* background-color:rgb(93, 119, 93); */
        border-radius: 5px;
    `;

    export const PoffStyled = styled.p`
        color: #13450a;
        /* color: white; */
        font-family: "Lato",Arial,sans-serif;
        font-weight: 500;
        /* font-weight: 400; */

        @media screen and (min-width: 320px) and (max-width: 375px){
          font-size: 0.87em;
        }
        @media screen and (min-width: 375px) and (max-width: 576px){
           font-size: 0.94em;
        }
        @media screen and (min-width: 577px){
            font-size: 0.96em;
        }
    `;
    //peso
    export const DivPesoStyled = styled.div`
        height: 38px;
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 52px;
    `;
    export const PpesoStyled= styled.p`
        font-size: 0.845em;
        letter-spacing: 0.5px;
        font-family: "Roboto Flex", Arial,sans-serif;
        background-color: rgb(232, 232, 232);
        padding: 3px 15px;
        padding-bottom: 4px;
        border-radius: 9px;
        @media screen and (min-width: 320px) and (max-width: 375px){
          font-size: 0.87em;
        }
        @media screen and (min-width: 375px) and (max-width: 576px){
           font-size: 0.94em;
        }
        @media screen and (min-width: 577px){
            font-size: 0.96em;
        }
    `;

    // Preco
    export const PaiPrecoStyled = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-height: 40px;
    `;

    export const DivPrecoStyled = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        gap: 1px;
        align-items: center;
    `;

    export const PprecoStyled = styled.p`
        width: max-content;
        font-family: "Lato",Arial,sans-serif;
        font-weight: 600;
        text-indent: 4px;
        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.96em;
            letter-spacing: 1px;
        }
        @media screen and (min-width: 375px) and (max-width: 576px){
            font-size: 1.03em;
            line-height: 18.5px;
        }
        @media screen and (min-width: 577px){
            font-size: 1.035em;
            line-height: 20px;
        }
    `;

    export const PSifraStyled = styled(PprecoStyled)`
      width: max-content;
    `;

// Oferta
export const DivOfertaStyled = styled.div`
    height: 100%;
    width: 150px;
    padding: 4px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`;
    export const PaiImgOfertaStyled = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 4px;
    `;
    export const ImgOfertaStyed = styled.img`
        height: 100%;
        width: 100%;
        object-fit: contain;
        padding: 5px;
        box-sizing: border-box;
    `;

    export const DivResizeStyled = styled.div`
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F0F0F0;
      position: absolute;
      top: 1px;
      right: 1px;
      border-radius: 6px;
      /* border-radius: 6px; */
    `;

    export const SpanResizeStyled = styled.span`
        font-weight: 300;
        font-size: 1.4em;
        color:rgb(133, 133, 133);
    `;

    export const DivMaisStyled = styled.div`
        width: 32px;
        height: 32px;
        position: absolute;
        bottom: 6px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid rgb(234, 88, 88);
        border-radius: 50%;
        cursor: pointer;
    `;

    export const PMaisStyled= styled.p`
        font-size: 1.65em;
        font-family: "Lato" ,Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: white;
        cursor: pointer;
        user-select: none;
        color:rgb(173, 61, 61);
        padding-bottom: 4px;
        padding-left: 0px;
    `;

    export const PMais2Styled = styled(PMaisStyled)`
       color:rgb(173, 61, 61);
    `;

    //Selecionar a quantidade, + 1 e -
    export const DivQuantStyled = styled.div`
        width: 128px;
        height: 32px;
        border: 4px solid #C54B4B;;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        cursor: pointer;
        user-select: none;
        position: absolute;
        bottom: 5px;
        right: 0px;
        background-color: rgba(255, 255, 255, 0.9);
    `;

    export const BotoesStyled = styled.div`
        height: 100%;
        width: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
    `;
    export const PMenosStyled = styled(PMais2Styled)`
       padding-bottom: 5px;
       font-size: 1.9em;
    `;
    export const PQuantStyled = styled.p`
        font-size: 1.25em;
        font-family: "Lato", Arial, Helvetica, sans-serif;
        font-weight: 700;
        padding-bottom: 2px;
        color:rgb(173, 61, 61);
    `;