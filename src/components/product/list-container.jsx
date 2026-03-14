import styled, { css } from 'styled-components';

export const ListContainerSc = styled.div`
  width: auto;
  height: max-content;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 7px;
  overflow-x: scroll;
  position: relative;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.$variant == 'search' &&
    css`
      padding-bottom: 12px;
      @media screen and (min-width: 385px) {
        justify-content: center;
        gap: 12px;
      }
      @media screen and (min-width: 577px) {
        max-width: 90%;
      }
      @media screen and (min-width: 768px) {
        justify-content: flex-start;
        padding-left: 24px;
      }
    `}
  ${(props) =>
    props.$variant === 'cart' &&
    css`
      justify-content: flex-start;
      padding-inline: 24px;
      padding-top: 8px;
      padding-bottom: 6px;
      margin-bottom: 0;
      margin: auto;
    `}
`;
