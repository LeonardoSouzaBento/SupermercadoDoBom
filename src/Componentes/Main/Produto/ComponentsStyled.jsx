import styled from "styled-components";
// Oferta
//Container da imagem e div pequenas
export const DivOfertaStyled = styled.div`
    height: 100%;
    width: 140px;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`;
export const PaiImgOfertaStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(207, 207, 207);
    border-radius: 4px;
`;
export const ImgOfertaStyed = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const DivPesoStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5px;
    left: 5px;
    background-color: rgb(229, 229, 229);
    height: 20px;
    width: 45px;
    border-radius: 10px;
`;

export const DivOffStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    left: 5px;
    background-color: rgb(229, 229, 229);
    height: 20px;
    width: 45px;
    border-radius: 10px;
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
`;

export const PprecoStyled = styled.p`
    width: 100%;
    text-align: center;
    text-indent: -10px;
`;

export const DivMaisStyled = styled.div`
    width: 40px;
    height: 100%;
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

//Descrição da Oferta, nome apenas
export const DescOfertaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: calc(100% - 140px);
    padding: 7px;
    padding-top: 9px;
    box-sizing: border-box;
    gap: 5px;
`;

export const DivNomeStyled = styled.div`
    height: calc(100% - 40px);
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;  
`;
export const PnomeStyled = styled.p`
  text-transform: uppercase;
`;

