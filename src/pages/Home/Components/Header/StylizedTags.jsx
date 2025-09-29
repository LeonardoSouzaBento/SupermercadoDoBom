import styled, { css } from "styled-components";
import { CentralizeDiv } from "@components/GenericStylizedTags";

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1390px;
  height: max-content;
  position: relative;
  background-color: var(--purple);

  @media screen and (max-width: 768px) {
    padding-bottom: 24px;
  }
  //modo paisagem
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 3.5%;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 0px 5%;
  }
  @media screen and (min-width: 1201px) {
    padding: 0px 8.1%;
  }
`;

export const DivForLogoStyled = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 375px) {
    gap: 16px;
  }
  @media (min-width: 768px) {
    max-width: 340px;
  }

  ${(props) =>
    props.$external &&
    css`
      width: 90%;
      height: 136px;
      margin: auto;

      @media (max-width: 375px) {
        gap: 0;
      }
      @media (min-width: 769px) {
        width: max-content;
        height: 144px;
      }
    `}
`;

export const LogoDivStyled = styled(CentralizeDiv)`
  background-color: var(--red);
  border-radius: 50%;
  transform: scaleX(-1);
  box-sizing: border-box;
  padding-right: 2.2px;
  box-shadow: 0px 4px 10px 0px rgba(11, 0, 65, 0.25);
  @media (max-width: 375px) {
    height: 60px;
    min-width: 60px;
    margin-right: -9px;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    height: 62px;
    width: 62px;
  }
  @media (min-width: 577px) {
    height: 68px;
    width: 68px;
  }

  & span {
    color: white;
    font-weight: 700;
    padding-top: 1px;
    padding-left: 1px;

    @media screen and (max-width: 375px) {
      font-size: 2.18em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 2.207em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 2.259em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 2.315em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 2.372em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 2.4em;
    }
  }
`;

export const DivPsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    color: white;
    letter-spacing: 0.45px;
  }

  p:first-child {
    font-family: var(--bt-font);
    font-weight: 800;

    @media (max-width: 375px) {
      font-size: 1.05em;
      max-width: 200px;
    }
    @media (min-width: 375px) and (max-width: 576px) {
      font-size: 1.05em;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      font-size: 1.06em;
    }
    @media (min-width: 769px) and (max-width: 992px) {
      font-size: 1.07em;
    }
    @media (min-width: 993px) {
      font-size: 1.08em;
    }
  }

  p:last-child {
    font-family: var(h-font);
    font-weight: 400;
    letter-spacing: auto;

    @media (max-width: 375px) {
      font-size: 1.12em;
    }
    @media (min-width: 375px) and (max-width: 576px) {
      font-size: 1.13em;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      font-size: 1.14em;
    }
    @media (min-width: 769px) and (max-width: 992px) {
      font-size: 1.15em;
    }
    @media (min-width: 993px) {
      font-size: 1.16em;
    }
  }
`;

export const SpaceButtonStyed = styled.div`
  width: 48px;
  height: 48px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const ButtonMoreOptionsStyled = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  background-color: var(--red);
  box-shadow: 0px 4px 10px 0px rgba(11, 0, 65, 0.25);
  transition: all 100ms linear;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-red);
  }

  @media screen and (max-width: 375px) {
    position: absolute;
    top: 44px;
    right: 4.5%;
  }
  @media screen and (min-width: 375px) and (max-width: 768px) {
    position: absolute;
    top: 44px;
    right: 5%;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    min-width: 48px;
  }
  @media screen and (min-width: 1201px) {
    min-width: max-content;
    padding: 0px 16px;
    gap: 4px;
    border-radius: 12px;
  }

  & span {
    cursor: pointer;
    user-select: none;

    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 1.55em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 1.6em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 1.65em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 1.7em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 1.45em;
      padding-right: 4px;
    }
  }

  & p {
    font-family: var(--bt-font);
    font-weight: 600;
    font-size: 1.05em;
    letter-spacing: 0.8px;
    margin: 0px;
    padding-bottom: 2px;
    @media (max-width: 1201px) {
      display: none;
    }
    user-select: none;
    cursor: pointer;
  }
`;

export const PStyled = styled.p`
  font-family: var(--bt-font);
  font-weight: 600;
  font-size: 1.05em;
  letter-spacing: 0.8px;
  margin: 0px;
  padding-bottom: 2px;
  @media (max-width: 1201px) {
    display: none;
  }
  user-select: none;
  cursor: pointer;
`;
