import styled from "styled-components";
// Oferta
//Container da imagem e div pequenas
export const PaiProdStyled = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    min-width: 290px;
    max-width: 330px;
    height: 160px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgb(179, 179, 179);
    box-shadow: 0px 0px 3px rgb(201, 201, 201);
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
    `;

    export const DivOffStyled = styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 7px;
        left: 7px;
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
        font-family: "Roboto Flex",Arial,sans-serif;
    `;
    export const PnomeStyled = styled.p`
        text-transform: uppercase;
        font-size: 0.8em;
        letter-spacing: 1.1px;
        font-weight: 500;
        line-height: 18px;

        @media screen and (min-width: 320px) and (max-width: 375px){
            font-size: 0.8em;
            letter-spacing: 1px;
            font-weight: 500;
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
        text-align: center;
        text-indent: -5px;
        font-family: "Open Sans",Arial,sans-serif;
        font-weight: 500;
    `;

    export const DivMaisStyled = styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        color: white;
        border-radius: 20px 20px 20px 20px;
    `;

//Selecionar a quantidade, + 1 e -
export const DivQuantStyled = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(215, 69, 69);
    border-radius: 7px;
    color: white;
    display: none;
`;
    export const BotoesStyled = styled.div`
        height: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    export const PQuantStyled = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    `;

