import styled from "styled-components";

export const MainStyled = styled.main`
    width: calc(100% - 14px);
    margin: auto;
    margin-bottom: 30px;
    
    @media screen and (min-width: 320px) and (max-width: 374px){
        width: calc(100% - 10px);
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        margin-bottom: 36px;
    }
    @media screen and (min-width: 769px){
        width: calc(100% - 30px);
    }
`;

export const CartSectionStyed = styled.div`
    width: 100%;
    max-width: 390px;
    margin: auto;
    background-color: white;
    margin-bottom: 12px;
    margin-top: 7px;
    border-radius: 6px 6px 12px 12px;
    padding: 12px;
    padding-top: 0px;
    padding-bottom: 15px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgb(189, 189, 189);
    border: 1px solid rgb(184, 184, 184);

    @media screen and (min-width: 577px) and (max-width: 768px){
        max-width: 470px;
        border-radius: 10px 10px 15px 15px;
        margin-bottom: 17px;
        padding-right: 8px;
    }
    @media screen and (min-width: 769px){
        min-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 15px;
        margin-bottom: 20px;
        margin-top: 12px;
        padding: 24px;
        padding-top: 7px;
        border-radius: 10px;
        box-shadow: 0px 0px 2px rgb(189, 189, 189);
    }
`;

export const DivHeadStyled = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const PHeadStyled = styled.p`
    width: 100%;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 1.2em;

    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.02em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
    }
`;

export const DivSeeAllStyled = styled.div`
    height: 40px;
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid rgb(155, 155, 155);
    border-radius: 7px 7px 11px 11px;
    box-shadow: 0px 1px 2px rgb(221, 221, 221);

    
    @media screen and(min-width: 768px){
        width: 50%;
        box-shadow: 0px 1px 2px rgb(205, 205, 205);
    }
`;

export const PSeeAll = styled.p`
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    padding-bottom: 2px;
    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1em;
        letter-spacing: 0.71px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
    }
`;

export const SpanSeeAllStyled = styled.span`
   font-weight: 500;

   @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.4em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
    }
`;

export const DivAddStyled = styled.div`
    width: 90%;
    max-width: 350px;
    margin: auto;
    height: 34px;
    margin-bottom: 26px;
    padding-bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid rgb(98, 98, 98);
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.24);
    
    @media screen and(min-width: 769px){
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
        margin:0px;
    }
`;

export const PAddStyled = styled.p`
   font-family: "Inter", Arial, Helvetica, sans-serif;
   font-weight: 400;
   @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.14em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
    }
`;

export const DivAdd2Styled = styled(DivAddStyled)`
  width: 100%;
`;

// const ContainerFinishStyled = styled.div`
  
// `;

export const FinishSectionStyled = styled.div`
    width: 100%;
    max-width: 390px;
    margin: auto;
    background-color: white;
    border: 1px solid rgb(150, 150, 150);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.198);
    border-radius: 9px 9px 12px 12px;
    padding: 20px 10px;
    padding-top: 16px;
    box-sizing: border-box;

    @media screen and (min-width: 577px) and (max-width: 768px){
        max-width: 470px;
        padding: 24px 20px;
    }
    
    @media screen and (min-width: 769px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        min-width: 100%;
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0px;
        margin-bottom: 20px;
    }

`;

export const ContainerStyled = styled.div`
  height: auto;
  width: auto;
`;

export const DivAvisoStyled = styled.div`
    width: 100%;
    height: max-content;
    margin: auto;
    display: flex;
    align-items: center;
    border: 1px solid rgb(225, 94, 0);
    border-radius: 4px;
    padding: 12px;
    box-sizing: border-box;
    background-color: rgb(255, 240, 194);
    margin-bottom: 12px;
    color: rgb(142, 0, 0);
`;

export const PAvisoStyled = styled.p`
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 500;

    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
    }
`;

export const DivCupomStyled = styled.div`
   width: 100%;
    margin: auto;
    margin-bottom: 18px;
    display: flex;
    border: 1px solid rgb(187, 187, 187);
    border-radius: 4px;
    padding: 5px 0px;
    padding-right: 7px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    gap: 5px;

    @media screen and (min-width: 769px){
        padding: 2px 10px;
        margin: 0;
    }
`;

export const PCupomStyled = styled.p`
    width: 50%;
    padding: 10px 0px;
    padding-left: 10px;
    font-family: "Inter", Arial, Helvetica, sans-serif;
`;

export const InputCupomStyled = styled.input`
    border-radius: 4px;
    border: 1px solid black;
    height: 20px;
    padding: 4px 10px;
    font-size: 0.9em;
    width: 40%;
`;

export const DivValueStyled = styled.div`
    width: 100%;
    height: 40px;
    margin: auto;
    padding: 10px 6px;
    margin-bottom: 10px;
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    gap: 12px;

    @media screen and (max-width: 769px){
        padding: 0px;
        margin: 0px;
    }
`;

export const DivStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    padding-right: 12px;
    box-sizing: border-box;
`;

export const PValueStyled = styled.p`
   font-family: "Inter", Arial, Helvetica, sans-serif;
   font-weight: 600;

   @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.05em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
    }
`;

export const DivContinueStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: rgb(20, 136, 20);
    border-radius: 5px;
    color: white;
`;

export const PContinueStyled = styled.p`
   font-family: "Inter", Arial, Helvetica, sans-serif;
`;

