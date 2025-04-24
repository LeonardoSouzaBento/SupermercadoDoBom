import styled from "styled-components";
// Oferta
//Container da imagem e div pequenas
export const PaiProdStyled = styled.div`
    display: flex;
    width: 100%;
    min-width: 290px;
    max-width: 330px;
    height: 165px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgb(145, 145, 145);
    /* border: 1px solid rgb(176, 103, 85); */
    cursor: default;
    user-select: none;
    position: relative;

    @media screen and (min-width: 320px) and (max-width: 375px){
       max-width: 270px;
       height: 180px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
       max-width: 310px;
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

export const DivOfertaStyled = styled.div`
    height: 100%;
    width: 150px;
    padding: 5px;
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
        bottom: 5px;
        right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #C54B4B;
        border-radius: 50%;
        cursor: pointer;
        @media screen and (min-width: 769px) and (max-width: 992px){
        right: 2px;
        }
        @media screen and (min-width: 993px){
        right: 1px;
        bottom: 6px;
        }
    `;

    export const PMaisStyled= styled.p`
        font-size: 1.6em;
        font-family: "Open Sans" ,Arial, Helvetica, sans-serif;
        font-weight: 700;
        color: white;
        cursor: pointer;
        user-select: none;
        color: #C54B4B;
        padding-bottom: 3px;
    `;

    //Selecionar a quantidade, + 1 e -
    export const DivQuantStyled = styled.div`
        width: 130px;
        height: 32px;
        border: 4px solid #C54B4B;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        cursor: pointer;
        user-select: none;
        position: absolute;
        bottom: 5px;
        right: 5px;
        background-color: rgb(255, 255, 255);
    `;

    export const BotoesStyled = styled.div`
        height: 100%;
        width: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
    `;
    export const PMenosStyled = styled(PMaisStyled)`
       padding-bottom: 7px;
       font-size: 1.9em;
       font-weight: 500;
    `;
    export const PQuantStyled = styled.p`
        font-size: 1.2em;
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
        font-weight: 700;
        padding-bottom: 2px;
        color: #C54B4B;
    `;

//Descrição da Oferta, nome, desconto e peso
export const DescOfertaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: calc(100% - 150px);
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
        font-size: 0.8em;
        letter-spacing: 1.1px;
        font-weight: 500;
        line-height: 18px;
        font-family: "Poppins", Arial, sans-serif;
        margin: auto;
        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.8em;
            letter-spacing: 1px;
            font-weight: 500;
        }
        @media screen and (min-width: 375px) and (max-width: 576px){
            font-size: 0.85em;
            line-height: 18.5px;
        }
        @media screen and (min-width: 577px){
            font-size: 0.9em;
            line-height: 20px;
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
        padding: 0px 6px;
        background-color: #CDD4AE;
        /* background-color:rgb(93, 119, 93); */
        border-radius: 7px;
    `;

    export const PoffStyled = styled.p`
        color: #13450a;
        /* color: white; */
        font-family: "Poppins",Arial,sans-serif;
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
        font-family: "Poppins",Arial,sans-serif;
        background-color: rgb(232, 232, 232);
        padding: 0px 15px;
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
        align-items: center;
    `;

    export const PprecoStyled = styled.p`
        width: 100%;
        font-family: "Roboto Flex",Arial,sans-serif;
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
