import styled from "styled-components";
// Oferta
//Container da imagem e div pequenas
export const PaiProdStyled = styled.div`
    display: flex;
    width: 100%;
    min-width: 290px;
    max-width: 325px;
    height: 160px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgb(179, 179, 179);
    box-shadow: 0px 0px 3px rgb(201, 201, 201);
    cursor: default;
    user-select: none;

    @media screen and (min-width: 320px) and (max-width: 375px){
       max-width: 290px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
       max-width: 310px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
       max-width: 320px;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
       max-width: 325px;
    }
`;

export const DivOfertaStyled = styled.div`
    height: 100%;
    width: 160px;
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
        padding: 10px;
        padding-right: 5px;
        box-sizing: border-box;
    `;

    export const DivOffStyled = styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 6px;
        left: 8px;
        height: 20px;
        background-color: #CDD4AE;
        border-radius: 6px 3px 10px 0px;
        font-family: "Poppins",Arial,sans-serif;
        font-weight: 500;
    `;
    export const PoffStyled = styled.p`
        padding: 0px 10px;
        font-size: 0.84em;
        color: #13450a;
        font-family: "Poppins",Arial,sans-serif;
        font-weight: 600;
    `;

    export const DivPesoStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 7px;
    left: 10px;
    background-color: rgb(229, 229, 229);
    border-radius: 10px;
    `;
    export const PpesoStyled= styled.p`
    font-size: 0.845em;
    padding: 1px 11px;
    letter-spacing: 0.5px;
    font-family: "Poppins",Arial,sans-serif;
    `;

//Descrição da Oferta, nome apenas
export const DescOfertaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding: 7px;
    padding-top: 9px;
    box-sizing: border-box;
    gap: 5px;
`;

    export const DivNomeStyled = styled.div`
        height: calc(100% - 40px);
        display: flex;
        align-items: center;
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

// Preco com botão +
export const PaiPrecoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
`;

    export const DivPrecoStyled = styled.div`
        width: calc(100% - 40px);
        height: 100%;
        display: flex;
        align-items: center;
    `;

    export const PprecoStyled = styled.p`
        width: 100%;
        font-family: "Roboto Flex",Arial,sans-serif;
        font-weight: 600;

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

    export const DivMaisStyled = styled.div`
        width: 35px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: #C54B4B; */
        background-color:rgb(255, 255, 255);
        color: white;
        /* border-radius: 20px 20px 7px 20px; */
        border-radius: 20px;
        border: 1px solid rgb(117, 117, 117);
        cursor: pointer;
    `;

    export const PmaisStyled= styled.p`
      font-size: 1.55em;
      font-family: "Poppins" ,Arial, Helvetica, sans-serif;
      font-weight: 500;
      color: white;
      cursor: pointer;
      user-select: none;
      color:rgb(212, 40, 40);
    `;

//Selecionar a quantidade, + 1 e -
export const DivQuantStyled = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color:rgb(197, 75, 75);
    border-radius: 18px;
    color: white;
    cursor: default;
    user-select: none;
`;
    export const BotoesStyled = styled.div`
        height: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Open Sans";
    `;
    export const PQuantStyled = styled.p`
        font-size: 1.5em;
        font-family: "Open Sans";
        font-weight: 500;
    `;
    export const QuantStyled = styled.p`
        font-size: 1.2em;
        font-family: "Open Sans";
        font-weight: 500;
    `;

