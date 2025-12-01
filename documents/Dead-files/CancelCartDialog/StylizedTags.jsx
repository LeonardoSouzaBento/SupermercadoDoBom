import styled from "styled-components";
import { CentralizeDiv } from "@components/GenericStylizedTags";

export const ContainerStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const DivStyled = styled.div`
  width: calc(100% - 16px);
  max-width: 400px;
  height: ${(props) => props.$heightDiv};
  padding: 24px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  position: absolute;
  right: 8px;
  bottom: 8px;
  background-color: #db2c32;
  /* box-shadow: 0px -10px 30px rgba(41, 46, 117, 0.24); */
  transition: height 0.15s ease;
  ${(props) => props.$feedback && "background-size: 0% 0%;"};

  @media screen and (max-width: 450px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const DivSpanStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
  position: relative;

  & > span {
    
    padding: 5px;
    color: #c2272c;
    font-weight: 700;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0px 15px 30px rgba(41, 46, 117, 0.09);
    position: absolute;
    transform: translateY(-85%);
    z-index: 1;
    ${(props) => props.$feedback && "color: rgb(99, 154, 48);"};
    ${(props) => props.$feedback && "scale: 0.9;"};
  }
`;

export const PQuestionStyled = styled.p`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 14px;
  margin-top: 10px;
  border-radius: 5px;
  font-family: var(--h-font);
  font-weight: 400;
  text-align: center;
  color: white;
`;

export const DivSimNaoStyled = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 12px;
  background-color: transparent;

  /* Estilos para PSimStyled */
  & p {
    width: 100%;
    font-family: var(--bt-font);
    font-weight: 500;
    padding: 12.5px 0px;
    padding-bottom: 14.5px;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 0.72px;
    border-radius: 8px;
    background-color: #8f1d20;
    color: white;

    &:hover {
      background-color: #75171b;
    }
    transition: background-color 0.1s ease;
  }

  /* Estilos para PVoltarStyled */
  & > p:last-child {
    color: black;
    background-color: rgb(255, 255, 255);
    &:hover {
      background-color: #ebeff4;
    }
    text-shadow: 0.2px 0.2px 0px black;
  }
`;

export const PSimStyled = styled.p`
  width: 100%;
  font-family: var(--bt-font);
  font-weight: 500;
  padding: 12.5px 0px;
  padding-bottom: 14.5px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 8px;
  background-color: #8f1d20;
  color: white;

  &:hover {
    background-color: #75171b;
  }
  transition: background-color 0.1s ease;
`;

export const PVoltarStyled = styled(PSimStyled)`
  color: black;
  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: #ebeff4;
  }
  text-shadow: 0.2px 0.2px 0px black;
`;

export const DivFeedBackStyled = styled(CentralizeDiv)`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const PFeedBackStyled = styled(PQuestionStyled)`
  color: white;
  scale: 1.19;
  padding: 6px 0px;
  padding-top: 8px;
`;

