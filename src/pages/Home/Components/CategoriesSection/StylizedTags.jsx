import styled, { css } from 'styled-components';

export const DivStyled = styled.div`
  margin-bottom: 8px;
  overflow-x: hidden;
  position: relative;
  z-index: 2;

  width: 100%;

  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
    margin-bottom: 10px;
  }
`;

export const DivLabelPromosStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  margin-bottom: 32px;
  position: relative;

  @media screen and (min-width: 1201px) {
    padding-right: 25px;
  }
`;

export const H1LabelStyled = styled.h3`
  color: var(--dark-primary);
  text-align: center;
`;

export const DivfStyled = styled.div`
  width: auto;
  margin: auto;
  padding: 8px;
  padding-right: 20px;
  padding-bottom: 24px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  gap: 12px;
  position: relative;
  overflow-x: scroll;
  user-select: none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 375px) {
    gap: 15px;
  }
  @media screen and (min-width: 1201px) {
    padding-right: 6px;
    justify-content: space-between;
  }
  @media screen and (min-width: 375px) and (max-width: 1200px) {
    padding-right: 20px;
  }
  @media screen and (min-width: 1201px) {
    gap: 0;
  }
`;

//span para animação
export const SpanStyled = styled.span`
  position: absolute;
  top: 20%;
  right: 20px;
  z-index: 2;
  border-radius: 50%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgb(155, 139, 227);

  border: 2px solid rgb(176, 130, 232);
  color: rgb(57, 12, 119);
  background-color: rgba(209, 196, 241, 0.799);
  rotate: 15deg;
  will-change: transform;
  display: none;
`;

export const DivCatStyled = styled.div`
  min-width: 116px;
  width: 116px;
  max-height: 124px;
  padding: 12px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  flex: auto;
  border-radius: 16px;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$selected &&
    css`
      z-index: 1;
      background-color: var(--white-foreground);
      box-shadow: var(--shadow-xs);
    `}
  ${(props) =>
    !props.$selected &&
    css`
      &:hover {
        box-shadow: var(--shadow-sm);
      }
    `}

  & div:first-child {
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary);
    border-radius: 50%;
    transition: all 0.15s ease;

    ${(props) =>
      props.$selected &&
      css`
        scale: 1.05;
        box-shadow: var(--shadow-md);
      `}
  }
  & div:last-child {
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & p {
    font-family: var(--font-header);
    text-align: center;
    letter-spacing: 0.05rem;
    line-height: 1.10;
    font-size: var(--text-xs);
    margin: 0;
    color: var(--dark-primary);
  }
`;
