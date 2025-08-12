import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 5;
  transition: filter 0.8s ease;
  ${(props) => props.$opacity !== 1 && "filter: opacity(0);"};
`;

export const DivMainStyled = styled.div`
  width: 100%;
  max-width: 416px;
  padding: 24px;
  padding-bottom: 25px;
  padding-top: 16px;
  box-sizing: border-box;
  background-color: #d5343a;
  overflow: hidden;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 3px -1px rgba(41, 46, 117, 0.6),
    3px 0px 3px -2px rgba(41, 46, 117, 0.3),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.3);
  @media screen and (max-width: 375px) {
    padding: 16px;
    padding-bottom: 18px;
  }
  @media screen and (min-width: 375px) and (max-width: 577px) {
    top: 43%;
  }
`;

export const DivSpanCloseStyled = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  transition: background-color 0.05s linear;

  &:hover {
    background-color: hsla(358, 66%, 43%, 1);
  }
`;

export const SpanCloseStyled = styled.span`
  font-weight: 400;
  color: white;
  scale: 1.07;

  @media screen and (max-width: 375px) {
    font-size: 1.45em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.48em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.51em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.53em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.5em;
  }
`;

export const H1LoginStyled = styled.h1`
  width: 100%;
  box-sizing: border-box;
  height: max-content;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.3em;
  text-align: center;
  color: white;
  margin-bottom: 16px;

  @media screen and (max-width: 375px) {
    font-size: 1.391em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.445em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.498em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.552em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.605em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.659em;
  }
`;

export const DivEmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-bottom: 18px;
`;

export const PEmailStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: white;
  letter-spacing: 0.65px;

  @media screen and (max-width: 375px) {
    font-size: 1.259em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.264em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.269em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.275em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.281em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.286em;
  }
`;

export const InputEmailStyled = styled.input`
  width: 100%;
  height: 44px;
  background-color: white;
  border: none;
  border-radius: 8px;
  text-indent: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.1em;
  box-shadow: 0px 4px 10px rgba(41, 46, 117, 0.12);

  &:focus {
    outline: 1px solid #b12328;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.11em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.117em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.135em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.139em;
  }
`;

export const DivLoginGoogle = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 3px 3px -1px rgba(41, 46, 117, 0.24),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  &:hover {
    background-color: rgb(245, 249, 255);
  }
  ${(props) => props.$whatsapp && "margin-bottom: 0px;"}
`;

export const PLoginGoogleStyled = styled.p`
  width: 100%;
  padding-right: 18px;
  padding-bottom: 1px;
  text-align: center;
  color: #2c3edb;
  ${(props) => props.$whatsapp && "color: #294E33;"}
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  user-select: none;
  scale: 1.01;

  @media screen and (max-width: 375px) {
    font-size: 1.07em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.115em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.128em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.13em;
  }
`;

export const ImgGoogleStyled = styled.img`
  height: 100%;
  width: auto;
  padding: 2px;
  padding-right: 8px;
  padding-left: 0px;
  ${(props) => props.$whatsapp && "scale: 0.87;"};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  filter: contrast(1.3) brightness(0.99);
  mix-blend-mode: multiply;
`;
