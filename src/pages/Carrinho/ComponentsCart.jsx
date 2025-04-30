import styled from "styled-components";

export const BodyStyled = styled.div`
    background-color: rgb(240, 240, 240);
    padding-top: 12px;
    padding-bottom: 30px;
    min-height: 100vh;
    height: auto;
`;

export const MainStyled = styled.main`
    width: calc(100% - 30px);
    margin: auto;
    @media screen and (min-width: 320px) and (max-width: 374px){
        width: calc(100% - 20px);
    }
    /* @media screen and (min-width: 375px) and (max-width: 576px){
        width: calc(100% - 30px);
    }
    @media screen and (min-width: 769px){
        width: calc(100% - 30px);
    } */
`;

export const CartSectionStyed = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 12px 12px 20px 20px;
    padding: 12px;
    padding-top: 0px;
    padding-bottom: 14px;
    box-sizing: border-box;
    border: 1px solid rgb(135, 135, 135);
    
    @media screen and (min-width: 577px) and (max-width: 768px){
        margin-bottom: 17px;
    }
    @media screen and (min-width: 769px){
        width: calc(100% - 255px);
        max-width: none;
        margin: 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 15px;
        margin-bottom: 20px;
        padding-top: 7px;
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
    font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
    color: rgb(0, 0, 0);
    text-align: center;
    font-weight: 300;
    font-size: 1.2em;

    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.16em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.21em;
    }
    @media screen and (min-width: 577px){
        font-size: 1.23em;
    }
`;

export const ContainerOfListStyled = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const DivFlexRowStyled = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const DivSeeAllStyled = styled.div`
    height: 40px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 6px;
    background-color: rgb(243, 243, 243);
    @media screen and(min-width: 768px){
        width: 50%;
    }
`;

export const PSeeAll = styled.p`
    font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding-bottom: 2px;
    text-transform: uppercase;
    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.07em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.092em;
    }

    @media screen and (min-width: 577px){
        font-size: 1.11em;
    }
`;

export const DivAddStyled = styled.div`
    width: 95%;
    max-width: 450px;
    margin: auto;
    height: 40px;
    margin-bottom: 26px;
    padding-bottom: 2px;
    display: flex;
    justify-content: center;
    gap: 12px;
    align-items: center;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(123, 123, 123);

    @media screen and (min-width: 769px){
       display: none;
    }
`;

export const PAddStyled = styled.p`
    font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
    font-weight: 300;
    @media screen and (min-width: 320px) and (max-width: 374px){
            font-size: 1.16em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.19em;
    }
    @media screen and (min-width: 577px){
        font-size: 1.22em;
    }
`;

/*seção Finalizar*/

export const DivAdd2Styled = styled(DivAddStyled)`
  min-width: 100%;
  display: none;
  margin: 0px;
  box-shadow: none;
  border-radius: 7px;
  @media screen and (min-width: 769px){
    display: flex;
  }
`;

export const FinishSectionStyled = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
    background-color: white;
    border: 1px solid rgb(128, 128, 128);
    border-radius: 9px;
    padding: 15px 0px;
    padding-top: 12px;

    @media screen and (min-width: 769px){
        width: 240px;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(149, 149, 149);
        position: fixed;
        top: 0;
        right: 0px;
        /* transform: translateY(-50%); */
    }

`;

export const ContainerStyled = styled.div`
    height: auto;
    width: 100%;
    max-width: 460px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    border-radius: 7px;
    padding: 0px 10px;
    box-sizing: border-box;

    @media screen and (min-width: 769px){
       margin: 0px;
    }
`;

export const DivAvisoStyled = styled.div`
    width: 100%;
    height: max-content;
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 12px 15px;
    box-sizing: border-box;
    background-color: rgb(255, 236, 202);
`;

export const PAvisoStyled = styled.p`
    font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: rgb(188, 0, 0);
    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.09em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.115em;
    }

    @media screen and (min-width: 577px){
        font-size: 1.16em;
    }
`;

export const DivValueStyled = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 16px;
    padding: 0px 5px;
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;

    @media screen and (min-width: 769px){
       padding-left: 5px;
       gap: 15px;
       margin-bottom: 20px;
    }
`;

export const DivStyled = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    
    @media screen and (min-width: 769px){
        flex-direction: column;
        gap: 5px;
    }
`;

export const PValueStyled = styled.p`
   font-family: "Roboto", Arial, Helvetica, sans-serif;

   @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.08em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.09em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 1.1em;
    }
`;


export const DivContinueStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color:${(props)=>props.$nocontinue?"rgb(145, 211, 145)":"rgb(20, 136, 20)"};
    border-radius: 7px;
    color: white;
`;

export const PContinueStyled = styled.p`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding-bottom: 2px;

    @media screen and (min-width: 320px) and (max-width: 374px){
        font-size: 1.15em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
        font-size: 1.18em;
    }

    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 1.2em;
    }
`;

