import styled, { css } from "styled-components";
import { CentralizeDiv } from "@components/GenericStylizedTags";

export const PageWrapperStyled = styled.div`
  min-height: 90vh;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  background: linear-gradient(to bottom, var(--back-color), rgb(243, 244, 246));
`;

export const ContainerStyled = styled.div`
  width: calc(100% - 28px);
  max-width: 420px;
  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
`;

export const LogoWrapperStyled = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const LogoCircleStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  padding-right: 2.2px;
  border-radius: 50%;
  background-color: var(--red);
  margin-bottom: 12px;
  box-shadow: 0 4px 8px rgba(56, 61, 106, 0.25);
  transform: scaleX(-1);

  & span {
    color: rgba(255, 255, 255, 0.98);
    font-weight: 500;
    padding-top: 2px;
    padding-left: 1px;
    font-size: 37px;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 27.5px;
  font-weight: bold;
  color: var(--purple);
  margin-bottom: 4px;
  font-family: Lato, sans-serif;
`;

export const SubtitleStyled = styled.p`
  color: #64748b;
  font-family: var(--h-font);

  @media screen and (max-width: 375px) {
    font-size: 1.027em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.035em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.066em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.082em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.09em;
  }
`;

export const CardStyled = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(56, 61, 106, 0.125);
  padding: 24px;
  position: relative;
`;

export const CardHeaderStyled = styled.header`
  margin-bottom: 24px;
  ${(props) => props.$inEmail && "margin-bottom: 8px;"};
`;

export const CardTitleStyled = styled.h2`
  font-family: Lato, sans-serif;
  color: var(--purple);
  text-align: left;
  margin-bottom: 4px;

  @media screen and (max-width: 375px) {
    font-size: 1.33em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.336em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.346em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.358em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.369em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.375em;
  }
`;

export const CardDescriptionStyled = styled.p`
  color: #64748b;
  font-family: var(--h-font);
  text-align: left;

  @media screen and (max-width: 375px) {
    font-size: 0.94em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.941em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.944em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 0.946em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.949em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 0.95em;
  }
`;

export const ButtonStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  font-family: var(--bt-font);
  font-weight: 550;
  color: var(--dark-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border: none;
  margin-bottom: 16px;
  transition: all 0.15s ease;

  @media screen and (max-width: 375px) {
    font-size: 1.033em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.037em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.045em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.054em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.063em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.067em;
  }

  ${(props) =>
    props.$variant === "visitor" &&
    `
    background: var(--bluish-white);
    color: #0f172a;
    &:hover { background: var(--bluish-white-hover); }
  `}

  ${(props) =>
    props.$variant === "market" &&
    `
    background: var(--purple);
    color: white;
    &:hover { background: var(--purple-hover); }
  `}

  ${(props) =>
    props.$variant === "google" &&
    `
    background-color: white;
    border: 1px solid var(--light-border);
    &:hover { background-color: var(--white-hover); }
  `}

  ${(props) =>
    props.$variant === "ghost" &&
    `
    background: transparent;
    color: var(--purple);
    border: 1px solid var(--border);
    &:hover { background: #f8fafc; }
  `}
  ${(props) => props.$reset && "margin-bottom: 12px;"}
  ${(props) =>
    props.$variant === "market" &&
    props.$disable &&
    css`
      background-color: var(--disable);
      &:hover {
        background-color: var(--disable-hover);
      }
    `}
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
  ${(props) => props.$password && "margin-bottom: 16px;"}
  ${(props) => props.$email && "padding-top: 16px;"}
  ${(props) => props.$reset && "margin-bottom: 20px;"}

  & p {
    border: 1px solid var(--dark-red);
    outline: 3px solid var(--pink);
    color: var(--dark-red);
    font-family: var(--p-font);
    font-weight: 600;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 8px 0;
    padding-left: 12px;
    margin-top: 6px;

    @media screen and (max-width: 375px) {
      font-size: 0.99em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 0.997em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 1.012em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 1.027em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 1.042em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 1.05em;
    }
  }

  & a {
    text-align: center;
    font-family: var(--p-font);
    color: #551a8b;
    text-decoration: underline;
    margin-top: 8px;
    cursor: default;

    @media screen and (max-width: 375px) {
      font-size: 1.05em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 1.056em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 1.068em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 1.081em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 1.094em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 1.1em;
    }
  }
`;

export const LabelStyled = styled.label`
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  color: var(--dark-purple);

  @media screen and (max-width: 375px) {
    font-size: 1.073em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.082em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.099em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.117em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.136em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.145em;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  font-family: var(--p-font);
  font-weight: 400;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: var(--purple);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }
  @media screen and (max-width: 375px) {
    font-size: 1.095em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.104em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.121em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.159em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.168em;
  }
`;

export const PasswordWrapperStyled = styled.div`
  position: relative;
`;

export const TogglePasswordStyled = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #94a3b8;

  &:hover {
    color: #1e293b;
  }
`;

export const SmallTextStyled = styled.p`
  font-size: 13.5px;
  color: #64748b;
  text-align: center;
  font-family: var(--h-font);
  margin-top: 24px;
`;

export const VisitorBoxStyled = styled.div`
  text-align: center;
  padding: 8px;
  background: var(--back-color);
  border-radius: 12px;
  margin-bottom: 16px;

  & p {
    color: var(--dark-red);
    scale: 0.95;
    font-weight: 400;
    text-align: left;
  }
`;
