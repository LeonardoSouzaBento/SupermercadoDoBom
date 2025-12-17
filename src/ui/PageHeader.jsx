import styled, { css } from 'styled-components';

export const HeaderPageStyled = styled.header`
  width: 100%;
  height: 5.2rem;
  margin-bottom: 0;
  background-color: var(--primary);
  display: flex;
  align-items: center;

  /* wrapper de cart */
  ${(props) =>
    props.$cart &&
    css`
      & > div {
        width: max-content;
        margin: auto;
        text-align: left;

        @media screen and (max-width: 414px) {
          margin: 0;
          padding-left: 20px;
        }
        @media screen and (min-width: 414px) and (max-width: 596px) {
          width: 40rem;
        }
        @media screen and (min-width: 596px) and (max-width: 768px) {
          width: 575px;
        }
        @media screen and (min-width: 769px) {
          width: 724px;
        }
      }
    `}
`;

export const TitlePageStyled = styled.h2`
  width: 100%;
  text-align: left;
  color: var(--white-foreground);
`;
