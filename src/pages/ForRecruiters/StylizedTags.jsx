import styled, { css } from 'styled-components';
import { CentralizeDiv, H1BaseStyled } from '@components/GenericStylizedTags';

export const BodyStyled = styled.div`
  height: auto;
  padding: 4px 0;
  margin-bottom: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperStyled = styled.div`
  width: 100%;
  max-width: 530px;
  height: 98vh;
  padding: 36px;
  padding-top: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  border-radius: 8px;
  background-color: var(--white-foreground);
  box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.6), 3px 0px 3px -2px rgba(41, 46, 117, 0.125),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.125);
  position: relative;
  z-index: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media screen and (max-width: 530px) {
    border-radius: 0px;
  }

  @media screen and (max-width: 577px) {
    height: auto;
    overflow-y: visible;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavOptionsStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 12px;
  margin-bottom: 32px;

  @media screen and (max-width: 577px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const DivNameSpanStyled = styled(CentralizeDiv)`
  height: 56px;
  width: max-content;
  padding: 0px 16px;
  box-sizing: border-box;
  gap: 10px;
  flex: 1 0 auto;
  border-bottom: 1px solid var(--border);
  color: var(--primary);
  background-color: var(--white-foreground);
  transition: all 0.15s ease;
  ${(props) =>
    props.$buttonSelected &&
    css`
      border-bottom: 4px solid var(--border);
    `};
  cursor: pointer;

  @media screen and (max-width: 577px) {
    width: 100%;
  }
  @media screen and (min-width: 577px) {
    max-width: 48%;
  }
`;

export const H1OptionStyled = styled(H1BaseStyled)`
  cursor: pointer;
  color: var(--primary);
`;

export const DivSpanStyled = styled(CentralizeDiv)`
  height: 40px;
  width: max-content;
`;

export const SpanStyled = styled.span`
  font-weight: 500;
  font-variation-settings: 'FILL' 1;
  user-select: none;
  ${(props) => props.$person && ''}
`;

export const DivContentStyled = styled.div``;

export const PStyled = styled.p`
  width: 100%;
  max-width: 400px;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 1.27;
  color: var(--dark-primary);

  & strong {
    color: var(--dark-primary);
  }

  ${(props) => props.$mb && 'margin-bottom: 13px;'};
  ${(props) => props.$moreWidth && 'max-width: 100%;'};
`;

export const H1Styled = styled.h1`
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 20px;
`;

export const H2Styled = styled.h2`
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 20px;
`;
