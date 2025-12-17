import styled from "styled-components";
import { CentralizeDiv } from "@components/GenericStylizedTags";

export const WrapperStyled = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  position: fixed;
  left: 0;
  bottom: 6px;
  z-index: 4;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const SpaceForNavBarStyled = styled.div`
  height: 72px;
  width: 100%;
  position: relative;
`;

export const DivButtonsStyled = styled(CentralizeDiv)`
  width: calc(100% - 16px);
  max-width: 420px;
  height: 56px;
  padding: 6px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px;
  background-color: var(--primary);
  background-image: linear-gradient(
    45deg,
    var(--primary-hover),
    var(--primary)
  );
  box-shadow: var(--shadow-md);

  @media screen and (min-width: 577px) {
    margin-right: 8px;
  }
`;

export const ButtonStyled = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }

  & > span {
    color: var(--white-foreground);
    font-weight: 300;
    
  }

  &.active-button {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .active-span {
    color: var(--white-foreground);
    font-variation-settings: "FILL" 1;
    text-shadow: 0 4px 10px hsla(0, 31%, 24%, 0.25);
  }

  &.button-hide {
    display: none;
  }
`;


